package com.my.test.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.my.test.models.ReqDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping(value = "/api/test/react", produces = MediaType.APPLICATION_JSON_VALUE)
public class MyController {

    @RequestMapping(value="/test-hello-word", method={RequestMethod.POST, RequestMethod.GET})
    public Object testHelloWord(HttpServletRequest request,
                                HttpServletResponse response,
                                @RequestParam(value = "para1", required = false) String para1,
                                // 可以不加 @RequestParam 注解
                                String para2)
            throws IOException
    {
        log.error("testing in the controller: para1: {}: para2: {}", para1, para2);
        Map<Object, Object> map = new HashMap<>();
        map.put("para1", para1);
        map.put("para2", para2);
        map.put("r1", "hello world!");
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(map);
    }

    @RequestMapping(value="/test-hello-word-2", method={RequestMethod.POST, RequestMethod.GET})
    public Object testHelloWord2(HttpServletRequest request,
                                 HttpServletResponse response,
                                 @Valid ReqDTO reqDTO)
            throws IOException
    {
        log.error("testing in the controller: para: {}", reqDTO);
        Map<Object, Object> map = new HashMap<>();
        map.put("para1", reqDTO);
        map.put("r1", "hello world!");
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(map);
    }

    @RequestMapping(value="/test-PathVariable/{aJpgKey}", method={RequestMethod.POST, RequestMethod.GET})
    public Object testPathVariable(@PathVariable(value = "aJpgKey") String aJpgKey)
            throws IOException
    {
        log.error("testing in the controller: aJpgKey: {}", aJpgKey);
        Map<Object, Object> map = new HashMap<>();
        map.put("aJpgKey", aJpgKey);
        map.put("r1", "hello world!");
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(map);
    }


}
