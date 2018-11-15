$(function () {
    //table切换
    // $(".sort>div").eq(0).hide()
    $(".sort .decorationBox").hide();  //临时隐藏
    $(".tab span").click(function () {
        var index = $(".tab span").index(this)
        $(this).addClass("select").siblings().removeClass("select")
        $(".sort>div").eq(index).show().siblings().hide()
        // if (0 == index) {
        //     new Swiper('.swiper-container', {
        //         direction: 'horizontal', // 横向切换
        //         loop: true,
        //         autoplay: {  //自动切换
        //             delay: 1000,//1秒切换一次
        //             disableOnInteraction: false,
        //         }
        //     })
        // }
    })

    //轮播初始化
    new Swiper('.swiper-container', {
        direction: 'horizontal', // 横向切换
        // autoplay: {  //自动切换
        //     delay: 1000,//1秒切换一次
        //     loop: true,
        //     disableOnInteraction: false,
        // }
    })
    //form表单获取焦点隐藏"选填"提示
    $(".selection input").focus(function () {
        $(this).parent().find('i').addClass('hidden')
    })
    $(".selection input").blur(function () {
        if ('' === $(this).val().trim()) {
            $(this).parent().find('i').removeClass('hidden')
        }

    })
    //select验证
    // var selectstr= $("#select").val();
    // if(selectstr==null) {
    //     alert('每条内容必须填写，不能为空');
    // }


})