package com.api.kyn.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.api.kyn.entity.ERole;
import com.api.kyn.entity.Roles;
import com.api.kyn.repository.RolesRepository;

@Component
public class DataLoader implements ApplicationRunner {

  @Autowired
  private RolesRepository rolesRepo;

  @Override
  public void run(ApplicationArguments args) throws Exception {
    if (rolesRepo.findByName(ERole.ROLE_USER) == null) {
      rolesRepo.save(new Roles(ERole.ROLE_USER));
    }

    if (rolesRepo.findByName(ERole.ROLE_ADMIN) == null) {
      rolesRepo.save(new Roles(ERole.ROLE_ADMIN));
    }
  }
}
