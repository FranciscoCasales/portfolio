package com.franciscocasales.portfolio.services;

import com.franciscocasales.portfolio.commons.to.RoleTO;

import java.util.List;

public interface RoleService {

    List<RoleTO> findRolesByKeys(List<String> keys);

}
