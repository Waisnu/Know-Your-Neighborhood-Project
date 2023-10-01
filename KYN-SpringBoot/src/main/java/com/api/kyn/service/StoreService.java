package com.api.kyn.service;

import java.util.List;

import com.api.kyn.entity.Store;
import com.api.kyn.model.StoreDto;

public interface StoreService {

  List<Store> listStore();

  Store getStoreById(int storeId);

  StoreDto addStore(StoreDto storeDto);

  Store editStore(StoreDto storeDto);

  List<Store> searchStore(String keyword);
  
  List<Store> getAllStoresWithoutAuth();
}
