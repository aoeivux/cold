package com.aoeivux.cold.admin.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.aoeivux.cold.common.admin.entity.HostEntity;
import com.aoeivux.cold.common.utils.PageUtils;

import java.util.Map;

/**
 * 主机管理
 */
public interface HostService extends IService<HostEntity> {
    PageUtils queryPage(Map<String, Object> params);
}

