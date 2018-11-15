var uploadUrls;

function fnAddNativeListener() {
	api.addEventListener({
		name : 'NaviteCallAPICloudMethod'
	}, function(rets, err) {
		api.hideProgress();
		var ret = rets.value;
		if (ret.type == 4) {
            if (ret.tag !== api.winName) {
                return;
            }
            if (ret.subType !== 'progress' && ret.success == 1) {
                uploadUrls = ret.data.urls.join(',');
                if (replyVue.isReply) {
                    fnCommentTopic(uploadUrls, replyVue.comment.id);
                } else {
                    fnCommentTopic(uploadUrls);
                }
            } else if (ret.success != 1) {
                fnToast(ret.message, 'middle');
            }
		} else if (ret.type == 3) {
            api.hideProgress();
			if (ret.success == 1) {
                api.closeFrame({
                    name: 'topic_detail_share_frame'
                });
                fnToast('分享成功', 'middle');
                if($api.dom('.share_div') != null){
                    fnSetDisplay('.share_div', false);
                }
				$service.get(HOST+'/v3/h5/sg/member/getShareSuccess.json',{
					topicId : topicDetailsVue.topicDetails.id
				},function(ret,err) {
				});
				var flag = 1;
				if(type == 4) {
					flag = 2;
				}
				$service.get('topic/share.ajax',{
					flag : flag,
					itemId : topicDetailsVue.topicDetails.id
				},function(ret,err) {
				});
			} else {
				fnToast(ret.message, 'middle');
			}
		}else if (ret.type == 10 && ret.tag =='goback'){
			if (isFullscreen) {
			    if (videoWidth >= videoHeight) {
                    api.sendEvent({
                        name: 'APICloudCallNaviteMethod',
                        extra: {
                            type: 10,          // type=10代表横竖屏功能
                            canCallBack: 0,          // 不需要回调
                            command: ['1'],            // command是个数组,在type=10时,’1’表示竖屏, '2'表示横屏
                        }
                    });
                }
                videoPlayer.setPlayerSize('100%', '214px');
                $api.dom('.video_inner').style.height = '214px';
                $api.dom('.video_control_play_pause').style.marginTop = 80 + 'px';
                fnSetDisplay('.chat_div', true);
                fnSetDisplay('.video_header_bg', true);
                isFullscreen = false;
            }else {
                api.closeWin();
			}
        }else  if (ret.type == 9) {
            if (ret.tag !== api.winName) {
                return;
            }
            if (ret.success == 1) {
                if (uploadImgVue.list.length == 10) {
                    fnToast('最多只能选择9张图片', 'middle');
                    return;
                }
                fnOpenWin("select_picture", null, {
                    winName: api.winName,
                    frameName: api.frameName,
                    canSelectNum: 10 - uploadImgVue.list.length
                });
            } else {
                // fnToast('没有相应权限', 'middle');
                api.alert({
                    title: '提示',
                    msg: '没有相机权限，请进入设置添加应用的相机/相册权限',
                    buttons: ['确定']
                }, function (ret, err) {
                });
            }
        }else if (ret.type == 1) {
        	isNeedLogin = false;
        	isShareing = false;
			if (ret.success == 1) {
				var token = ret.token;
				api.writeFile({
					path : api.boxDir + '/token.txt',
					data : token
				}, function(ret, err) {
					if(fnRefreshInfo) {
						fnRefreshInfo();
					}
				});
			} else {
				fnToast('登录失败', 'middle');
			}
		}else if(ret.type == 13){
            api.hideProgress();
            if(ret.tag == 'resume'){
                if(api.frameName.indexOf('topic_details_frame')!==-1){
                    api.closeFrame({
                        name: 'topic_detail_share_frame'
                    });
                    $api.dom('.chat_div').style.position ='fixed';
                    $api.dom('.chat_div').style.bottom = 0 + 'px';
				}
                $api.dom('#login_input').blur();
			}


		}
	});
}
var isNeedLogin = false;

function fnBuildUploadUrls(arr) {
	var urls = '';
	for (var i = 0; i < arr.length; i++) {
		if (fnIsEmpty(uploadUrls)) {
			urls += arr[i];
		} else {
			urls += ',' + arr[i];
		}
	}
	return urls;
}

function fnUploadImg() {
	api.showProgress();
	var url = HOST + '/v3/h5/sg/upLoadCommentPicture.html';
	var token = api.readFile({
		sync : true,
		path : api.boxDir + '/token.txt'
	});
	var files = [];
	for (var i = 0; i < transImgs.length; i++) {
		files.push(transImgs[i]);
	}
//  alert([url, token, 0, 0, 80, files])
    api.sendEvent({
		name : 'APICloudCallNaviteMethod',
		extra : {
			type : 4,
			tag:api.winName,
			canCallBack : 1,
            command : api.systemType === 'android'?[url, token, 0, 0, null, files]:[url, token, 0, 0, 80, files, 1]
		}
	});
}

var transImgs = [];
function fnTransImgsUrl(index) {
	if (index >= vue.list.length - 1) {
		fnUploadImg();
		return;
	}
	var UIAlbumBrowser = api.require('UIAlbumBrowser');
	UIAlbumBrowser.transPath({
		path : vue.list[index].path
	}, function(ret, err) {
		transImgs.push(ret.path);
		fnTransImgsUrl(++index);
	});
}