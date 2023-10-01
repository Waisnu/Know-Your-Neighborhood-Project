package com.api.kyn.controller;

import java.util.List;

import javax.annotation.security.PermitAll;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.api.kyn.entity.Store;
import com.api.kyn.model.StoreDto;
import com.api.kyn.service.StoreService;

@RestController
@RequestMapping("/api/stores")
public class StoreController {

  @Autowired
  private StoreService storeService;

  @GetMapping("")
  public List<Store> listStore() {

    return storeService.listStore();
  }

  @PostMapping("/add")
  public StoreDto addStore(@RequestBody StoreDto storeDto) {

    StoreDto newStore = storeService.addStore(storeDto);

    return newStore;
  }

  @GetMapping("/{storeId}")
  public StoreDto getStoreById(@PathVariable("storeId") int storeId) {
    Store store = storeService.getStoreById(storeId);

    return new StoreDto(store);
  }

  @PutMapping("/edit")
  public StoreDto editStore(@RequestBody StoreDto storeDto) {
    Store store = storeService.editStore(storeDto);

    return new StoreDto(store);
  }

  @GetMapping(value = "", params = "keyword")
  @PermitAll
  public List<Store> searchStore(@RequestParam("keyword") String keyword) {

    return storeService.searchStore(keyword);
  }	
  
  @GetMapping("/all")
  public List<Store> getAllStoresWithoutAuth() {
      List<Store> allStores = storeService.getAllStoresWithoutAuth();
      return allStores;
  }

}
