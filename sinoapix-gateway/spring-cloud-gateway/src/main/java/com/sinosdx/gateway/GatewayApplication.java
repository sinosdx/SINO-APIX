package com.sinosdx.gateway;

import com.sinosdx.gateway.configuration.ApplicationListenerStarted;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableAsync;

/**
 * @author pengjiahu
 * @date 2020/8/4 15:41
 * @description
 */
@EnableAsync
@SpringBootApplication
@ComponentScan(value = {"com.sinosdx.gateway", "com.sinosdx.common.gateway"})
public class GatewayApplication {

    public static void main(String[] args) {
        SpringApplication springApplication = new SpringApplication(GatewayApplication.class);
        springApplication.addListeners(new ApplicationListenerStarted());
        springApplication.run(args);
    }
}
