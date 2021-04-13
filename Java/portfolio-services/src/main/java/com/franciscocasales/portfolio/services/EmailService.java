package com.franciscocasales.portfolio.services;

import javax.mail.MessagingException;
import java.util.Map;

public interface EmailService {

    void send(String to, String templateName, Map<String, String> params) throws MessagingException;

}
