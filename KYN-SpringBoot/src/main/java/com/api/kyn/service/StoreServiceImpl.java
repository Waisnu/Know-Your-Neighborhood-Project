package com.api.kyn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.kyn.entity.Store;
import com.api.kyn.entity.UserAccount;
import com.api.kyn.model.StoreDto;
import com.api.kyn.repository.StoreRepository;
import com.api.kyn.repository.UserAccountRepository;

@Service
public class StoreServiceImpl implements StoreService {

  @Autowired
  private StoreRepository storeRepo;

  @Autowired
  private UserAccountRepository userRepo;

  @Override
  public List<Store> listStore() {

    List<Store> listStore = storeRepo.findAll();

    return listStore;
  }
  
  @Override
  public List<Store> getAllStoresWithoutAuth() {
      return storeRepo.findAll(); // Assuming that findAll() method in storeRepo retrieves all stores
  }

  @Override
  public Store getStoreById(int storeId) {

    return storeRepo.findById(storeId).get();
  }

  @Override
  public StoreDto addStore(StoreDto storeDto) {
    UserAccount user = userRepo.findById(storeDto.getUser().getUserId()).get();

    Store store = new Store(storeDto, user);

    storeRepo.save(store);

    StoreDto DTO = new StoreDto(store);

    return DTO;

  }

  @Override
  public Store editStore(StoreDto storeDto) {
    Store store = storeRepo.findById(storeDto.getStoreId()).get();

    store.setStoreName(storeDto.getStoreName());
    store.setCountry(storeDto.getCountry());
    store.setCity(storeDto.getCity());
    store.setStoreEmail(storeDto.getStoreEmail());
    store.setPhoneNumber(storeDto.getPhoneNumber());
    store.setImageUrl(storeDto.getImageUrl());
    store.setDescription(storeDto.getDescription());

    return storeRepo.save(store);
  }

  @Override
  public List<Store> searchStore(String keyword) {

    List<Store> listStore = storeRepo.searchStore(keyword);

    return listStore;
  }

}
