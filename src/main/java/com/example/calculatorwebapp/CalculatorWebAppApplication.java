package com.example.calculatorwebapp;



import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@SpringBootApplication
@RestController
public class CalculatorWebAppApplication {

    @GetMapping()
    public String Title(){
        return "Calculator Web Application";
    }

    public static void main(String[] args) {
        SpringApplication.run(CalculatorWebAppApplication.class, args);
    }

}

