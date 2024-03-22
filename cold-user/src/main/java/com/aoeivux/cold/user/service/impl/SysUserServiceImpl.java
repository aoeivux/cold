package com.aoeivux.cold.user.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.aoeivux.cold.common.user.dao.SysUserDao;
import com.aoeivux.cold.common.user.entity.SysUserEntity;
import com.aoeivux.cold.user.service.SysUserService;
import org.springframework.stereotype.Service;


/**
 * 系统用户
 *
 *
 */
@Service("sysUserService")
public class SysUserServiceImpl extends ServiceImpl<SysUserDao, SysUserEntity> implements SysUserService {

	@Override
	public SysUserEntity queryByUserName(String username) {
		return baseMapper.queryByUserName(username);
	}

}