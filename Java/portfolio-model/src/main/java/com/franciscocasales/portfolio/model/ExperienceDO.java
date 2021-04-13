package com.franciscocasales.portfolio.model;

import lombok.Getter;
import lombok.Setter;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Getter
@Setter
@Document(collection = "EXPERIENCE")
public class ExperienceDO {

    @Id
    private ObjectId id;
    private String jobPosition;
    private String company;
    private Date startDate;
    private Date endDate;
    private String description;
    private Short language;

}
