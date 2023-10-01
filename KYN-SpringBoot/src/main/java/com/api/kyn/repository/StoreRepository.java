package com.api.kyn.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.api.kyn.entity.Store;

public interface StoreRepository extends JpaRepository<Store, Integer> {

  @Query(value = "DELETE FROM tb_store WHERE store_id = :store_id", nativeQuery = true)
  void deleteStore(@Param("store_id") int storeId);

  @Query(value = "SELECT * FROM tb_store WHERE "
      + "store_name LIKE '%' :keyword '%' "
      + "OR country LIKE '%' :keyword '%' "
      + "OR city LIKE '%' :keyword '%' ", nativeQuery = true)
  List<Store> searchStore(@Param("keyword") String keyword);
}
