package com.franciscocasales.portfolio.commons.to;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class InvitationRequestTO extends AuditDataTO {

    private String id;
    private String requestEmail;
    private Boolean accepted;

}
