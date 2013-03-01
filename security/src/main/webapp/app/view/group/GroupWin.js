Ext.define('security.view.group.GroupWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.groupwin',
    
    id: 'groupwin',
    title: '维护组织部门',
    modal: true,
    constrainHeader: true,
    plain: true,
    bodyPadding: 1,
    closeAction: 'hide',
    width: 350,
    layout: 'fit',
    
    initComponent: function(arguments) {
        
        var me = this;
        
        Ext.applyIf(me, {
            items: [{
                xtype: 'form',
                bodyPadding: 5,
                frame: true,
                fieldDefaults: {
                    labelWidth: 100,
                },
                defaults: {
                    xtype: 'textfield',
                    allowBlank: false,
                    anchor: '100%'
                },
                items: [{
                    fieldLabel: '上级部门名称',
                    name: 'parentText',
        			allowBlank: true
                },{
                    fieldLabel: '部门名称',
                    name: 'name'
                },{
                    xtype: 'combobox',
                    fieldLabel: '是否启用',
                    name: 'enabled',
                    queryMode: 'local',
                    forceSelection: true,
                    store: [
                        [true, '是'],
                        [false, '否']
                    ]
                },{
                    xtype: 'textarea',
                    allowBlank: true,
                    fieldLabel: '描述',
                    name: 'description'
                }]
            }],
            buttonAlign: 'center',
            buttons: [{
                text: '保存',
                tooltip: '保存'
            },{
                text: '重置',
                handler: function() {
                    this.up('window').child('form').getForm().reset();
                }
            }]
        });
        
        me.callParent(arguments);
    }
});