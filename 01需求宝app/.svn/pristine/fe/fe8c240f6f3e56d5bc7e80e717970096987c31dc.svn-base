var debug = false;
function fnSetHeaderStyle() {
	$api.fixStatusBar($api.dom('header'));
	api.setStatusBarStyle({
		style : 'dark',
		color : 'dark'
	});
}

function fnSysHeaderStyle() {
	if (api.systemType == 'android')
		return;
	fnSetHeaderStyle();
}

function fnSysHeaderStyleById() {
	if (api.systemType == 'android')
		return;
	$api.fixStatusBar($api.byId('header'));
	api.setStatusBarStyle({
		style : 'dark',
		color : 'dark'
	});
}

function fnGetTopY(y) {
	if (api.systemType == 'ios') {
		return api.safeArea.top + y;
	}
	return y;
}

function fnGetBottomY(y) {
	if (api.systemType == 'ios') {
		return api.safeArea.bottom + y;
	}
	return y;
}

function fnBack() {
	if (api.winName == 'root') {
		api.sendEvent({
			name : 'APICloudCallNaviteMethod',
			extra : {
				type : 6
			}
		});
		// api.sendEvent({
		//     name : 'APICloudCallNaviteMethod',
		//     extra : {
		//         type : 7
		//     }
		// });
	}
	api.closeWin();
}

//function fnBackListener(callback) {
//	setTimeout(function() {
//		api.addEventListener({
//			name : 'NaviteCallBack'
//		}, function(ret, err) {
//			if (callback) {
//				callback();
//			} else {
//				// alert(api.winName+'back')
//				fnBack();
//			}
//		});
//	}, 1000)
//	api.addEventListener({
//		name : 'viewappear'
//	}, function(ret, err) {
//		api.addEventListener({
//			name : 'NaviteCallBack'
//		}, function(ret, err) {
//			if (callback) {
//				callback();
//			} else {
//				// alert(api.winName+'back')
//				fnBack();
//			}
//		});
//	});
//	api.addEventListener({
//		name : 'viewdisappear'
//	}, function(ret, err) {
//		api.removeEventListener({
//			name : 'NaviteCallBack'
//		});
//	});
//}

function fnBackListener(callback) {
	api.addEventListener({
		name : 'keyback'
	}, function(ret, err) {
		callback();
	});
}

function addBottomListener(callback) {
	api.addEventListener({
		name : 'scrolltobottom',
		extra : {
			threshold : 0
		}
	}, function(ret, err) {
		callback();
	})
}

function fnAppendData(oldArr, data) {
	for (var i = 0; i < data.length; i++) {
		oldArr.push(data[i]);
	}
	return oldArr;
}

var tmpUrl = 'http://million-magic.com/sgtest1/html/';
function fnOpenWin(winName, winUrl, params, isNotHideTabBar) {
	if (winUrl == null) {
		winUrl = '';
	}
	api.openWin({
		name : winName,
		url : winUrl + winName + '.html?v=' + new Date().getTime(),
		pageParam : params,
		slidBackEnabled : false,
		allowEdit : true,
        softInputDismissMode:['tap','drag']
    });
	if (!isNotHideTabBar) {
		fnHideTabBar();
	}
}

function fnOpenWinReload(winName, winUrl, params, isNotHideTabBar) {
	if (winUrl == null) {
		winUrl = '';
	}
	api.openWin({
		name : winName,
		url : winUrl + winName + '.html?v=' + new Date().getTime(),
		pageParam : params,
		slidBackEnabled : false,
		reload : true
	});
	if (!isNotHideTabBar) {
		fnHideTabBar();
	}
}

function fnOpenWinRename(winName, winUrl, params, prefix) {
	if (winUrl == null) {
		winUrl = '';
	}
	api.openWin({
		name : prefix + winName,
		url : winUrl + winName + '.html',
		pageParam : params,
		slidBackEnabled : false,
		reload : true
	});
}

function fnOpenFrameInWin(isBounce) {
	api.openFrame({
		name : api.winName + '_frame',
		url : api.winName + '_frame.html',
		rect : {
			y : $api.dom('header').offsetHeight,
			h : api.winHeight - $api.dom('header').offsetHeight
		},
		pageParam : api.pageParam,
		bounces : isBounce,
		softInputDismissMode : ['tap', 'drag']
	});
}

function fnOpenFrameInWinMarginTop(marginTop, isBounce) {
	api.openFrame({
		name : api.winName + '_frame',
		url : api.winName + '_frame.html',
		rect : {
			y : $api.dom('header').offsetHeight + marginTop,
			h : api.winHeight - $api.dom('header').offsetHeight - marginTop
		},
		pageParam : api.pageParam,
		bounces : isBounce,
		softInputDismissMode : ['tap', 'drag']
	});
}

function fnOpenFrameInWinMargin(marginTop, marginBottom, isBounce) {
	api.openFrame({
		name : api.winName + '_frame',
		url : api.winName + '_frame.html',
		rect : {
			y : $api.dom('header').offsetHeight + marginTop,
			h : api.winHeight - $api.dom('header').offsetHeight - marginTop - marginBottom - api.safeArea.bottom
		},
		pageParam : api.pageParam,
		bounces : isBounce,
		softInputDismissMode : ['tap', 'drag']
	});
}

function fnOpenDialog(dialogName) {
	api.openFrame({
		name : dialogName,
		url : 'widget://html/dialog/' + dialogName + '.html',
		pageParam : {
			frameName : api.frameName
		},
		softInputDismissMode : ['tap', 'drag']
	});
}

function fnOpenCommonErrDialog(confirmFn, cancelFn) {
	api.openFrame({
		name : 'common_err_dialog',
		url : 'widget://html/dialog/common_err_dialog.html',
		pageParam : {
			frameName : api.frameName,
			confirmFn : confirmFn + '()',
			cancelFn : cancelFn + '()'
		},
		softInputDismissMode : ['tap', 'drag']
	});
}

function fnSetRefresh(callback) {
	api.setRefreshHeaderInfo({
		loadingImg : 'widget://image/refresh.png',
		bgColor : 'rgb(242,242,242)',
		textColor : '#CCC',
		textLoading : '小顺忙碌更新中...',
		textDown : '下拉刷新...',
		textUp : '松开刷新...',
		showTime : false
	}, function(ret, err) {
		callback();
	});
}

function fnToast(msg, location, duration) {
	var loc = fnIsEmpty(location) ? 'middle' : location;
	var durations = fnIsEmpty(duration) ? '2000' : duration;
	api.toast({
		msg : msg,
		location : loc,
		duration : durations,
		global : true
	});
}

function fnDoTList(templateId, listId, data, isAppend) {
	var tempFn = doT.template($api.byId(templateId).innerHTML);
	var resultText = tempFn(data);
	if (isAppend) {
		$api.append(listId, resultText);
	} else {
		$api.html(listId, resultText);
	}
	api.parseTapmode();
}

function fnOnInputValueChange(el, clearBtnId) {
	var inputValue = el.value;
	if (inputValue && inputValue.length > 0) {
		fnSetVisibility(clearBtnId, true);
	} else {
		fnSetVisibility(clearBtnId);
	}
}

function fnClearInput(inputId, clearBtnId) {
	$api.byId(inputId).value = '';
	fnSetVisibility(clearBtnId);
}

function fnIsEmpty(value) {
	if (value !== null && value !== undefined && $api.trimAll(value + "") !== '') {
		return false;
	}
	return true;
}

function fnSetImgSrc(target, value, defaultVal) {
	if (!fnIsEmpty(value)) {
		if (target.indexOf(".") >= 0) {
			$api.dom(target).src = value;
		} else {
			$api.byId(target).src = value;
		}
		return;
	}
	if (defaultVal) {
		if (target.indexOf(".") >= 0) {
			$api.dom(target).src = defaultVal;
		} else {
			$api.byId(target).src = defaultVal;
		}
	}
}

function fnSetBackgroundUrl(target, value) {
	if (!fnIsEmpty(value)) {
		if (target.indexOf(".") >= 0) {
			$api.dom(target).style.backgroundImage = 'url(' + value + ')';
		} else {
			$api.byId(target).style.backgroundImage = 'url(' + value + ')';
		}
	}
}

function fnSetTxt(target, value, defaultVal) {
	if (!fnIsEmpty(value)) {
		if (target.indexOf(".") >= 0) {
			$api.dom(target).innerHTML = value;
		} else {
			$api.byId(target).innerHTML = value;
		}
	}
	if (defaultVal) {
		if (target.indexOf(".") >= 0) {
			$api.dom(target).innerHTML = defaultVal;
		} else {
			$api.byId(target).innerHTML = defaultVal;
		}
	}
}

function fnGetTxt(target) {
	if (target.indexOf(".") >= 0) {
		return $api.dom(target).innerHTML;
	} else {
		return $api.byId(target).innerHTML;
	}
}

function fnSetValue(target, value, defaultVal) {
	if (!fnIsEmpty(value)) {
		if (target.indexOf(".") >= 0) {
			$api.dom(target).value = value;
		} else {
			$api.byId(target).value = value;
		}
	}
	if (defaultVal) {
		if (target.indexOf(".") >= 0) {
			$api.dom(target).value = defaultVal;
		} else {
			$api.byId(target).value = defaultVal;
		}
	}
}

function fnGetValue(target) {
	if (target.indexOf(".") >= 0) {
		return $api.dom(target).value;
	} else {
		return $api.byId(target).value;
	}
}

function fnGetDisplay(target) {
	var display;
	if (target.indexOf(".") >= 0) {
		display = $api.dom(target).style.display;
	} else {
		display = $api.byId(target).style.display;
	}
	return display == 'none' || fnIsEmpty(display) ? false : true;
}

function fnSetDisplay(target, visiable) {
	var display = visiable ? "block" : "none";
	if (target.indexOf(".") >= 0) {
		$api.dom(target).style.display = display;
	} else {
		$api.byId(target).style.display = display;
	}
}

function fnSetFlex(target) {
	if (target.indexOf(".") >= 0) {
		$api.dom(target).style.display = 'flex';
	} else {
		$api.byId(target).style.display = 'flex';
	}
}

function fnSetVisibility(target, visiable) {
	var display = visiable ? "visible" : "hidden";
	if (target.indexOf(".") >= 0) {
		$api.dom(target).style.visibility = display;
	} else {
		$api.byId(target).style.visibility = display;
	}
}

function fnAddCls(target, className) {
	if (target.indexOf(".") >= 0) {
		$api.addCls($api.dom(target), className);
	} else {
		$api.addCls($api.byId(target), className);
	}
}

function fnRmCls(target, className) {
	if (target.indexOf(".") >= 0) {
		$api.removeCls($api.dom(target), className);
	} else {
		$api.removeCls($api.byId(target), className);
	}
}

function fnGetHeight(target, isTop) {
	var offset;
	if (target.indexOf(".") >= 0) {
		offset = $api.offset($api.dom(target));
	} else {
		offset = $api.offset($api.byId(target));
	}
	if (isTop) {
		return offset.t + offset.h;
	} else {
		return offset.h;
	}
}

function fnCheckMobile(value) {
	if (!(/^1[34578]\d{9}$/.test(value))) {
		return false;
	}
	return true;
}

function fnLog(json, str) {
	if (!debug){
		return;
	}
	if (str) {
		console.log(str + ':' + JSON.stringify(json));
	} else {
		console.log(JSON.stringify(json));
	}
}

function fnLogStr(str) {
	if (debug) {
        console.log(str);
	}
}

function fnDoubleClickExit(msg, time) {
	api.addEventListener({
		name : 'keyback'
	}, function(ret, err) {
		api.toast({
			msg : msg ? msg : '再按一次退出应用',
			duration : time ? time : 2000,
			location : 'bottom'
		});
		api.addEventListener({
			name : 'keyback'
		}, function(ret, err) {
			if (ret) {
				fnExitApp()
			}
		});
		setTimeout(function() {
			fnDoubleClickExit(msg, time)
		}, time ? time : 2000)
	})
}

function fnExitApp() {
	api.closeWidget({
		id : api.appId,
		retData : {
			name : 'closeWidget'
		},
		animation : {
			type : 'flip',
			subType : 'from_bottom',
			duration : 500
		},
		silent : true
	})
}

function fnCancelBubble(e) {
	if (e.stopPropagation) {
		e.stopPropagation();
	} else {
		e.cancelBubble = true;
	}
}

var cacheNum = 0;
function fnLoadImage(id) {
	var ele = $api.byId(id);
	var dataUrl = $api.attr(ele, 'data-url');
	if (dataUrl != null && $api.trimAll(dataUrl).length > 0 && dataUrl.indexOf('http') != -1 && dataUrl.indexOf('testehaier') == -1) {
		//				console.log('开始缓存图片：'+id + ' '+dataUrl);
		cacheNum++;
		api.imageCache({
			url : dataUrl,
			thumbnail : false
		}, function(ret, err) {
			cacheNum--;
			//						console.log(cacheNum + '缓存图片回调-------------------：'+id + ' '+dataUrl);
			if (ret.status) {
				ele.src = ret.url;
				$api.attr(ele, 'data-url', '');
			}
		});
	}
}

function fnLoadSimpleImg(target, url) {
	var ele;
	if (target.indexOf(".") >= 0) {
		ele = $api.dom(target);
	} else {
		ele = $api.byId(target);
	}
	if (url != null && $api.trimAll(url).length > 0) {
		api.imageCache({
			url : url,
			thumbnail : false
		}, function(ret, err) {
			if (ret.status) {
				ele.src = ret.url;
			} else {
			}
		});
	}
}

function fnImgError(el, isBg) {
	if (isBg) {
		el.src = '../../image/tmp.jpg';
	} else {
		el.src = '../../image/home/tmp_default_header.png';
	}
}

//生成随机数
function guid() {
	function S4() {
		return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	}

	return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

function fnHideTabBar() {
	api.sendEvent({
		name : 'APICloudCallNaviteMethod',
		extra : {
			type : 5,
			isShowTabBar : 0,
		}
	});
}

function fnShowTabBar() {
	api.sendEvent({
		name : 'APICloudCallNaviteMethod',
		extra : {
			type : 5,
			isShowTabBar : 1,
		}
	});
}

function fnRefreshOpen() {
	// api.sendEvent({
	// 	name : 'APICloudCallNaviteMethod',
	// 	extra : {
	// 		type : 7,
	// 		callback : 0,
	// 		tag : 'open'
	// 	}
	// });
}

function fnCloseRnOpenWin() {
	if (api.winName == 'root') {
		api.sendEvent({
			name : 'APICloudCallNaviteMethod',
			extra : {
				type : 6
			}
		});
	}
}

function fnIsNeedLogin() {
	var token = api.readFile({
		sync : true,
		path : api.boxDir + '/token.txt'
	});
	if (fnIsEmpty(token) || token.indexOf('#') == -1) {
		api.sendEvent({
			name : 'APICloudCallNaviteMethod',
			extra : {
				type : 1,
				canCallBack : 1,
				toPageName : 'Login'
			}
		});
		return true;
	}
	return false;
}

function fnDuration(duration) {
	if (duration) {
		duration = parseInt(duration);
		var second = parseInt(duration) % 60;
		var min = parseInt(duration / 60);
		if (min < 10) {
			min = '0' + min;
		}
		if (second < 10) {
			second = '0' + second;
		}
		return min + ":" + second;
	}
	return '00:00';
}