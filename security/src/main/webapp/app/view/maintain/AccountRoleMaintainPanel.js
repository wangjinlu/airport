Ext.define('security.view.maintain.AccountRoleMaintainPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.account-role-maintain',
	requires: [
	    'security.view.account.AccountGrid',
	    'security.view.role.RoleGrid'
	],
	
    title: '维护帐号角色',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    bodyPadding: 1,
    
    initComponent: function(arguments) {
    	
    	var me = this;
    	
    	Ext.applyIf(me, {
    		items: [{
    	        xtype: 'accountgrid',
    	        storeConfig: {
    	            autoLoad: true,
    	            proxy: {
    	                type: 'rest',
    	                url: 'accounts',
    	                extraParams: {'search_group_fetch': ''},
    	                reader: {
    	                    type: 'json',
    	                    root: 'content'
    	                }
    	            }
    	        },
    	        searchable: true,
    	        pagable: true,
    	        flex: 4
    	    },{
    	        xtype: 'splitter',
    	        defaultSplitMin: 100
    	    },{
    	        xtype: 'rolegrid',
                selectable: true,
    	        storeConfig: {
    	            autoLoad: false,
    	            proxy: {
    	                type: 'rest',
    	                url: 'roles/findByAccountId',
    	                reader: {
    	                    type: 'json'
    	                }
    	            }
    	        },
    	        dockedItems: {
    	            xtype: 'toolbar',
    	            items: [{
    	                text: '添加'
    	            }, '-', {
    	                text: '删除'
    	            }]
    	        },
    	        flex: 3
    	    }]
    	});
    	
    	me.callParent(arguments);
    }
    
});
