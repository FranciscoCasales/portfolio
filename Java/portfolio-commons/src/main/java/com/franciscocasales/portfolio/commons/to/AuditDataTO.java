package com.franciscocasales.portfolio.commons.to;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class AuditDataTO {

    private Date entryDate;
    private Date updateDate;
    private Date deleteDate;

}
