$(function() {
    var win_width = $(window).width();
    var win_height = $(window).height();

    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
    });


    wow.init();

    $(".ggnscroll").slide({
        mainCell: ".bd ul",
        autoPage: true,
        effect: "topLoop",
        autoPlay: true,
        vis: 1,
        delayTime: 1000
    });
    var onOff = 'on';
    $('#nlistsou').click(function(){
        if(onOff == 'on'){
            $('.searchM').slideDown();
            onOff = 'off';
        }else if(onOff == 'off'){
            $('.searchM').slideUp();
            onOff = 'on';
        }
    })
     $('.bankchose').click(function() {
        $('.npmark').show();
        $('.bankcar').css('bottom',"0");

     });

    var indiv6swiper = new Swiper('.indiv6-swiper', {

        roundLengths: true,
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },

        speed: 2000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

    });



    var indiv8swiper = new Swiper('.indiv8-swiper', {

        roundLengths: true,
        loop: true,

        speed: 2000,


    });

    $('.bankcar ul li').click(function() {

        $('#bankleix').val( $(this).attr('data-bank'));
          $('.bankcar').css('bottom',"-100%");
            $('.npmark').hide();

    });

    $('.nkanj').click(function() {
        $('.npmark').show();

        animateTanchuShow("#kanjiatanchu", ".kjfrom");
    });

    $('.kanjiabtn').click(function() {

        var mobile = $('#phone').val();
        var qwprice = $('#qwprice').val();
        if (mobile == '') {
            layer.open({
                content: '请输入手机号',
                skin: 'msg',
                time: 2
            });

        }

        if (qwprice == '') {
            layer.open({
                content: '请输入期望价格',
                skin: 'msg',
                time: 2
            });

        }
        //   $.ajax({
        // url: url,
        // success: function(res) {
        //     if (res.status == 1) {



        //         layer.alert(res.msg, { icon: 1 });
        //         } else {
        //         layer.alert(res.msg, { icon: 2 });

        //         }
        //     }
        // });



    })


   $('.scdelete').click(function() {
    // alert($(this).attr('date-id'));
             $.ajax({
             type: "GET",
             url: "xxxx",
             data: {id:$(this).attr('date-id')},
             dataType: "json",
             success: function(data){
                        if (data.status==1) {
                            layer.open({
                                    content: '已删除',
                                    skin: 'msg',
                                    time: 2
                                });
                        }
                      }
         });

    });

    $('.fapiaochose li').click(function() {
            $(this).addClass('on').siblings().removeClass('on');

    });

    $('.faplx div').click(function() {
            $(this).addClass('on').siblings().removeClass('on');

    });
    $('.kepkchose li').click(function() {
            $(this).addClass('on').siblings().removeClass('on');

    });

$('.qrorder .div3 .s1 .ns1 span').click(function() {
    
        $(this).addClass('on').siblings().removeClass('on');
           $('.npmark').show();
        if ($(this).index()==1) {
        
            animateTanchuShow("#dingjintanchu", ".dingjintanchu1");
        }
        else{
            animateTanchuShow("#quankuantanchu", ".quankuantanchu1");
        }

    })
    $('.tuijhuan').click(function() {
        indiv8swiper.slideNext();
    })

     $('.quankanqr').click(function(e) {
         $('.npmark').hide();
          animateTanchuHide("#quankuantanchu", ".quankuantanchu1");
     })
      $('.orderpay').click(function(e) {
         $('.npmark').show();
            animateTanchuShow("#zhifutanchu", ".zhifutanchu1");
     })
 


       $('.dingjinqr').click(function(e) {
         $('.npmark').hide();
            animateTanchuHide("#dingjintanchu", ".dingjintanchu1");
     })
      $('.guanbi').click(function(e) {
          $('.npmark').hide();
           animateTanchuHide("#dingjintanchu", ".dingjintanchu1");
            animateTanchuHide("#quankuantanchu", ".quankuantanchu1");
            animateTanchuHide("#zhifutanchu", ".zhifutanchu1");
              animateTanchuHide("#zfcodetanchu", ".zfcodetanchu1");
            animateTanchuHide("#zfsuceetanchu", ".zfsuceetanchu1");
     })
    $('.npmark').click(function(e) {
        e.stopPropagation();
        //$(this).fadeOut();
        $(this).hide();
        $('.cbshaixuan').css('right', '-100%');
          animateTanchuHide("#dingjintanchu", ".dingjintanchu1");
           animateTanchuHide("#quankuantanchu", ".quankuantanchu1");
        animateTanchuHide("#kanjiatanchu", ".kjfrom");
         animateTanchuHide("#zhifutanchu", ".zhifutanchu1");
          animateTanchuHide("#zfcodetanchu", ".zfcodetanchu1");
            animateTanchuHide("#zfsuceetanchu", ".zfsuceetanchu1");
             $('.bankcar').css('bottom',"-100%");
       


    });

    //阻止出价对话框点击的冒泡事件
    $('.cbshaixuan').click(function(e) {
        e.stopPropagation();
    });

    $('.shaixuanbtn').click(function() {
        $('.npmark').show();
        $('.cbshaixuan').css('right', '0');
    });



    $('.wdtopsx').click(function() {

        var dis = $(this).parent().find('.dpleix').css("display");
        if (dis == "none") {
            $(this).parent().find(".dpleix").stop(false, true).slideDown(500);
            $(this).find("i").removeClass("icon-arrowll-copy").addClass('icon-thinup');
        } else {
            $(this).parent().find(".dpleix").slideUp(500);
            $(this).find("i").removeClass("icon-thinup").addClass('icon-arrowll-copy');
        }

    });

   

      $('.orderpayqr').click(function() {
        var zfcode = $('#zfcode').val();


        $.ajax({
        url: url,
        success: function(res) {
            if (res.status == 1) {

                animateTanchuShow("#zfsuceetanchu", ".zfsuceetanchu1");
            } 
            else {
                animateTanchuShow("#zhifutanchu", ".zhifutanchu1");
                }
            }
        });
      })

    $('.shuai-dl dd p').click(function() {
        var dis = $(this).parent().find('ul').css("display");
        if (dis == "none") {
            $(this).parent().find("ul").stop(false, true).slideDown(500);
        } else {
            $(this).parent().find("ul").slideUp(500);
        }
    });

    $(".in-shuju").slide({
        titCell: ".hd ul",
        mainCell: ".bd ul",
        autoPage: true,
        effect: "left",
        startFun: function(i, c) {
            var syn_text = '';
            if (i == 0) {
                syn_text = '昨日指数';

            } else if (i == 1) {
                syn_text = '今日指数';

            }
            $(".in-shuju .tit").html(syn_text);
        },

    });


    layui.use('flow', function() {
        var flow = layui.flow;
        //全部列表也加载
        flow.load({
            elem: '#intuijian',
            // scrollElem: '#intuijian',
            done: function(page, next) {


                //  //页数
                // //以jQuery的Ajax请求为例，请求下一页数据（注意：page是从2开始返回）
                // $.getJSON('/home/my/yuyuelist?page='+page, function(res){
                //     if(res.status != 0){

                //         json = JSON.parse(res.date);
                //     setTimeout(function(){
                //         var lis = [];
                //     for (var i=0; i<json.length; i++) {
                //         var li = "<li><a href='"+json[i].url+"'><h5><img src='"+json[i].thumb+"' />"+json[i].title;
                //         li+= "</h5><div class='s1'><p><span>类型：</span>"+json[i].xx+"</p><p><span>商标：</span>"+json[i].xxxx+"</p>"
                //         li+= "<div class='s2'><p><span>类目：</span>"+json[i].xx+"</p><p><span>评分：</span>"+json[i].xxxx+"</p>"
                //         li+= " <div class='s3'>"+json[i].url+"</div>";
                //         li+= " <div class='s4'><span class='sp1'>"+xxx.+"</span> <span class='sp2'>"+xxx+"</span></li>";
                //         lis.push(li);
                //     }



                //         //执行下一页渲染，第二参数为：满足“加载更多”的条件，即后面仍有分页
                //         //pages为Ajax返回的总页数，只有当前页小于总页数的情况下，才会继续出现加载更多
                //        next(lis.join(''), page < res.count); 
                //         }, 200);
                //     }
                // });

                setTimeout(function() {
                    var lis = [];
                    var a = "你好";
                    var b = "陪";
                    var c = "wap_image/tm.png";
                    for (var i = 0; i < 2; i++) {
                        var li = "<li><a href='" + a + "'><h5><img src='" + c + "' />" + a;
                        li += "</h5><div class='s1'><p><span>类型：</span>" + a + "</p><p><span>商标：</span>" + a + "</p></div>"
                        li += "<div class='s2'><p><span>类目：</span>" + a + "</p><p><span>评分：</span>" + a + "</p></div>"
                        li += " <div class='s3'>" + a + "</div>";
                        li += " <div class='s4'><span class='sp1'>" + a + "</span> <span class='sp2'>" + b + "</span></li>";
                        lis.push(li);
                    }



                    next(lis.join(''), page < 2);
                }, 200);
            }
        });



        flow.load({
            elem: '#taobaolist',
            // scrollElem: '#intuijian',
            done: function(page, next) {


                //  //页数
                // //以jQuery的Ajax请求为例，请求下一页数据（注意：page是从2开始返回）
                // $.getJSON('/home/my/yuyuelist?page='+page, function(res){
                //     if(res.status != 0){

                //         json = JSON.parse(res.date);
                //     setTimeout(function(){
                //         var lis = [];
                //     for (var i=0; i<json.length; i++) {
                //         var li = "<li><a href='"+json[i].url+"'><h5><img src='"+json[i].thumb+"' />"+json[i].title;
                //         li+= "</h5><div class='s1'><p><span>类型：</span>"+json[i].xx+"</p><p><span>商标：</span>"+json[i].xxxx+"</p>"
                //         li+= "<div class='s2'><p><span>类目：</span>"+json[i].xx+"</p><p><span>评分：</span>"+json[i].xxxx+"</p>"
                //         li+= " <div class='s3'>"+json[i].url+"</div>";
                //         li+= " <div class='s4'><span class='sp1'>"+xxx.+"</span> <span class='sp2'>"+xxx+"</span></li>";
                //         lis.push(li);
                //     }



                //         //执行下一页渲染，第二参数为：满足“加载更多”的条件，即后面仍有分页
                //         //pages为Ajax返回的总页数，只有当前页小于总页数的情况下，才会继续出现加载更多
                //        next(lis.join(''), page < res.count); 
                //         }, 200);
                //     }
                // });

                setTimeout(function() {
                    var lis = [];
                    var a = "你好";
                    var b = "陪";
                    var c = "wap_image/taobao.png";
                    var d = "wap_image/dj_hg_5.png";
                    for (var i = 0; i < 2; i++) {
                        var li = "<li><a href='" + a + "'><h5><img src='" + c + "' />" + a;
                        li += "</h5><div class='s1'><p><span>等级：</span><img src='" + d + "' /></p><p><span>好评：</span>" + a + "</p></div>"
                        li += "<div class='s2'><p><span>类目：</span>" + a + "</p><p><span>评分：</span>" + a + "</p></div>"
                        li += " <div class='s3'>" + a + "</div>";
                        li += " <div class='s4'><span class='sp1'>" + a + "</span> <span class='sp2'>" + b + "</span></li>";
                        lis.push(li);
                    }



                    next(lis.join(''), page < 2);
                }, 200);
            }
        });


        flow.load({
            elem: '#jingdonglist',
            // scrollElem: '#intuijian',
            done: function(page, next) {


                //  //页数
                // //以jQuery的Ajax请求为例，请求下一页数据（注意：page是从2开始返回）
                // $.getJSON('/home/my/yuyuelist?page='+page, function(res){
                //     if(res.status != 0){

                //         json = JSON.parse(res.date);
                //     setTimeout(function(){
                //         var lis = [];
                //     for (var i=0; i<json.length; i++) {
                //         var li = "<li><a href='"+json[i].url+"'><h5><img src='"+json[i].thumb+"' />"+json[i].title;
                //         li+= "</h5><div class='s1'><p><span>类型：</span>"+json[i].xx+"</p><p><span>商标：</span>"+json[i].xxxx+"</p>"
                //         li+= "<div class='s2'><p><span>类目：</span>"+json[i].xx+"</p><p><span>评分：</span>"+json[i].xxxx+"</p>"
                //         li+= " <div class='s3'>"+json[i].url+"</div>";
                //         li+= " <div class='s4'><span class='sp1'>"+xxx.+"</span> <span class='sp2'>"+xxx+"</span></li>";
                //         lis.push(li);
                //     }



                //         //执行下一页渲染，第二参数为：满足“加载更多”的条件，即后面仍有分页
                //         //pages为Ajax返回的总页数，只有当前页小于总页数的情况下，才会继续出现加载更多
                //        next(lis.join(''), page < res.count); 
                //         }, 200);
                //     }
                // });

                setTimeout(function() {
                    var lis = [];
                    var a = "你好";
                    var b = "陪";
                    var c = "wap_image/jd.png";
                    for (var i = 0; i < 2; i++) {
                        var li = "<li><a href='" + a + "'><h5><img src='" + c + "' />" + a;
                        li += "</h5><div class='s1'><p><span>类型：</span>" + a + "</p><p><span>商标：</span>" + a + "</p></div>"
                        li += "<div class='s2'><p><span>类目：</span>" + a + "</p><p><span>评分：</span>" + a + "</p></div>"
                        li += " <div class='s3'>" + a + "</div>";
                        li += " <div class='s4'><span class='sp1'>" + a + "</span> <span class='sp2'>" + b + "</span></li>";
                        lis.push(li);
                    }
                    next(lis.join(''), page < 2);
                }, 200);
            }
        });


          flow.load({
            elem: '.guanyuwangdian',
            // scrollElem: '#intuijian',
            done: function(page, next) {


                //  //页数
                // //以jQuery的Ajax请求为例，请求下一页数据（注意：page是从2开始返回）
                // $.getJSON('/home/my/yuyuelist?page='+page, function(res){
                //     if(res.status != 0){

                //         json = JSON.parse(res.date);
                //     setTimeout(function(){
                //         var lis = [];
                //     for (var i=0; i<json.length; i++) {
                //         var li = "<li><a href='"+json[i].url+"'><h5><img src='"+json[i].thumb+"' />"+json[i].title;
                //         li+= "</h5><div class='s1'><p><span>类型：</span>"+json[i].xx+"</p><p><span>商标：</span>"+json[i].xxxx+"</p>"
                //         li+= "<div class='s2'><p><span>类目：</span>"+json[i].xx+"</p><p><span>评分：</span>"+json[i].xxxx+"</p>"
                //         li+= " <div class='s3'>"+json[i].url+"</div>";
                //         li+= " <div class='s4'><span class='sp1'>"+xxx.+"</span> <span class='sp2'>"+xxx+"</span></li>";
                //         lis.push(li);
                //     }



                //         //执行下一页渲染，第二参数为：满足“加载更多”的条件，即后面仍有分页
                //         //pages为Ajax返回的总页数，只有当前页小于总页数的情况下，才会继续出现加载更多
                //        next(lis.join(''), page < res.count); 
                //         }, 200);
                //     }
                // });

                setTimeout(function() {
                    var lis = [];
                    var a = "你好";
                    var b = "陪";
                    var c = "wap_image/jd.png";
                    for (var i = 0; i < 2; i++) {
                        var li = "<li><a href="+a +"'><i class='iconfont icon-jiantou1'></i>" + b+"</li>";
                      
                        lis.push(li);
                    }
                    next(lis.join(''), page < 2);
                }, 200);
            }
        });





    });




})


function fnGetanimateClass() {
    var animateArr = ['zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp'];
    var num = Math.floor(Math.random() * 5);
    var animate = animateArr[num];
    return animate

}
var animate = fnGetanimateClass();

function animateTanchuShow(parent, child) {

    $(parent).fadeIn();
    $(child).removeClass('zoomOut').addClass(animate);
}

function animateTanchuHide(parent, child) {
    //var animate =fnGetanimateClass();
    $(child).removeClass(animate).addClass('zoomOut');
    $(parent).fadeOut();
}

function check_sousou() {


    var souval = $('#souval').val();

    var error = '';
    if (souval == '') {
        layer.open({
            content: '关键字不能为空',
            skin: 'msg',
            time: 2
        });
        error = false;
        return false;
    }


    if (error != false) {
        $('.sou').submit()
    }


}