package com.sinosdx.service.management.controller;

import com.sinosdx.service.management.result.R;
import com.sinosdx.service.management.sentinel.SentinelProvider;
import com.sinosdx.service.management.sentinel.entity.LimitInfo;
import com.sun.media.jfxmedia.logging.Logger;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author shenjian
 * @create 2022-01-05 12:02
 * @Description
 */
@RestController
@RequestMapping("/app/rateLimit")
@Slf4j
public class SentinelController {

    @Autowired
    private SentinelProvider service;

    /**
     * 保存限流规则
     * @param list
     * @return
     */
    @PostMapping("/save")
    public R save(@RequestBody List<LimitInfo> list){
        log.info("保存限流规则规则:{}",list);
        String save = service.save(list);
        if(save.endsWith("ok")){
            return R.success();
        }
        return R.fail(save);
    }

    /**
     * 查询所有的限流规则
     * @return
     */
    @GetMapping("/listRule")
    public R getRules(){
        return R.success(service.getRules());
    }

    /**
     * 根据appId 查询限流规则
     * @param appId
     * @return
     */
    @GetMapping("/appRule")
    public R getAppRules(@RequestParam("appId") String appId){
        return R.success(service.getAppRules(appId));
    }

    @PostMapping("/open")
    public R open(@RequestParam("appId") String appId){
        service.open(appId);
        return R.success();
    }

    @PostMapping("/close")
    public R close(@RequestParam("appId") String appId){
        service.close(appId);
        return R.success();
    }
}
