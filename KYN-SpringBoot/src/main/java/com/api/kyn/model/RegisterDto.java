package com.api.kyn.model;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@NoArgsConstructor
public class RegisterDto {

  @NotBlank(message = "Name is required")
  private String name;

  @Email
  @NotBlank
  private String email;

  @Size(min = 6, message = "Password must be at least 6 characters long")
  private String password;

  private String address;

  private String phoneNumber;
}