package com.api.kyn.model;

import com.api.kyn.entity.Store;

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
public class StoreDto {

  private int storeId;

  private String storeName;

  private String country;

  private String city;

  private String storeEmail;

  private String phoneNumber;

  private String imageUrl;

  private String description;

  private UserDto user;

  public StoreDto(Store store) {
    this.storeId = store.getStoreId();
    this.storeName = store.getStoreName();
    this.country = store.getCountry();
    this.city = store.getCity();
    this.storeEmail = store.getStoreEmail();
    this.phoneNumber = store.getPhoneNumber();
    this.imageUrl = store.getImageUrl();
    this.description = store.getDescription();
    this.user = new UserDto(store.getUser());
  }

}
