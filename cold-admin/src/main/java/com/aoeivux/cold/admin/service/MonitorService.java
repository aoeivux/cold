package com.aoeivux.cold.admin.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.aoeivux.cold.common.admin.entity.MonitorEntity;
import com.aoeivux.cold.common.utils.PageUtils;

import java.util.Map;

/**
 * 监控设置
 */
public interface MonitorService extends IService<MonitorEntity> {
    PageUtils queryPage(Map<String, Object> params);
}

