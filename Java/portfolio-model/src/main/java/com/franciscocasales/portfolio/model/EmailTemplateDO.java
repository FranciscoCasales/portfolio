package com.franciscocasales.portfolio.model;

import lombok.Getter;
import lombok.Setter;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "EMAIL_TEMPLATE")
public class EmailTemplateDO {

    @Id
    private ObjectId id;
    private String name;
    private String template;
    private String subject;

}
