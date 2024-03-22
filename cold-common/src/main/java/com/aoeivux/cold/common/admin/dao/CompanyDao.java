package com.aoeivux.cold.common.admin.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.aoeivux.cold.common.admin.entity.CompanyEntity;
import org.apache.ibatis.annotations.Mapper;

/**
 * 企业信息表
 *
 */
@Mapper
public interface CompanyDao extends BaseMapper<CompanyEntity> {
	
}
