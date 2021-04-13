package com.franciscocasales.portfolio.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "ROLES")
public class RoleDO {

    @Id
    private String id;
    private Integer key;
    private String description;

}
