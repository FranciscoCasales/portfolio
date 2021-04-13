package com.franciscocasales.portfolio.services.impl;

import com.franciscocasales.portfolio.commons.constants.ApplicationConstants;
import com.franciscocasales.portfolio.model.EmailTemplateDO;
import com.franciscocasales.portfolio.persistence.repository.EmailTemplateRepository;
import com.franciscocasales.portfolio.services.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.Map;
import java.util.Optional;

@Service
public class EmailServiceImpl implements EmailService {

    @Autowired
    EmailTemplateRepository emailTemplateRepository;

    @Autowired
    JavaMailSender javaMailSender;

    @Override
    public void send(String to, String templateName, Map<String, String> params) throws MessagingException {
        Optional<EmailTemplateDO> emailTemplateOptional = emailTemplateRepository.findByName(templateName);
        if (emailTemplateOptional.isPresent()) {
            EmailTemplateDO emailTemplate = emailTemplateOptional.get();
            String template = fillParams(emailTemplate.getTemplate(), params);
            MimeMessage mimeMessage = javaMailSender.createMimeMessage();
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, Boolean.TRUE);
            mimeMessageHelper.setTo(to);
            mimeMessageHelper.setSubject(emailTemplate.getSubject());
            mimeMessageHelper.setText(template, Boolean.TRUE);
            javaMailSender.send(mimeMessage);
        }
    }

    public void sendCode(String to, String templateName, Map<String, String> params) {

    }

    private String fillParams(String template, Map<String, String> params) {
        if (params != null && params.size() > ApplicationConstants.ZERO) {
            for (String key : params.keySet()) {
                template = template.replace("${" + key + "}", params.get(key));
            }
            return template;
        }
        return template;
    }

}
