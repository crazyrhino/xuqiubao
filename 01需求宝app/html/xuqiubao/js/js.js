// $(function () {
//
// });

// 给手机端添加active
document.addEventListener("touchstart", function () { }, false);
// 自适应字体
(function (root) {
  var docEl = document.documentElement,
    timer = null,
    isfirstin = true;

  function changeview() {
    document.getElementById("container").style.visibility = "visible";
    document.getElementById("myloading").style.display = "none";
  }

  function changeRem() {
    root.rem = Math.min(24, docEl.getBoundingClientRect().width / 32 * 1.2);
    docEl.style.fontSize = root.rem + 'px';
    if (isfirstin) {
      //    setTimeout(changeview, 100);
      isfirstin = false;
    }
  }

  function tChangeRem() {
    timer && clearTimeout(timer);
    timer = setTimeout(changeRem, 300);
  }

  root.addEventListener('resize', tChangeRem);

  changeRem();

  //setInterval(function() {
  //  changeview();
  //}, 3000);
})(window);

// /*字数限制*/
// $("#orgAuditDesc").on("input propertychange", function () {
//   var $this = $(this),
//           _val = $this.val(),
//           count = "";
//   if (_val.length > 50) {
//       $this.val(_val.substring(0, 50));
//   }
//   count = $this.val().length;
//     $("#text-count").text(count);
//     $("#text-count").css('color','#333333');
//   if(count == 50){
//     $("#text-count").css('color','#f10');
//   }
//   if(count == 0){
//     $("#text-count").css('color','#a7a7a7');
//   }
//   if(count >= 5){
//     $('#toptest').href = $("#toptest").attr("datahref") + $("#orgAuditDesc").val()
//     $("#toptest").attr('disabled', 'false');
//     $("#toptest").attr('href','supplement.html?m='+encodeURI($("#orgAuditDesc").val()));
//     $("#toptest").css({'color':'#ff9500'})
//   }else{
//     $("#toptest").css({'color':'#a7a7a7'})
//   }
// });

// 搜索后改变颜色
// function inputFn () {
//   let oInput = $('#orgAuditDesc').val();
//   let datas = [
//     {
//       'id':'1',
//       'tittle':'123456789',
//       'content':'九寨沟的美景四季不断，各有不同，犹如秋季的五颜六色最为好看。 而秋季中又以每年10月下旬至11月初最为',
//       'name':'旅游达人小丸子',
//       'time':'2018-9-30'
//     },
//     {
//       'id':'2',
//       'tittle':'今年十一去哪里旅游',
//       'content':'九寨沟的美景四季不断，各有不同，犹如秋季的五颜六色最为好看。 而秋季中又以每年10月下旬至11月初最为',
//       'name':'旅游达人小丸子',
//       'time':'2018-9-30'
//     },
//     {
//       'id':'3',
//       'tittle':'干啥去今年啊啊啊啊啊',
//       'content':'九寨沟的美景四季不断，各有不同1，犹如秋季的五颜六色最为好看1。 而秋季中又以每年10月下旬至11月初最为',
//       'name':'旅游达人小丸子',
//       'time':'2018-9-30'
//     },
//     {
//       'id':'4',
//       'tittle':'啊哈哈哈234拉克的设计费了',
//       'content':'九寨沟的美景四季不断，各有不同，犹如秋季的五颜六色最为好看。 而秋季中又以每年10月下旬至11月初最为',
//       'name':'旅游达人小丸子',
//       'time':'2018-9-30'
//     },
//     {
//       'id':'5',
//       'tittle':'abcdefj啊拉克丝当减肥看啦来当时客服就',
//       'content':'九寨沟的美景四季不断，各有不同，犹如秋季的五颜六色最为好看。 而秋季中又以每年10月下旬至11月初最为',
//       'name':'旅游达人小丸子',
//       'time':'2018-9-30'
//     },
//     {
//       'id':'6',
//       'tittle':'张宇一生123123ererererabcd',
//       'content':'九寨沟的美景四季不断，各有不同1，犹如秋季的五颜六色最为好看。 而秋季中又以每年10月下旬至11月初最为',
//       'name':'旅游达人小丸子',
//       'time':'2018-9-30'
//     },
//     {
//       'id':'7',
//       'tittle':'张宇一生123123啊ererererabcd',
//       'content':'九寨沟的美景四季不断，各有不同，犹如秋季的五颜六色最为好看。 而秋季中又以每年10月下旬至11月初最为',
//       'name':'旅游达人小丸子',
//       'time':'2018-9-30'
//     },
//     {
//       'id':'8',
//       'tittle':'张宇一生啊123123ererererabcd',
//       'content':'九寨沟的美景四季不断，各有不同，犹如秋季的五颜六色最为好看。 而秋季中又以每年10月下旬至11月初最为',
//       'name':'旅游达人小丸子',
//       'time':'2018-9-30'
//     },
//   ]
//   let a = []
//   if(oInput == ''){
//     $('.contentList').css('display','none');
//   }else{
//     $.each(datas,function(index,item){
//       if(item.tittle.indexOf(oInput) >= 0){
//         $('.contentList').css('display','block');
//         let cc = [];
//         cc += item.tittle.replace(new RegExp(oInput,'g'), "<span style='color:red;'>" + oInput + "</span>");
//         a += `<li>
//                 <a href="./details.html">
//                   <h4>${cc}</h4>
//                   <p>${item.content}</p>
//                   <p><span>${item.name}</span><span>${item.time}</span></p>
//                 </a>
//               </li>`
//       }
//     })
//     $(".contentList").html(a)
//   }
// }

// href禁止点击
// jQuery(document).ready(function($) {
//   $("#toptest").attr('disabled', 'true');
//   $("#toptest").attr('datahref',$("#toptest").attr("href"));
//   $("#toptest").removeAttr('href');
// });

// 传值名称解决乱码
function getRequest() {   
  var url = window.location.search;
  var theRequest = new Object();   
  if (url.indexOf("?") != -1) {   
    var str = url.substr(1);   
    strs = str.split("&");   
    for(var i = 0; i < strs.length; i ++) {   
    theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]); 
    }   
  }   
  return theRequest;   
}
var arr = getRequest();
var searchtxt = arr['m'];//参数名
$("#scTittle").text(searchtxt)


$(function(){
  $("textarea[required]").change(function(){
    console.log($("#orgAuditDesc").val())
  })
  
})
