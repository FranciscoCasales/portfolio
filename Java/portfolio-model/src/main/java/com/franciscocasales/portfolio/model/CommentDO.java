package com.franciscocasales.portfolio.model;

import lombok.Getter;
import lombok.Setter;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "COMMENTS")
public class CommentDO {

    @Id
    private ObjectId id;
    private String comment;
    private String username;
    private String lastname;
    private String email;
    private Float stars;
    private String image;
    
}
