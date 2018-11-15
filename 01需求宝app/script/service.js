var HOST = 'http://mobiletest.ehaier.com:38080';
var SHARE_HOST = 'http://mobiletest.ehaier.com:38080/share/';
var HOST_h5 = 'http://mobiletest.ehaier.com:38081/v3/thirdparty/app';//争霸赛按钮 测试环境
var HOST_PRODUCT = 'http://detailtest.ehaier.com:38080';//关联商品 测试环境
// var HOST_h5 = 'http://store.ehaier.com/appapi';  //争霸赛按钮正式环境
// var SHARE_HOST = 'https://m.ehaier.com/community/';
// var HOST = 'https://m.ehaier.com';
// var HOST_PRODUCT = 'https://detail.ehaier.com';//关联商品 正式环境
var BASE_URL = HOST+"/v5/sgcommunity/";
var TMP_BASE_URL = HOST + "/v5/es/sgcommunity/";
var CHAT_BASE_URL = HOST + "/v3/sgpm/";
var IS_DEBUG = true;
(function(window) {
	var s = {};

	s.post = function(interfaceName, params, callback, isNotShowProgress, isTmpUrl, isVisitor) {
		onRequstServer(interfaceName, buildHeadersWithToken(), params, "post", callback, isNotShowProgress, isTmpUrl, isVisitor);
	};

	s.get = function(interfaceName, params, callback, isNotShowProgress, isTmpUrl, isVisitor,winName) {
		onRequstServer(interfaceName, buildHeadersWithToken(), params, "get", callback, isNotShowProgress, isTmpUrl, isVisitor,winName);
	};

	s.postWithoutToken = function(interfaceName, params, callback, isNotShowProgress) {
		onRequstServer(interfaceName, buildHeadersWithoutToken(), params, "post", callback, isNotShowProgress);
	};

	s.getWithoutToken = function(interfaceName, params, callback, isNotShowProgress) {
		onRequstServer(interfaceName, buildHeadersWithoutToken(), params, "get", callback, isNotShowProgress);
	};

	s.getWithoutTokenForm = function(interfaceName, params, callback, isNotShowProgress) {
		onRequstServerForm(interfaceName, buildHeadersWithoutToken(), params, "get", callback, isNotShowProgress);
	};

	s.postWithoutTokenForm = function(interfaceName, params, callback, isNotShowProgress) {
		onRequstServerForm(interfaceName, buildHeadersWithoutToken(), params, "post", callback, isNotShowProgress);
	};

	s.uploadFile = function(interfaceName, type, files, callback, isNotShowProgress) {
		ajaxFile(interfaceName, buildUploadFileHeadersWithToken(), type, files, 'post', callback, isNotShowProgress);
	}

	s.getToken = function() {
		return getToken();
	}

	s.toast = function(msg, position) {
		if (position) {
			api.toast({
				msg : msg,
				location : position
			});
		} else {
			api.toast({
				msg : msg,
				location : 'middle'
			});
		}
	}

	s.checkMobile = function(mobile) {
		if (/^\d{11}$/.test(mobile)) {
			return true;
		}
		return false;
	}
	s.checkEmail = function(email) {
		if (/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(email)) {
			return true;
		}
		return false;
	}

	s.analysisCode = function(code, msg) {
		return uz_analysis_code(code, msg);
	}

	s.commonCallback = function(ret, err) {
		fnCommonCallback(ret, err);
	}
	function onRequstServer(interfaceName, headers, params, method, callback, isNotShowProgress, isTmpUrl, isVisitor,winName) {
		if (!isNotShowProgress)
			uz_showUILoading();
		ajax(interfaceName, headers, params, method, callback, isNotShowProgress, isTmpUrl, isVisitor,winName);
	}

	function onRequstServerForm(interfaceName, headers, params, method, callback, isNotShowProgress) {
		if (!isNotShowProgress)
			uz_showUILoading();
		ajaxForm(interfaceName, headers, params, method, callback, isNotShowProgress);
	}

	function ajax(interfaceName, headers, params, method, callback, isNotShowProgress, isTmpUrl, isVisitor,winName) {
		var url = BASE_URL + interfaceName;
		var currentParams;
		var token = headers.TokenAuthorization;
		if (!fnIsEmpty(token) && token.indexOf('#') == -1 || fnIsEmpty(token)) {
			currentParams = fnGetUUIDParams(params);
		}else {
			currentParams = params;
		}
		if (isTmpUrl) {
			url = TMP_BASE_URL + interfaceName;
		}
		if(interfaceName.indexOf('http') != -1) {
			url = interfaceName;
		}
		uz_log_flag(interfaceName + " headers", headers, true);
		uz_log_flag(interfaceName + " params", params, true);
		api.ajax({
			url : url,
			method : method,
			headers : headers,
			data : {
				body : currentParams
			},
			cache : false,
			timeout : 15
		}, function(ret, err) {
			uz_hideUILoading();
			uz_callback(interfaceName, ret, err, callback, isNotShowProgress,winName);
		});
	}

	function fnGetUUIDParams(params) {
		var visitorCode = api.readFile({
		    sync: true,
		    path: api.boxDir + '/visitorCode.txt'
		});
		if (fnIsEmpty(visitorCode)) {
			visitorCode = guid();
			api.writeFile({
				path : api.boxDir + '/visitorCode.txt',
				data : visitorCode
			}, function(ret, err) {
			});
		}
		if(params) {
			params.visitorCode = visitorCode;
		}else{
			return {
				visitorCode : visitorCode
			}
		}
		return params;
	}

	function ajaxForm(interfaceName, headers, params, method, callback, isNotShowProgress) {
		api.ajax({
			url : BASE_URL + interfaceName,
			method : method,
			headers : headers,
			data : {
				values : params
			},
			cache : false
		}, function(ret, err) {
			uz_hideUILoading();
			uz_callback(interfaceName, ret, err, callback, isNotShowProgress);
		});
	}

	function ajaxFile(interfaceName, headers, type, files, method, callback, isNotShowProgress) {
		uz_log_flag(interfaceName + " headers", headers, true);
		uz_log_flag(interfaceName + " files", files, true);
		if (!isNotShowProgress)
			uz_showUILoading();
		api.ajax({
			url : BASE_URL + interfaceName,
			method : method,
			headers : headers,
			data : {
				values : {
					type : type
				},
				files : {
					file : files
				}
			}
		}, function(ret, err) {
			uz_callback(interfaceName, ret, err, callback, isNotShowProgress);
		});
	}

	function fnCommonCallback(ret, err,winName) {
		if (ret) {
			//TODO
			if (ret.data && ret.data.code == -100) {
				api.sendEvent({
					name : 'APICloudCallNaviteMethod',
					extra : {
						type : 1,
						canCallBack : 1,
						toPageName : 'Login'
					}
				});
				api.sendEvent({
                    name: 'change_frame_event'
                });
                if (videoPlayer) {
				     videoPlayer.pause();
				}
			}
		}
		if (err) {
			if(winName){
                api.sendEvent({
                    name : 'showErr'
                });
			}else{
                api.toast({
                    msg : err.msg,
					location:'middle'
                });
			}
		}
	}

	function uz_callback(interfaceName, ret, err, callback, isNotShowProgress,winName) {
		uz_log_flag(interfaceName + " ret", ret, true);
		uz_log_flag(interfaceName + " err", err, true);
		if (!isNotShowProgress) {
			uz_hideUILoading();
		} else {
			api.refreshHeaderLoadDone();
		}
		if (ret) {
			callback(ret, err);
			if (ret.ok == 0) {
				fnCommonCallback(ret, err);
			}
		} else {
			fnCommonCallback(ret, err,winName);
		}
	}

	function buildHeadersWithoutToken() {
		var headers = {
			"Content-Type" : "application/json",
			"Accept" : "application/json"
		}
		return headers;
	}

	function buildHeadersWithToken() {
		var token = getToken();
		if (token) {
			return {
				"Content-Type" : "application/json",
				"Accept" : "application/json",
				"TokenAuthorization" : getToken()
			}
		} else {
			return {
				"Content-Type" : "application/json",
				"Accept" : "application/json"
			}
		}
	}

	function buildUploadFileHeadersWithToken() {
		var headers = {
			"Accept" : "application/json",
			"X-Auth-Token" : getToken()
		}
		return headers;
	}

	function getToken() {
		//		return '';
		//		return "Bearer9df46496-6028-47e7-b15b-5303fb25fb58#2a2dwb/6aVYCwuZVJydGXDf4flABS7QtqVDWGpROjUOtBDbC5AL20rm05ZDPybeL";
		var token = api.readFile({
			sync : true,
			path : api.boxDir + '/token.txt'
		});
		if (fnIsEmpty(token)) {
			return null;
		}
		return  token;
	}

	var progressTimeout;
	function uz_showUILoading() {
		clearTimeout(progressTimeout);
		progressTimeout = setTimeout(function() {
			api.showProgress();
		}, 300);
		//		fnShowUILoading();
	}

	function uz_hideUILoading() {
		clearTimeout(progressTimeout);
		setTimeout(function(){
			api.hideProgress();
		},300)

		//		fnCloseUILoading();
	}

	function uz_analysis_code(code, msg) {
		var error = errorMsg[code];
		if (error) {
			return error.message;
		}
		return code + " " + msg;
	}

	function onTokenInvalid() {
		$api.rmStorage("userId");
		api.openWin({
			name : 'root',
			url : 'widget://index.html',
			reload : true
		});
	}

	function uz_log_flag(flag, msg, isJson) {
		if (IS_DEBUG) {
			if (isJson) {
				// console.log(flag + ":" + $api.jsonToStr(msg));
//				alert(flag + ":" + $api.jsonToStr(msg));
			} else {
				// console.log(flag + ":" + msg);
//				alert(flag + ":" + $api.jsonToStr(msg));
			}
		}
	}

	var errorMsg = {

	}

	window.$service = s;
})(window);
