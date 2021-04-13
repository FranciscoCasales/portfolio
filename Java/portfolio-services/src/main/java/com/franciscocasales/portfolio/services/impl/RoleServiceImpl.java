package com.franciscocasales.portfolio.services.impl;

import com.franciscocasales.portfolio.commons.to.RoleTO;
import com.franciscocasales.portfolio.model.RoleDO;
import com.franciscocasales.portfolio.persistence.repository.RoleRepository;
import com.franciscocasales.portfolio.services.RoleService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Type;
import java.util.List;

@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public List<RoleTO> findRolesByKeys(List<String> keys) {
        List<RoleDO> roleList = roleRepository.findRolesByKeys(keys);
        Type roleTOListType = new TypeToken<List<RoleTO>>() {}.getType();
        return modelMapper.map(roleList, roleTOListType);
    }

}
