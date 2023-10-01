package com.api.kyn.oauth2;

import java.util.Arrays;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.api.kyn.entity.EAuthProvider;
import com.api.kyn.entity.ERole;
import com.api.kyn.entity.Roles;
import com.api.kyn.entity.UserAccount;
import com.api.kyn.exception.OAuth2AuthenticationProcessingException;
import com.api.kyn.oauth2.user.OAuth2UserInfo;
import com.api.kyn.oauth2.user.OAuth2UserInfoFactory;
import com.api.kyn.repository.RolesRepository;
import com.api.kyn.repository.UserAccountRepository;
import com.api.kyn.security.UserPrincipal;
import com.api.kyn.service.UserService;
@Service
public class OAuth2UserService extends DefaultOAuth2UserService {

  @Autowired
  private UserAccountRepository userRepository;

  @Autowired
  private RolesRepository rolesRepo;

  @Autowired
  private UserService userService;

  @Override
  public OAuth2User loadUser(OAuth2UserRequest oAuth2UserRequest) throws OAuth2AuthenticationException {
    OAuth2User oAuth2User = super.loadUser(oAuth2UserRequest);

    try {
      return processOAuth2User(oAuth2UserRequest, oAuth2User);
    } catch (AuthenticationException ex) {
      throw ex;
    } catch (Exception ex) {
      // Throwing an instance of AuthenticationException will trigger the
      // OAuth2AuthenticationFailureHandler
      throw new InternalAuthenticationServiceException(ex.getMessage(), ex.getCause());
    }
  }

  // This method processes the OAuth2 user information obtained from the authentication provider.
  private OAuth2User processOAuth2User(OAuth2UserRequest oAuth2UserRequest, OAuth2User oAuth2User) {
    // Extract user information from the OAuth2 user attributes.
    OAuth2UserInfo oAuth2UserInfo = OAuth2UserInfoFactory
        .getOAuth2UserInfo(oAuth2UserRequest.getClientRegistration().getRegistrationId(), oAuth2User.getAttributes());

    // Ensure that the user's email is available; it's usually a required field.
    if (!StringUtils.hasText(oAuth2UserInfo.getEmail())) {
      throw new OAuth2AuthenticationProcessingException("Email not found from OAuth2 provider");
    }

    // Check if the user with the provided email already exists in the application's database.
    Optional<UserAccount> userOptional = userRepository.findByEmail(oAuth2UserInfo.getEmail());

    UserAccount user;
    if (userOptional.isPresent()) {
      // If the user exists, update their information.
      user = userOptional.get();

      // Check if the user's authentication provider matches the current OAuth2 provider.
      if (!user.getProvider()
          .equals(EAuthProvider.valueOf(oAuth2UserRequest.getClientRegistration().getRegistrationId()))) {
        throw new OAuth2AuthenticationProcessingException("Looks like you're signed up with " +
            user.getProvider() + " account. Please use your " + user.getProvider() +
            " account to login.");
      }

      user = updateExistingUser(user, oAuth2UserInfo);
    } else {
      // If the user doesn't exist, register a new user with the information from the OAuth2 provider.
      user = registerNewUser(oAuth2UserRequest, oAuth2UserInfo);
    }

    // Return a UserPrincipal object that represents the authenticated user.
    return UserPrincipal.create(user, oAuth2User.getAttributes());
  }

  // This method creates a new user based on OAuth2 provider information.
  private UserAccount registerNewUser(OAuth2UserRequest oAuth2UserRequest, OAuth2UserInfo oAuth2UserInfo) {
    UserAccount user = new UserAccount();

    // Set user information based on OAuth2 provider data.
    user.setProvider(EAuthProvider.valueOf(oAuth2UserRequest.getClientRegistration().getRegistrationId()));
    user.setProviderId(oAuth2UserInfo.getId());
    user.setName(oAuth2UserInfo.getName());
    user.setEmail(oAuth2UserInfo.getEmail());
    user.setImageUrl(oAuth2UserInfo.getImageUrl());

    // Retrieve or create a user role (e.g., ROLE_USER).
    Roles role = rolesRepo.findByName(ERole.ROLE_USER);

    if (role == null) {
      role = userService.createRole(ERole.ROLE_USER);
    }

    user.setRoles(Arrays.asList(role));

    // Save the new user to the database.
    return userRepository.save(user);
  }

  // This method updates an existing user's information based on OAuth2 provider data.
  private UserAccount updateExistingUser(UserAccount existingUser, OAuth2UserInfo oAuth2UserInfo) {
    existingUser.setName(oAuth2UserInfo.getName());
    existingUser.setImageUrl(oAuth2UserInfo.getImageUrl());

    // Save the updated user information to the database.
    return userRepository.save(existingUser);
  }
}
