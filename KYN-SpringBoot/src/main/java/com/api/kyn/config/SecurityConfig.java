package com.api.kyn.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.api.kyn.oauth2.HttpCookieOAuth2AuthorizationRequestRepository;
import com.api.kyn.oauth2.OAuth2AuthenticationFailureHandler;
import com.api.kyn.oauth2.OAuth2AuthenticationSuccessHandler;
import com.api.kyn.security.JWTAuthEntryPoint;
import com.api.kyn.security.JWTAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true, jsr250Enabled = true, prePostEnabled = true)
public class SecurityConfig {

  @Autowired
  private JWTAuthEntryPoint authEntryPoint;

  @Autowired
  private com.api.kyn.oauth2.OAuth2UserService OAuth2UserService;

  @Autowired
  private OAuth2AuthenticationSuccessHandler oAuth2AuthenticationSuccessHandler;

  @Autowired
  private OAuth2AuthenticationFailureHandler oAuth2AuthenticationFailureHandler;

  @Bean
  public static PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

    http.cors()
    .and()
    .csrf()
    .disable()
        // Exception Handling
        .exceptionHandling()
        .authenticationEntryPoint(authEntryPoint)
        .and()

        // Session Management
        .sessionManagement()
        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        .and()

        // Authorize Requests
        .authorizeRequests()
        .antMatchers("/api/auth/**", "/oauth2/**", "/api/stores/all").permitAll() // Normal user can view store but cannot add
        .antMatchers("/api/users/**", "/api/stores/**").hasRole("USER") //only USER has a role that can add and edit store
        .and()

        // Login
        // Disabling http basic & form login to only using token based authentication
        .httpBasic()
        .disable()
        .formLogin()
        .disable()

        .oauth2Login()
        .authorizationEndpoint()
        .baseUri("/oauth2/authorize")
        .authorizationRequestRepository(cookieAuthorizationRequestRepository())
        .and()

        .redirectionEndpoint()
        .baseUri("/oauth2/callback/*")
        .and()

        .userInfoEndpoint()
        .userService(OAuth2UserService)
        .and()

        .successHandler(oAuth2AuthenticationSuccessHandler)
        .failureHandler(oAuth2AuthenticationFailureHandler);

    http.addFilterBefore(jwtAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);
    return http.build();
  }

  @Bean
  public AuthenticationManager authenticationManager(
      AuthenticationConfiguration authenticationConfiguration) throws Exception {
    return authenticationConfiguration.getAuthenticationManager();
  }

  @Bean
  public JWTAuthenticationFilter jwtAuthenticationFilter() {
    return new JWTAuthenticationFilter();
  }

  @Bean
  public HttpCookieOAuth2AuthorizationRequestRepository cookieAuthorizationRequestRepository() {
    return new HttpCookieOAuth2AuthorizationRequestRepository();
  }

//  @Bean
//  public SecurityFilterChain unauthenticatedSecurityFilterChain(HttpSecurity http) throws Exception {
//    http
//        .authorizeRequests(authorizeRequests ->
//            authorizeRequests
//                // Add your unauthenticated endpoints here
//                .antMatchers("/api/stores/all/**").permitAll()
//        )
//        .csrf().disable()
//        .httpBasic().disable()
//        .formLogin().disable()
//        .logout().disable()
//        .sessionManagement(sessionManagement ->
//            sessionManagement
//                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//        );
//
//    return http.build();
//  }
}