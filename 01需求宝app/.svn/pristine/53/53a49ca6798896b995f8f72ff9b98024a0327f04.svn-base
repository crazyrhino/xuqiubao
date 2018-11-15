/*
 * @Author: Administrator
 * @Date:   2017-05-17 15:04:15
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-05-17 15:33:55
 */


'use strict';
(function() {
    // 这段JS不能添加入口函数，而且引入的时候也不要放到最后面，放到最前面
    // 需求：根据屏幕的大小动态改变这个屏幕所对应html的fontsize值
    // 比例公式：不断变化的屏幕宽度/这个屏幕对应的html的fontsize值 = 原始的设计图宽度/我们自己基于这个设计图自定义的html的fontsize(一般设置为40);得出  这个屏幕对应的html的fontsize值=不断变化的屏幕大小/( 原始的设计图/我们自己基于这个设计图自定义的html的fontsize;)
    var oHtml = document.documentElement; //返回html dom中的root 节点 即<html>
    // 原始设计图的宽度移动端320,640,750,1080,1125,1242,PC端1024,1366,1280,1440,1600,1920,2560
    //比例计算 例如  在1920上宽200px  200px那在1366上就是  ( 200/1920  )*1366 =142.29
    //使用编辑器时的转换规律必须设置为: 原始设计图的html的font大小(一般为40)
    var ui = 750;
    // var ui = 663;
    //	var uin = 1366
    // 原始设计图的html的font大小
    var font = 40;
    var bili = ui / font;
    // 页面上来先调用一下
    getSize();
    window.addEventListener('resize', getSize);

    function getSize() {
        // 获取屏幕的宽度 offseWidth返回元素的宽度（包括元素宽度、内边距和边框，不包括外边距）
        var screenWidth = oHtml.offsetWidth;
        if (screenWidth >= ui) {
            oHtml.style.fontSize = font + 'px';
            // console.log('screenWidth >= ui')
        } else if (screenWidth <= 320) {
            oHtml.style.fontSize = 320 / bili + 'px';
            // console.log('screenWidth <= 320')
        } else {
            oHtml.style.fontSize = screenWidth / bili + 'px';
            // console.log('oHtml.style.fontSize = screenWidth/bili + \'px\'')
        }
    }


})()