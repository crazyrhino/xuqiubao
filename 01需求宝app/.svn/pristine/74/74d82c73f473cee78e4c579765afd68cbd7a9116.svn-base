/**
 * @author JY
 * @version 1.0
 * @dates 2018-07-03
 * @desc APP开发框架
 * @email jingyan.wang@apicloud.com
 */

var HOST_URLS = ['http://api.dev.com', 'http://mobiletest.ehaier.com:38080', 'https://m.ehaier.com'];
var SHARE_HOST_URLS = ['http://api.dev.com', 'http://mobiletest.ehaier.com:38080/share', 'https://m.ehaier.com/community'];
var HOST_PRODUCT_URLS = ['http://api.dev.com', 'http://detailtest.ehaier.com:38080', 'https://detail.ehaier.com'];
var SERVER_ENO = 1; // 0: 开发环境  1: 测试环境  2: 生产环境
var HOST = HOST_URLS[SERVER_ENO];
var SHARE_HOST = SHARE_HOST_URLS[SERVER_ENO];
var HOST_PRODUCT = HOST_PRODUCT_URLS[SERVER_ENO];

var UrlRouter = {
    login: '/login/thirdLogin',
    getMessageCount: '/v3/platform/web/member/unread_message.json',
    getUserInfo: '/v5/sgcommunity/user/getUserInfo.ajax',
    getUserType: '/v5/sgcommunity/user/getShopkeepersInfo.ajax',
    getUserCollectionTags: '/v5/sgcommunity/user/getUserCollectionTags.ajax',
    getFirstSignAdd: '/v5/sgcommunity/user/firstSignAdd.ajax',
    getUserIsBlackAncFocus: '/v5/sgcommunity/user/isBlackAndFocus.ajax',
    getRecommendedTopicsByUserCode: '/v5/es/sgcommunity/story/getRecommendedTopicsByUserCode.ajax',
    getVideoList: '/v5/es/sgcommunity/story/getStoryIndexByCondition.ajax',//视频话题页获取视频列表
    getPraiseStory: '/v5/sgcommunity/story/praiseStory.ajax',
    getBannerList: '/v5/sgcommunity/topic/getBannerList.ajax',
    getStoryIndexByCondition: '/v5/es/sgcommunity/story/getStoryIndexByCondition.ajax',
    getRecommend: "/v5/sgcommunity/topic/recommend.ajax",
    getTopicAttentionStoryIndex: '/v5/es/sgcommunity/story/getTopicAttentionStoryIndex.ajax',

    /*需求宝*/
    getAround: "/v5/sgcommunity/feed/around.ajax",  //附近地理位置
    publishStory: '/v5/sgcommunity/story/insertStory.ajax',//发布话题
    joinInTopic: '/v5/sgcommunity/topic/joinInTopic.ajax',//加入圈子
    getWhoSee: "/v5/sgcommunity/user/getMyfollows.ajax", //我的关注和'@谁看'接口
    getProvinc: "/v5/sgcommunity/issue/getProvince.ajax", //省份获取
    getCity: "/v5/sgcommunity/issue/getCity.ajax", //地区和县获取
    getHotTag:"/v5/sgcommunity/tag/hot.ajax", //推荐标签
    getQuery:'/v5/sgcommunity/tag/query.ajax',//搜索标签
    addNewTag:'/v5/sgcommunity/user/addNewTag.ajax',//生成新标签
    getTopicTagsByTopicId:'/v5/sgcommunity/topic/getTopicTagsByTopicId.ajax',//获取标签
    updateStoryNew:'/v5/sgcommunity/story/updateStoryNew.ajax',//编辑话题
    addDecorationtrade: '/v5/sgcommunity/decorationtrade/addDecorationtrade.ajax',//家装预约提交
    addCustomization: '/v5/sgcommunity/customization/addCustomization.ajax',//西装定制
    qxAnswer:'/v5/sgcommunity/issueAnswers/addIssueAnswers.ajax',//回答提交
    qxIndex:'/v5/es/sgcommunity/story/getIssueIndexByKeyWord.ajax',//模糊搜索
    // qxIndex:'/v5/sgcommunity/issue/getTitleKeyWord.ajax',//模糊搜索
    qxSupplement:'/v5/sgcommunity/issue/addIssue.ajax',//补充提交
    qxDetailsTop:'/v5/sgcommunity/issue/getIssueDetails.ajax',//需求详情
    qxDetailsList:'/v5/sgcommunity/issueAnswers/getIssueAnswersListByIssueId.ajax',//需求列表
    qxXuZan:'/v5/sgcommunity/issue/praiseIssue.ajax',//需求点赞
    qxXuXiangZan:'/v5/sgcommunity/issueAnswers/praiseIssueAnswers.ajax',//需求详情点赞
    syTuijian:'/v5/sgcommunity/issue/getIssueListTops.ajax',//首页推荐
    syTopthree:'/v5/sgcommunity/issue/getIssueListTopThree.ajax',//首页top3
    myList:'/v5/sgcommunity/issue/getIssueList.ajax',//我的需求列表
    myAnswer:'/v5/sgcommunity/issueAnswers/getIssueAnswersList.ajax',//我的回答列表
    create:'/v5/sgcommunity/issue/getIssueListCreateDate.ajax',//解决需求页面
    hdVal:'/v5/sgcommunity/issueAnswers/getQueryIssueAnswers.ajax',//回答详情页面
    hdZan:'/v5/sgcommunity/issueAnswers/praiseIssueAnswers.ajax',//回答详情点赞
    hdNotice:'/v5/sgcommunity/user/follow.ajax',//回答关注
    plTwo:'/v5/sgcommunity/issueAnswers/addIssueAnswers.ajax',//二级评论
    addIdea:'/v5/sgcommunity/tUcIdea/addIdea.ajax'//提创意

};
/**
 * 增加支持ES5的对象合并
 */
if (typeof Object.assign !== 'function') {
    (function () {
        Object.assign = function (target) {
            'use strict';
            if (target === undefined || target === null) {
                throw new TypeError('Cannot convert undefined or null to object');
            }
            var output = Object(target);
            for (var index = 1; index < arguments.length; index++) {
                var source = arguments[index];
                if (source !== undefined && source !== null) {
                    for (var nextKey in source) {
                        if (source.hasOwnProperty(nextKey)) {
                            output[nextKey] = source[nextKey];
                        }
                    }
                }
            }
            return output;
        };
    })();
}
/**
 * vue配合fastclick消除点击延迟
 */
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}

/**
 * 工具类
 */
(function (window) {
    var o = {};
    o.UIActionSelector = null;

    //系统类型 ios  android  win  wp
    o.SYSTEM_TYPE = function () {
        return api.systemType;
    };
    //config.xml debug的值
    o.DEBUG = function () {
        return api.debug;
    };
    //应用版本号 打包时的app版本号
    o.APP_VERSION = function () {
        return api.appVersion;
    };
    //设备唯一标识    FC408F8B-9598-48B6-A740-B9037ADCXXXE
    o.DEVICE_ID = function () {
        return api.deviceId;
    };
    //设备类型 pad  phone  tv  car  desk  watch
    o.UI_MODE = function () {
        return api.uiMode;
    };
    //当前网络连接类型  unknown未知  ethernet以太网  wifi  2g  3g  4g  none无网络
    o.NET_TYPE = function () {
        return api.connectionType;
    };
    /**
     * 缓存路径
     * @return {string}
     */
    o.CACHE_DIR = function () {
        return api.cacheDir + '/';
    };
    /**
     * box路径
     * @return {string}
     */
    o.BOX_DIR = function () {
        return api.boxDir + '/';
    };

    /**
     * 状态栏沉浸
     * @param selector
     * @example $app.fixStatusBar('#header')
     */
    o.fixStatusBar = function (selector) {
        if ($app.SYSTEM_TYPE() === 'ios') {
            $api.fixStatusBar($api.dom(selector || 'header'));
        }
    };

    /**
     * 二次封装openWin
     * @param winName
     * @param pageParam     页面跳转的pageParam
     * @param otherParam    api.openWin的其他参数，可覆盖默认参数
     * @example $app.openWin('main',{userId:'jingyan.wang@apicloud.com'},{url:'html/main.html'})
     */
    o.openWin = function (winName, pageParam, otherParam) {
        var param = {
            name: winName,
            url: winName + '.html',
            hScrollBarEnabled: false,
            slidBackEnabled: false,
            allowEdit: true,
            softInputDismissMode:['tap','drag'],
            slidBackType: 'edge',
            overScrollMode: 'scrolls',
            softInputMode: 'resize',
            pageParam: pageParam
        };
        Object.assign(param, otherParam || {});
        api.openWin(param);
    };

    /**
     * 二次封装openFrame
     * @param name
     * @param header      如果win里有header则传入，为了确定frame打开位置
     * @param footer      如果win里有footer则传入，为了确定frame打开位置
     * @param pageParam   传递的pageParam，只需要加上win里传入的参数即可，默认带有上一个页面传入的参数
     * @param otherParam  api.openFrame的其他参数，可覆盖默认参数
     * @example $app.openFrame('home-testwin-frame','#header','#footer',{name:'conan',work:'IT'},{bounces:false});
     */
    o.openFrame = function (name, header, footer, pageParam, otherParam) {
        var headerH = header ? $api.dom(header).offsetHeight : 0;
        var footerH = footer ? $api.dom(footer).offsetHeight : 0;
        var param = {
            name: name,
            url: name + '.html',
            rect: {
                marginLeft: 0,
                marginTop: headerH,
                marginBottom: footerH,
                marginRight: 0
            },
            overScrollMode: 'scrolls',
            pageParam: api.pageParam || {},
            bounces: true,
            softInputDismissMode:['tap','drag']
        };
        Object.assign(param, otherParam || {});
        Object.assign(param.pageParam, pageParam || {});
        api.openFrame(param);
    };

    /**
     * 显示toast提示
     * @param msg       提示信息
     * @param location  显示的位置，默认 bottom
     * @param during    显示时长，默认 2秒
     */
    o.toast = function (msg, location, during) {
        location = location ? location : 'middle';
        during = during ? during : 2000;
        api.toast({
            msg: msg,
            duration: during,
            location: location
        });
    };

    /**
     * 带一个按钮的弹框
     * @param title      弹框标题
     * @param msg        提示内容
     * @param callback   回调方法    buttonIndex:1   从1开始
     * @param buttons    自定义按钮
     */
    o.alert = function (title, msg, callback, buttons) {
        buttons = buttons ? buttons : ['确定'];
        api.alert({
            title: title,
            msg: msg,
            buttons: buttons
        }, function (ret, err) {
            if (typeof callback !== 'undefined') {
                callback(ret)
            }
        });
    };

    /**
     * 带两个按钮的弹框
     * @param title     弹框标题
     * @param msg       提示内容
     * @param callback  回调方法    buttonIndex:1   从1开始
     * @param buttons   自定义按钮
     */
    o.confirm = function (title, msg, callback, buttons) {
        buttons = buttons ? buttons : ['取消', '确定'];
        api.confirm({
            title: title,
            msg: msg,
            buttons: buttons
        }, function (ret) {
            if (typeof callback !== 'undefined') {
                callback(ret)
            }
        });
    };

    /**
     * 显示进度提示框
     * @param title
     * @param text
     */
    o.showProgress = function (title, text) {
        api.showProgress({
            style: 'default',
            animationType: 'fade',   //fade:渐隐渐现 zoom:缩放
            title: title ? title : '努力加载中...',
            text: text ? text : '先喝杯茶...',
            modal: true
        })
    };

    /**
     * 隐藏进度提示框
     */
    o.hideProgress = function () {
        api.hideProgress();
    };

    /**
     * 需要展示的frameGroup名称
     * @param name
     */
    o.showFrameGroup = function (name) {
        api.setFrameGroupAttr({
            name: name,
            hidden: false
        });
    };

    /**
     * 需要隐藏的frameGroup名称
     * @param data  数组或字符串
     */
    o.hideFrameGroup = function (data) {
        if (typeof data === 'object') {
            for (var i = 0; i < data.length; i++) {
                api.setFrameGroupAttr({
                    name: data[i],
                    hidden: true
                });
            }
        } else {
            api.setFrameGroupAttr({
                name: data,
                hidden: true
            });
        }
    };

    /**
     * 图片缓存
     * @param remoteEles    img或background图片的ele组 domAll
     * @param thumbnail     是否使用缩略图，不传默认false
     */
    o.imageCache = function (remoteEles, thumbnail) {
        for (var i = 0; i < remoteEles.length; i++) {
            var ele = remoteEles[i];
            var remoteUrl = ele.getAttribute('data-remote') || "";
            (function (ele) {
                api.imageCache({
                    url: remoteUrl,
                    policy: "cache_else_network",
                    thumbnail: thumbnail || false
                }, function (ret, err) {
                    if (ret && ret.status) {
                        var url = ret.url;
                        ele.setAttribute('src', url);
                    } else {
                        console.log($api.jsonToStr(err));
                    }
                });
            }(ele))
        }
    };

    /**
     * 判断是否为空，支持字符串、对象等
     * @param value
     * @return {boolean}
     */
    o.isEmpty = function (value) {
        return value === null || value === undefined || $api.trimAll(value + "") === '';
    };

    o.guid = function () {
        //生成随机数
        function S4() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }

        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    };

    /**
     * 显示选择项
     * @param col       列数  不能超过3列
     * @param title     选择器的标题
     * @param data      选择器数据源
     * @param callback  回调方法
     * @param actives   默认展示项 不传为[0,0,0]
     */
    o.showSelector = function (col, title, data, callback, actives) {
        actives = actives || [0, 0, 0];
        if (this.UIActionSelector === null) {
            this.UIActionSelector = api.require('UIActionSelector');
        }
        this.UIActionSelector.open({
            datas: data,
            layout: {
                row: 5,
                col: col,
                height: 35,
                size: 14,
                sizeActive: 16,
                rowSpacing: 0,
                colSpacing: 0,
                maskBg: 'rgba(0,0,0,0.2)',
                bg: '#fff',
                color: '#989898',
                colorActive: '#fff',
                colorSelected: '#151515'
            },
            animation: true,
            actives: actives,
            cancel: {
                text: '取消',
                size: 14,
                w: 80,
                h: 35,
                color: '#c33f3f',
                bg: 'rgba(0,0,0,0)',
                bgActive: 'rgba(0,0,0,0)',
                colorActive: '#c33f3f'
            },
            ok: {
                text: '确定',
                size: 14,
                w: 80,
                h: 35,
                color: '#c33f3f',
                bg: 'rgba(0,0,0,0)',
                bgActive: 'rgba(0,0,0,0)',
                colorActive: '#c33f3f'
            },
            title: {
                text: title,
                size: 14,
                h: 44,
                bg: '#fff',
                color: '#c33f3f'
            },
            fixedOn: api.frameName
        }, function (ret, err) {
            if (typeof callback !== 'undefined') {
                callback(ret, err);
            }
        });
    };
    /**
     * 下拉刷新
     * @param callback
     */
    o.fnSetRefresh = function (callback) {
        api.setRefreshHeaderInfo({
            loadingImg: 'widget://image/refresh.png',
            bgColor: 'rgb(242,242,242)',
            textColor: '#CCC',
            textLoading: '小顺忙碌更新中...',
            textDown: '下拉刷新...',
            textUp: '松开刷新...',
            showTime: false
        }, function (ret, err) {
            callback();
        });
    };
    /**
     * 封装vue
     * @param param
     * @return {*}
     * @constructor
     */
    o.MyVue = function (param) {
        var tempVue = Vue.extend({
            data: function () {
                return {}
            },
            methods: {},
            updated: function () {

            }
        });
        return new tempVue(param);
    };
    window.$app = o;
}(window));

(function (window) {
    var e = {};

    /**
     * 封装发送事件
     * @param name
     * @param extra
     */
    e.sendEvent = function (name, extra) {
        api.sendEvent({
            name: name,
            extra: extra
        })
    };

    /**
     * 封装监听事件
     * @param name
     * @param callback
     */
    e.addEventListener = function (name, callback) {
        api.addEventListener({
            name: name
        }, function (ret, err) {
            callback(ret);
        });
    };

    /**
     * 滑动到底部监听事件
     * @param callback
     * @param threshold
     */
    e.scrollBottomListener = function (callback, threshold) {
        api.addEventListener({
            name: 'scrolltobottom',
            extra: {
                threshold: threshold || 0
            }
        }, function (ret, err) {
            callback();
        });
    };

    /**
     * 给RN发送事件
     * @param type
     * @param canCallback   是否需要回调
     * @param extra         额外参数
     */
    e.callRNEvent = function (type, canCallback, extra) {
        var extras = {
            type: type,
            tag: api.frameName || api.winName,
            canCallBack: canCallback
        };
        Object.assign(extras, extra);
        this.sendEvent('APICloudCallNaviteMethod', extras);
    };

    /**
     * 接收RN返回事件
     * @param callback
     */
    e.getRNCallback = function (callback) {
        this.addEventListener('NaviteCallAPICloudMethod', function (ret) {
            ret = ret.value;
            // type 1是登录成功的回调，2是刷新token的回调
            // 这两个所有监听的页面都需要刷新，并不是只在当前页面回调
            // 其他事件都只在当前页面进行回调处理
            if (ret.type === 1 || ret.type === 2 || ret.type === 10 || ret.type === 13
                || ret.tag === api.frameName || ret.tag === api.winName) {
                callback(ret);
            }
        });
    };

    /**
     * 是否显示RN的tab栏
     * @param isShow
     */
    e.isShowHomeTab = function (isShow) {
        this.callRNEvent(5, 0, {
            isShowTabBar: isShow ? 1 : 0
        });
    };

    window.$event = e;
}(window));

/**
 * DOT.js   封装方法
 */
(function (window) {
    var d = {};
    /**
     * append
     * @param root      根元素 例："#root"、".root" 或 element
     * @param template  模板
     * @param data      数据源
     * @example         dot.html('#root','#root-tmpl',data);
     */
    d.append = function (root, template, data) {
        var evalText = doT.compile($api.html($api.dom(template)));
        if (typeof root === 'string') {
            $api.append($api.dom(root), evalText(data));
        } else {
            $api.append(root, evalText(data));
        }
    };

    /**
     * html
     * @param root      根元素 例："#root"、".root" 或 element
     * @param template  模板
     * @param data      数据源
     * @example         dot.html('#root','#root-tmpl',data);
     */
    d.html = function (root, template, data) {
        var evalText = doT.compile($api.html($api.dom(template)));
        if (typeof root === 'string') {
            $api.html($api.dom(root), evalText(data));
        } else {
            $api.html(root, evalText(data));
        }
    };

    /**
     * after
     * @param root      根元素 例："#root"、".root" 或 element
     * @param template  模板
     * @param data      数据源
     * @example         dot.after('#root','#root-tmpl',data);
     */
    d.after = function (root, template, data) {
        var evalText = doT.compile($api.html($api.dom(template)));
        if (typeof root === 'string') {
            $api.after($api.dom(root), evalText(data));
        } else {
            $api.after(root, evalText(data));
        }
    };

    /**
     * 清除元素内所有内容
     * @param root      要清除的元素selector 或 element
     * @example         dot.clearDom('.root');
     */
    d.clearDom = function (root) {
        if (typeof root === 'string') {
            $api.html($api.dom(root), "");
        } else {
            $api.html(root, "");
        }
    };
    window.$dot = d;
}(window));

/**
 * log打印工具类
 * @example
 * logger.print('Hello APICloud!');
 * logger.print(10086);
 * logger.print({name: 'JY', age: '18', sex: 'boy', data: [{subject: '数学', score: '150'}]});
 */
(function (window) {
    var l = {};
    l.DEBUG = $app.DEBUG || true;
    l.TOP_LEFT_CORNER = '╔';
    l.BOTTOM_LEFT_CORNER = '╚';
    l.MIDDLE_CORNER = '╟';
    l.HORIZONTAL_DOUBLE_LINE = '║ ';
    l.DOUBLE_DIVIDER = "════════════════════════════════════════════";
    l.SINGLE_DIVIDER = "────────────────────────────────────────────";
    l.TOP_BORDER = l.TOP_LEFT_CORNER + l.DOUBLE_DIVIDER + l.DOUBLE_DIVIDER;
    l.BOTTOM_BORDER = l.BOTTOM_LEFT_CORNER + l.DOUBLE_DIVIDER + l.DOUBLE_DIVIDER;
    l.MIDDLE_BORDER = l.MIDDLE_CORNER + l.SINGLE_DIVIDER + l.SINGLE_DIVIDER;

    /**
     * 输出日志
     * @param data 打印内容
     */
    l.print = function (data) {
        if (!this.DEBUG) {
            return;
        }
        if (typeof data === 'undefined') {
            data = 'undefined';
        } else if (typeof data === 'object') {
            data = this.formatJson(data);
            data = data.replace(/\r\n/g, '\r\n' + this.HORIZONTAL_DOUBLE_LINE)
        }
        if (typeof api === 'undefined') {
            console.log(data);
        } else {
            var builder = "\r\n" + this.TOP_BORDER + "\r\n"
                // 添加当前Win和Frame名字
                + this.HORIZONTAL_DOUBLE_LINE + "Win: " + api.winName + " / Frame: " + api.frameName + "\r\n"
                + this.MIDDLE_BORDER + "\r\n"
                // 添加打印的日志信息
                + this.HORIZONTAL_DOUBLE_LINE + data + "\r\n"
                + this.BOTTOM_BORDER + "\r\n";
            console.log(builder);
        }
    };
    /**
     * 将json对象格式化
     * @param json json对象
     * @param options
     * @returns {string} 返回格式化后的字符串
     */
    l.formatJson = function (json, options) {
        var reg,
            formatted = '',
            pad = 0,
            PADDING = '    ';
        options = options || {};
        options.newlineAfterColonIfBeforeBraceOrBracket = (options.newlineAfterColonIfBeforeBraceOrBracket === true);
        options.spaceAfterColon = (options.spaceAfterColon !== false);
        if (typeof json !== 'string') {
            json = JSON.stringify(json);
        } else {
            json = JSON.parse(json);
            json = JSON.stringify(json);
        }
        reg = /([{}])/g;
        json = json.replace(reg, '\r\n$1\r\n');
        reg = /([\[\]])/g;
        json = json.replace(reg, '\r\n$1\r\n');
        reg = /(,)/g;
        json = json.replace(reg, '$1\r\n');
        reg = /(\r\n\r\n)/g;
        json = json.replace(reg, '\r\n');
        reg = /\r\n,/g;
        json = json.replace(reg, ',');
        if (!options.newlineAfterColonIfBeforeBraceOrBracket) {
            reg = /:\r\n{/g;
            json = json.replace(reg, ':{');
            reg = /:\r\n\[/g;
            json = json.replace(reg, ':[');
        }
        if (options.spaceAfterColon) {
            reg = /:/g;
            json = json.replace(reg, ':');
        }
        (json.split('\r\n')).forEach(function (node) {
                var i,
                    indent = 0,
                    padding = '';

                if (node.match(/{$/) || node.match(/\[$/)) {
                    indent = 1;
                } else if (node.match(/}/) || node.match(/]/)) {
                    if (pad !== 0) {
                        pad -= 1;
                    }
                } else {
                    indent = 0;
                }

                for (i = 0; i < pad; i++) {
                    padding += PADDING;
                }

                formatted += padding + node + '\r\n';
                pad += indent;
            }
        );
        return formatted;
    };
    window.$logger = l;

}(window));

(function (window) {
    var h = {};
    var service = new Service();
    h.GET = function (url, data, callback, fnErr) {
        service.GET(url, data, function (ret, err) {
            if (ret && typeof callback !== "undefined") {
                callback(ret)
            } else if (err && typeof fnErr !== "undefined") {
                fnErr(err)
            }
        });
    };

    h.POST = function (url, data, callback, fnErr) {
        service.POST(url, data, function (ret, err) {
            if (ret && typeof callback !== "undefined") {
                callback(ret)
            } else if (err && typeof fnErr !== "undefined") {
                fnErr(err)
            }
        });
    };

    h.DELETE = function (url, data, callback) {
        service.DELETE(url, data, callback);
    };

    h.PUT = function (url, data, callback) {
        service.PUT(url, data, callback);
    };
    window.$http = h;
}(window));

/**
 * http 网络请求
 * @constructor
 */
function Service() {
    //是否缓存
    this.__cache = false;
    //Service请求超时
    this.__timeout = 30;
    //是否对url进行编码。传false时底层将不会对url进行编码
    this.__encode = true;
    //字符集
    this.__charset = "utf-8";
    //数据类型 json xml
    this.__dataType = "json";
    //是否上报 文件上传进度
    this.__report = false;
    //是否需要返回所有response信息，为true时，返回的头信息获取方法(ret.headers)，
    //消息体信息获取方法(ret.body)，状态码获取方法((api.systemType=='ios'?ret.info.statusCode:ret.statusCode))
    this.__returnAll = false;

    this.__headers = {
        "Content-Type": "application/json;charset=utf-8",
        "Accept": "application/json"
    };

    if (typeof Service._initialized === 'undefined') {

        /**
         * 网络请求基础方法
         * @param type      请求方式  get  post  delete  put
         * @param url       方法名
         * @param data      数据  get、delete传null
         * @param callback  回调方法
         */
        Service.prototype.BASE = function (type, url, data, callback) {
            var h5 = true;
            var param = data || {};
            if(param.h5){
                h5 = false;
            }
            var host = url.indexOf('http://') === -1 && url.indexOf('https://') === -1 ? HOST : '';
            var token = api.readFile({
                sync: true,
                path: $app.BOX_DIR() + 'token.txt'
            });
            if (!$app.isEmpty(token)) {
                this.__headers['TokenAuthorization'] = token;
            }
            if(h5){
                if (!$app.isEmpty(token) && token.indexOf('#') == -1 || $app.isEmpty(token)) {
                    param.values = fnGetUUIDParams(param.values || undefined);
                    url = url + '&visitorCode=' + api.readFile({
                        sync: true,
                        path: api.boxDir + '/visitorCode.txt'
                    });

                }
            }


            api.ajax({
                url: host + url,
                method: type,
                headers: this.__headers,
                encode: this.__encode,
                timeout: this.__timeout,
                dataType: this.__dataType,
                returnAll: this.__returnAll,
                cache: this.__cache,
                charset: this.__charset,
                report: this.__report,
                data: data || null
            }, function (ret, err) {
                if (typeof callback !== 'undefined') {
                    if (ret) {
                        if (ret.ok === 1 || ret.success) {
                            callback(ret);
                        } else if (ret.data.code === -100) {
                            $event.callRNEvent(1, 1, {toPageName: 'Login'});
                            $event.sendEvent('change_frame_event');
                        } else if (ret.data.content) {
                            $app.toast(ret.data.content, 'middle');
                        }
                    } else if (err) {
                        callback(undefined, err);
                        //err.code 0：连接错误、1：超时、2：授权错误、3：数据类型错误
                        $app.hideProgress();
                        api.refreshHeaderLoadDone();
                        $app.toast(err.msg);
                        $logger.print(err);
                    }
                }
            });
        };

        /**
         * get 请求
         * @param url       方法名     /login
         * @param data      数据
         * @param callback  回调方法
         */
        Service.prototype.GET = function (url, data, callback) {
            var arr = [];
            if (data != null) {
                var temp = data.values;
                for (var key in data.values) {
                    arr.push(key + '=' + temp[key]);
                }
            }
            this.BASE('get', url + '?' + arr.join('&'), null, callback);
        };
        /**
         * post 请求
         * @param url       方法名     /login
         * @param data      数据
         * @param callback  回调方法
         */
        Service.prototype.POST = function (url, data, callback) {
            this.BASE('post', url, data, callback);
        };
        /**
         * post 请求
         * @param url       方法名     /login
         * @param data      数据
         * @param callback  回调方法
         */

        Service.prototype.POST_JSON = function (url, data, callback) {
            this.__headers = {
                'Content-Type': 'application/json',
                'TokenAuthorization': token
            };
            this.BASE('post', url, data, callback);
        };
        /**
         * delete 请求
         * @param url       方法名     /login
         * @param data      数据
         * @param callback  回调方法
         */
        Service.prototype.DELETE = function (url, data, callback) {
            var temp = data.values;
            var arr = [];
            for (var key in data.values) {
                arr.push(key + '=' + temp[key]);
            }
            this.BASE('delete', url + '?' + arr.join('&'), null, callback);
        };
        /**
         * put 请求
         * @param url       方法名     /login
         * @param data      数据
         * @param callback  回调方法
         */
        Service.prototype.PUT = function (url, data, callback) {
            this.BASE('put', url, data, callback);
        };
        Service._initialized = true;
    }
}

/**
 * 对Date的扩展，将 Date 转化为指定格式的String
 * 月(M)、日(d)、小时(H)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * 例子：
 * (new Date().Format("yyyy-MM-dd HH:mm:ss.S") ==> 2017-07-02 08:09:04.423
 * (new Date().Format("yyyy-M-d H:m:s.S")      ==> 2017-7-2 8:9:4.18
 */
Date.prototype.Format = function (reg) { //author: JY
    var t = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "H+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(reg)) reg = reg.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in t)
        if (new RegExp("(" + k + ")").test(reg)) reg = reg.replace(RegExp.$1, (RegExp.$1.length === 1) ? (t[k]) : (("00" + t[k]).substr(("" + t[k]).length)));
    return reg;
};

function fnGetUUIDParams(params) {
    var visitorCode = api.readFile({
        sync: true,
        path: api.boxDir + '/visitorCode.txt'
    });
    if ($app.isEmpty(visitorCode)) {
        visitorCode = guid();
        api.writeFile({
            path: api.boxDir + '/visitorCode.txt',
            data: visitorCode
        }, function (ret, err) {
        });
    }
    if (params) {
        params.visitorCode = visitorCode;
    } else {
        return {
            visitorCode: visitorCode
        }
    }
    return params;
}

//生成随机数
function guid() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }

    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

