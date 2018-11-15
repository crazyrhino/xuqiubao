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
			fnRefreshing(refresh);
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
				$api.byId("list").style.webkitTransform = 'translate3d(0,' + (touch.pageY - touchY) + 'px,0)';
			} else {
				$api.byId("list").style.webkitTransform = 'translate3d(0,' + 0 + 'px,0)';
			}
		} else if (refreshStatus == 3 && refreshStatus == 4) {
			e.preventDefault();
		} else {
			$api.byId("list").style.webkitTransform = 'translate3d(0,' + 0 + 'px,0)';

		}
	});
	var isBottom = false;
	$(document).scroll(function(e) {
		fnLogStr('---------------scroll');
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

function fnRefreshing(refresh, paddingTop) {
	$api.byId("refresh").innerHTML = "小顺忙碌更新中...";
	$api.byId("list").style.webkitTransform = 'translate3d(0,' + 32 + 'px,0)';
	refresh();
}

function fnRefreshFinish() {
	refreshStatus = 0;
	$api.byId("list").style.webkitTransform = 'translate3d(0,0px,0)';
	fnShowRefreshing();
}

function fnShowRefreshing() {
	$api.dom(".refresh_header_inner").style.display = "inline-block";
	$api.dom(".refresh_result").style.display = "none";
	$api.dom(".refresh_no_result").style.display = "none";
	$api.byId("refresh").innerHTML = "松开刷新";
}

function fnShowRefreshResult(refresh_num) {
	$api.dom(".refresh_header_inner").style.display = "none";
	$api.dom(".refresh_result").style.display = "block";
	$api.dom(".refresh_no_result").style.display = "none";
	fnSetTxt('.refresh_num', refresh_num);
	setTimeout(fnRefreshFinish, 2000);
}

function fnShowRefreshNoResult() {
	$api.dom(".refresh_header_inner").style.display = "none";
	$api.dom(".refresh_result").style.display = "none";
	$api.dom(".refresh_no_result").style.display = "block";
	setTimeout(fnRefreshFinish, 2000);
}