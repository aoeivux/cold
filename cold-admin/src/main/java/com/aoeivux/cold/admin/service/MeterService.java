package com.aoeivux.cold.admin.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.aoeivux.cold.common.admin.entity.MeterEntity;
import com.aoeivux.cold.common.utils.PageUtils;

import java.util.Map;

/**
 * 仪表管理
 */
public interface MeterService extends IService<MeterEntity> {
    PageUtils queryPage(Map<String, Object> params);
}

