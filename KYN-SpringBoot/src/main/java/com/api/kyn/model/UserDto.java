package com.api.kyn.model;

import com.api.kyn.entity.UserAccount;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
  private int userId;

  private String name;

  private String email;

  private String imageUrl;

  private String address;

  private String phoneNumber;

  private String provider;

  public UserDto(UserAccount user) {
    this.userId = user.getUserId();
    this.name = user.getName();
    this.email = user.getEmail();
    this.imageUrl = user.getImageUrl();
    this.address = user.getAddress();
    this.phoneNumber = user.getPhoneNumber();
    this.provider = user.getProvider().toString();
  }

}
