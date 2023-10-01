package com.api.kyn.service;

import java.util.List;

import com.api.kyn.entity.ERole;
import com.api.kyn.entity.Roles;
import com.api.kyn.entity.UserAccount;
import com.api.kyn.model.EditProfileDto;
import com.api.kyn.model.UserDto;

public interface UserService {

  Roles createRole(ERole roleName);

  UserAccount findByEmail(String email);

  List<UserDto> listUser();

  UserAccount getById(int userId);

  UserAccount editProfile(EditProfileDto editProfileDto);

}
