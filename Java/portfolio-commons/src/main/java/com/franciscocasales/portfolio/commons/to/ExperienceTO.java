package com.franciscocasales.portfolio.commons.to;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class ExperienceTO {

    private String id;
    private String jobPosition;
    private String company;
    private Date startDate;
    private Date endDate;
    private String description;
    private String language;

}
