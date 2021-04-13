package com.franciscocasales.portfolio.model;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Getter
@Setter
@Document(collection = "INVITATION_REQUEST")
public class InvitationRequestDO extends AuditDataDO {

    @Id
    private ObjectId id;
    private String email;
    private Boolean accepted;

    @Builder
    public InvitationRequestDO(String email, Date entryDate) {
        this.email = email;
        this.setEntryDate(entryDate);
    }
}
