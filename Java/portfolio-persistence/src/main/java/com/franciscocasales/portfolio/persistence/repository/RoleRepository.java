package com.franciscocasales.portfolio.persistence.repository;

import com.franciscocasales.portfolio.model.RoleDO;

import java.util.List;

public interface RoleRepository {

    List<RoleDO> findRolesByKeys(List<String> keys);

}
