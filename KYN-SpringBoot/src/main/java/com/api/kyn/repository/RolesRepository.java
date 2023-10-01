package com.api.kyn.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.kyn.entity.ERole;
import com.api.kyn.entity.Roles;

public interface RolesRepository extends JpaRepository<Roles, Long> {

  Roles findByName(ERole roleName);
}
