package com.franciscocasales.portfolio.model;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class AuditDataDO {

    private Date entryDate;
    private Date updateDate;
    private Date deleteDate;

}
