package com.wonders.security.repository

import org.springframework.data.jpa.repository.Query

import com.wonders.framework.repository.MyRepository
import com.wonders.security.entity.Authority

interface AuthorityRepository extends MyRepository<Authority, Long> {

	@Query("select distinct(a) from Authority a left join fetch a.children where a.parent.id = ?1")
	List<Authority> findByParentId(parentId)
	
	@Query("from Authority where code = ?1")
	List<Authority> validateAuthorityCode(code)
	
	@Query("from Authority where code = ?1 and id <> ?2")
	List<Authority> validateAuthorityCode(code, id)
}
