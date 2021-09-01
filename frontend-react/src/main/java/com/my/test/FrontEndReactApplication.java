package com.my.test;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackages = {"com.my.test.*"})
@SpringBootApplication
public class FrontEndReactApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(FrontEndReactApplication.class, args);
    }

}
