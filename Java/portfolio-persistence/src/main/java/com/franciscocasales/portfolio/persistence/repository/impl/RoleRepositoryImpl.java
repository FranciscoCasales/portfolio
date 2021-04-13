package com.franciscocasales.portfolio.persistence.repository.impl;

import com.franciscocasales.portfolio.model.RoleDO;
import com.franciscocasales.portfolio.persistence.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class RoleRepositoryImpl implements RoleRepository {

    @Autowired
    private MongoOperations mongoOperations;

    @Override
    public List<RoleDO> findRolesByKeys(List<String> keys) {
        Query query = new Query(Criteria.where("key").in(keys));
        return mongoOperations.find(query, RoleDO.class);
    }

}
