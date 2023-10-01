package com.api.kyn.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tb_user", uniqueConstraints = { @UniqueConstraint(columnNames = "email") })
public class UserAccount {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "user_id")
  private int userId;

  @Email
  @Column(nullable = false)
  private String email;

  @JsonIgnore
  private String password;

  @Column(nullable = false)
  private String name;

  @Lob
  @Column(name = "image_url")
  private String imageUrl;

  private String address;

  @Column(name = "phone_number")
  private String phoneNumber;

  @NotNull
  @Enumerated(EnumType.STRING)
  private EAuthProvider provider;

  @JsonIgnore
  private String providerId;

  @ManyToMany(fetch = FetchType.EAGER)
  @JoinTable(name = "tb_user_role", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"), uniqueConstraints = @UniqueConstraint(columnNames = {
      "user_id", "role_id" }))
  @JsonIgnore
  private List<Roles> roles = new ArrayList<>();

  @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "user")
  @JsonIgnore
  private List<Store> stores;

}
