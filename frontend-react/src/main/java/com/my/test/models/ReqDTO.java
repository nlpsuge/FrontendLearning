package com.my.test.models;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.validator.constraints.NotEmpty;

import javax.validation.constraints.NotNull;

@Getter
@Setter
@ToString
public class ReqDTO {

    @NotEmpty
    @NotNull
    private String name;

    @NotNull
    private Integer type;



}
