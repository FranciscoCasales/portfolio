package com.franciscocasales.portfolio.commons.utils;

import com.franciscocasales.portfolio.commons.constants.ApplicationConstants;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

public class DateUtils {

    public static String formatToIsoDate(Date date) {
        TimeZone timeZone = TimeZone.getTimeZone(ApplicationConstants.ISO_TIMEZONE);
        DateFormat dateFormat = new SimpleDateFormat(ApplicationConstants.PATTERN_DDMMYYYY_TIME);
        dateFormat.setTimeZone(timeZone);
        return dateFormat.format(date);
    }

    public static Date getCurrentIsoDate() {
        return getIsoDate(new Date());
    }

    public static Date getIsoDate(Date date) {
        try {
            return new SimpleDateFormat(ApplicationConstants.PATTERN_DDMMYYYY_TIME).parse(formatToIsoDate(date));
        } catch (ParseException e) {
            e.printStackTrace();
            return new Date();
        }
    }

    public static Date getJWTExpirationDate(Long time) {
        long expirationTime = new Date().getTime() + 1000 * 60 * time;
        return getIsoDate(new Date(expirationTime));
    }

}
