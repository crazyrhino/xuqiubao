var refreshStatus = 0;
var refreshHeaderHeight = 32;
function fnAddTouchListener(scrollBottom, refresh, fnChangeHeaderBg, fnSetHeaderBgColor) {
	$('#list').on('touchstart', function(e) {
		console.log('touchstart:' + refreshStatus);
		if (refreshStatus != 3 && refreshStatus != 4) {
			refreshStatus = 0;
			isBottom = false;
			if (document.body.scrollTop == 0) {
				refreshStatus = 1;
			}
		}
	});
	$('#list').on('touchend', function(e) {
		console.log('touchend:' + refreshStatus);
		if (refreshStatus != 3 && refreshStatus != 4) {
			refreshStatus = 0;
			var paddingTop = parseInt($api.byId("list").style.paddingTop);
			fnLogStr('1 paddingTop '+ paddingTop + ' refreshHeaderHeight '+refreshHeaderHeight);
			if (paddingTop >= refreshHeaderHeight) {
				fnRefreshing(refresh, paddingTop);
			}else{
				fnRefreshFinish();
			}
		}else{
			fnLogStr('2 paddingTop '+ parseInt($api.byId("list").style.paddingTop) + ' refreshHeaderHeight '+refreshHeaderHeight);
			if (parseInt($api.byId("list").style.paddingTop) < refreshHeaderHeight) {
				fnRefreshFinish();
			}
		}
	});
	var touchY = 0;
	var lastTouchY = 0;
	$('#list').on('touchmove', function(e) {
		console.log('touchmove:' + refreshStatus);
		var touch = e.originalEvent.targetTouches[0];
		if (refreshStatus == 1) {
			touchY = touch.pageY;
			lastTouchY = touch.pageY;
			refreshStatus = 2;
			$api.byId("refresh").innerHTML = "松开刷新";
		} else if (refreshStatus == 2) {
			if (touch.pageY >= touchY + 10) {
				e.preventDefault();
				$api.byId("list").style.paddingTop = touch.pageY - touchY + "px";
			} else {
				$api.byId("list").style.paddingTop = 0 + "px";
			}
		} else if (refreshStatus == 3 && refreshStatus == 4) {
			e.preventDefault();
		} else {
			$api.byId("list").style.paddingTop = 0 + "px";
		}
	});
	var isBottom = false;
	$(document).scroll(function(e) {
		if ($(this).scrollTop() == 0) {
			refreshStatus = 1;
			fnSetHeaderBgColor();
		} else {
			refreshStatus = 0;
			fnChangeHeaderBg();
		}
		var scrollTop = $(this).scrollTop();
		var scrollHeight = $(document).height();
		var windowHeight = api.winHeight;
		if (scrollTop + windowHeight == scrollHeight && !isBottom) {
			scrollBottom();
			isBottom = true;
		}
	})
}

var refreshingTimeout;

function fnOnRefreshing(i,refresh, paddingTop) {
	fnLogStr('fnOnRefreshing'+i);
	$api.byId("list").style.paddingTop = paddingTop - (paddingTop / 20) * i + 'px';
	i++;
	if (parseInt($api.byId("list").style.paddingTop) <= refreshHeaderHeight) {
		refreshStatus = 3;
		clearTimeout(refreshingTimeout);
		$api.byId("refresh").innerHTML = "小顺忙碌更新中...";
		refresh();
		return;
	}
	refreshingTimeout = setTimeout(function() {
		fnLogStr('refreshingTimeout');
		fnOnRefreshing(i,refresh, paddingTop);
	}, 10);
}

var refreshFinishTimeout;
function fnOnRefreshFinish(i,paddingTop) {
	$api.byId("list").style.paddingTop = paddingTop - (paddingTop / 20) * i + 'px';
	i++;
	if (parseInt($api.byId("list").style.paddingTop) <= 0) {
		clearTimeout(refreshFinishTimeout);
		$api.byId("list").style.paddingTop = 0 + 'px';
		refreshStatus = 0;
		fnShowRefreshing();
		return;
	}
	fnOnRefreshFinish(i,paddingTop);
}

function fnRefreshing(refresh, paddingTop) {
	var i = 0;
	fnLogStr('fnRefreshing');
	refreshStatus = 3;
	$api.byId("list").style.paddingTop = refreshHeaderHeight + 'px';
	$api.byId("refresh").innerHTML = "小顺忙碌更新中...";
	refresh();
//	refreshingTimeout = setTimeout(function() {
//		fnLogStr('refreshingTimeout');
//		fnOnRefreshing(i,refresh, paddingTop);
//	}, 10);
	//	var interval = setInterval(function() {
	//		$api.byId("list").style.paddingTop = paddingTop - (paddingTop / 20) * i + 'px';
	//		i++;
	//		if (parseInt($api.byId("list").style.paddingTop) <= refreshHeaderHeight) {
	//			refreshStatus = 3;
	//			clearInterval(interval);
	//			$api.byId("refresh").innerHTML = "小顺忙碌更新中...";
	//			refresh();
	//		}
	//	}, 10);
}

function fnRefreshFinish() {
//	var paddingTop = parseInt($api.byId("list").style.paddingTop);
//	var i = 0;
//	refreshStatus = 4;
	$api.byId("list").style.paddingTop = 0 + 'px';
	refreshStatus = 0;
	fnShowRefreshing();
//	refreshFinishTimeout = setTimeout(function() {
//		fnOnRefreshFinish(i,paddingTop);
//	}, 10);
//	var interval = setInterval(function() {
//		$api.byId("list").style.paddingTop = paddingTop - (paddingTop / 20) * i + 'px';
//		i++;
//		if (parseInt($api.byId("list").style.paddingTop) <= 0) {
//			clearInterval(interval);
//			$api.byId("list").style.paddingTop = 0 + 'px';
//			refreshStatus = 0;
//			fnShowRefreshing();
//		}
//	}, 10);
}

function fnShowRefreshing() {
	$api.dom(".refresh_header_inner").style.display = "inline-block";
	$api.dom(".refresh_result").style.display = "none";
	$api.dom(".refresh_no_result").style.display = "none";
	$api.byId("refresh").innerHTML = "松开刷新";
}

function fnShowRefreshResult(refresh_num) {
	fnRefreshFinish();
//	$api.dom(".refresh_header_inner").style.display = "none";
//	$api.dom(".refresh_result").style.display = "block";
//	$api.dom(".refresh_no_result").style.display = "none";
//	fnSetTxt('.refresh_num', refresh_num);
//	setTimeout(fnRefreshFinish, 2000);
}

function fnShowRefreshNoResult() {
	fnRefreshFinish();
//	$api.dom(".refresh_header_inner").style.display = "none";
//	$api.dom(".refresh_result").style.display = "none";
//	$api.dom(".refresh_no_result").style.display = "block";
//	setTimeout(fnRefreshFinish, 2000);
}