package com.wonders.security.repository

import org.springframework.data.jpa.repository.Query
import org.springframework.web.bind.annotation.RequestParam;

import com.wonders.framework.repository.MyRepository
import com.wonders.security.entity.Account

interface AccountRepository extends MyRepository<Account, Long> {

	List<Account> findByUserLoginName(loginName)

	@Query("from Account a join fetch a.group where a.user.id = ?1")
	List<Account> findByUserId(userId)

	@Query("from Account a join fetch a.group where a.group.id = ?1")
	List<Account> findByGroupId(groupId)
	
	@Query("from Account a join fetch a.group where a.user.loginName <> ?1")
	List<Account> findByUserLoginNameNot(loginName)
	
	@Query("from Account a join fetch a.group where a.name = ?1 and a.group.id = ?2 and a.user.id = ?3")
	List<Account> validateAccout(name, groupId, userId)
}
