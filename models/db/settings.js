/**
 * Created by Silence on 2017/4/11.
 * 创建数据库连接
 * 该模块只会被加载一次
 */

module.exports = {

// debug 为 true 时，用于本地调试
    debug: false,
    imgZip : true, // 上传图片是否压缩(如果为false则本地不需要安装gm)
    session_secret: 'doracms_secret', // 务必修改
    auth_cookie_name: 'doracms',
    encrypt_key : 'dora',
//  数据库配置
    URL: 'mongodb://127.0.0.1:27017/doracms',
    DB: 'doracms',
    HOST: '127.0.0.1',
    PORT: 27017,
    USERNAME: 'doracms',
    PASSWORD: '',


//  站点基础信息配置
    SITETITLE : '文档管理',    // 站点名称
    SITEDOMAIN : '',     // 站点域名
    SITEICP : '',    // 站点备案号
    SITEVERSION : 'v1.1.1',   // 静态资源版本戳
    SYSTEMMAIL : '',  // 管理员个人邮箱
    UPDATEFOLDER : process.cwd()+'/public/upload',   // 默认上传文件夹本地路径
    TEMPSTATICFOLDER : process.cwd()+'/public/themes/',  // 模板静态文件路径
    DATAOPERATION : process.cwd()+'/models/db/bat',    //数据库操作脚本目录
    DATABACKFORDER : 'C:/softbak/mongodbConfig/mongodata/',    // 服务端数据备份目录
    MONGODBEVNPATH : '/usr/local/mongodb/bin',     // LINUXmongodb环境变量(win server下不用管)
    SYSTEMTEMPFORDER : process.cwd()+'/views/web/temp/',    // 系统模板安装目录
    DORACMSAPI : '',     // 系统服务提供商
    CMSDISCRIPTION : '',         //网站描述
    SITEKEYWORDS : '',        //网站关键词
    SITEBASICKEYWORDS : '',      // 基础关键词


    SYSTEMMANAGE : ['sysTemManage','DocManSys后台管理'],  // 后台模块(系统管理)
    adminUsersList : ['sysTemManage_user','系统用户管理'],
    adminGroupList : ['sysTemManage_uGroup','系统用户组管理'],
    adsList : ['sysTemManage_ads','广告管理'],
    filesList : ['sysTemManage_files','文件管理'],
    DATAMANAGE : ['sysTemManage_data','数据管理'], // 数据管理
    backUpData : ['sysTemManage_data_1','数据备份'], // 数据备份
    systemLogs : ['sysTemManage_logs','操作日志'], // 系统操作日志


    CONTENTMANAGE : ['contentManage','内容管理'], // 后台模块(内容管理)
    contentList : ['contentManage_content','文档管理'],
    contentCategorys : ['contentManage_cateGory','文档类别管理'],
    contentTags : ['contentManage_tag','文档标签管理'], //标签管理
    CONTENTTEMPSMANAGE : ['contentManage_temp','文档模板管理'], //模板管理
    contentTemps : ['contentManage_temp_1','模板配置'], //模板管理
    contentTempsEdit : ['contentManage_temp_2','模板编辑'], //模板管理
    CONTENTTEMPITEMS : ['contentManage_tpItem','文档模板单元管理'], //模板单元管理
    messageList : ['contentManage_msg','留言管理'], // 留言管理
    NOTICEMANAGE : ['contentManage_notice','消息管理'], // 消息管理
    systemNotice : ['contentManage_notice_1','公告管理'], // 公告管理
    userNotice : ['contentManage_notice_2','用户消息'], // 用户消息
    sysTemBackStageNotice : ['contentManage_notice_3','系统消息'], // 系统消息


    USERMANAGE : ['userManage','会员管理'], // 后台模块(会员管理)
    regUsersList: ['userManage_user','注册用户管理'],

//  本地缓存设置
    redis_host: '127.0.0.1',
    redis_port: 6379,
    redis_psd : '',
    redis_db: 0,

//  邮件相关设置
    site_email : 'xx@163.com',
    site_email_psd : 'xxx',
    email_findPsd : 'findPsd',
    email_reg_active : 'reg_active',
    email_notice_contentMsg : 'notice_contentMsg',
    email_notice_contentBug : 'notice_contentBug',
    email_notice_user_contentMsg : 'notice_user_contentMsg',
    email_notice_user_reg : 'notice_user_reg',


//  信息提示相关
    system_illegal_param : '非法参数',
    system_noPower : '对不起，您无权执行该操作！',
    system_atLeast_one : '请选择至少一项后再执行删除操作！',
    system_batch_delete_not_allowed : '对不起，该模块不允许批量删除！'
};



