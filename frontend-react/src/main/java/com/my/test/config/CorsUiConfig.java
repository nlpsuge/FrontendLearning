package com.my.test.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.annotation.Resource;

@Slf4j
@Configuration
public class CorsUiConfig implements WebMvcConfigurer {

    static final String KEY_CORS_ENABLED = "cors.enable";

    @Resource
    private Environment env;

    /**
     * cors.enable=true 启用 cors
     */
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        if (!env.getProperty(KEY_CORS_ENABLED, Boolean.class, false)) {
            return;
        }
        // 设置允许跨域的路径
        registry.addMapping("/**")
                // 设置允许跨域请求的域名
                .allowedOrigins("*")
                // 是否允许证书 不再默认开启
                .allowCredentials(true)
                // 设置允许的方法
                .allowedMethods("*")
                // 跨域允许时间
                .maxAge(3600);
    }

}
