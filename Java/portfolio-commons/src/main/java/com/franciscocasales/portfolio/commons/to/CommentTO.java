package com.franciscocasales.portfolio.commons.to;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CommentTO {

    private String id;
    private String comment;
    private String username;
    private String lastname;
    private String email;
    private Float stars;
    private String image;

}
