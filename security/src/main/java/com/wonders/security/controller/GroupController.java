package com.wonders.security.controller;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.wonders.framework.controller.AbstractCrudController;
import com.wonders.framework.repository.MyRepository;
import com.wonders.security.entity.Group;
import com.wonders.security.repository.GroupRepository;

@Controller
@RequestMapping("groups")
public class GroupController extends AbstractCrudController<Group, Long> {

	@Inject
	private GroupRepository groupRepository;

	@Override
	protected MyRepository<Group, Long> getRepository() {
		return groupRepository;
	}
	
	@RequestMapping(value = "findByParentId/{parentId}", method = RequestMethod.GET)
	protected @ResponseBody
	List<Group> findByParentId(@PathVariable long parentId) {
		return groupRepository.findByParentId(parentId);
	}
	
}
