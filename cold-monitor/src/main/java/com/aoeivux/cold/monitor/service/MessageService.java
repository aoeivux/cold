package com.aoeivux.cold.monitor.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.IService;
import com.aoeivux.cold.common.netty.entity.MessageEntity;

import java.util.Map;

public interface MessageService extends IService<MessageEntity> {
    IPage queryMessageRealtime(Map<String, Object> parames);
}
