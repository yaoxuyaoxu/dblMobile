    //定义一个立即执行的函数
(function() {
    var Ticts = function Ticts() {
        this.ticts = {};
    };
    /**
     *
     *
     * @param {*} id 定时元素的id
     * @param {*} endtime 结束时间
     * @param {*} starttime 开始时间
     * @param {*} two 传入此参数true或者任意字符串表示不显示秒数，不传入则默认为显示
     * @param {*} disabled 传入此参数true代表是否启用秒杀作品控制，如传入，则秒杀作品结束时，列表变灰。
     * @param {*} callback 如果启用秒杀作品控制，则需要此参数更新dom
     */
    Ticts.prototype.createTicts = function(id, endtime, starttime, two,disabled,callback) {
        var ticts = this;
        // /console.log(ticts.ticts)
        var time = moment(endtime).diff(moment(starttime));
        var _ticts = this.ticts[id] = {
                dealine: endtime,
                id: id,
                time: time,
                interval: setInterval(function() {
                    var t = null;
                    var d = null;
                    var h = null;
                    var m = null;
                    var s = null;　　　　　　　　　 //js默认时间戳为毫秒,需要转化成秒
                    t = _ticts.time / 1000;
                    //d = Math.floor(t / (24 * 3600));
                    //h = Math.floor((t - 24 * 3600 * d) / 3600);
                    h = Math.floor(t / 3600); //忽略天数 只计算小时
                    m = Math.floor((t - 24 * 3600 * d - h * 3600) / 60);
                    s = Math.floor((t - 24 * 3600 * d - h * 3600 - m * 60));　　　　　　　　　 //这里可以做一个格式化的处理,甚至做毫秒级的页面渲染,基于DOM操作,太多个倒计时一起会导致页面性能下降
                    // document.getElementById(id).innerHTML = d + '天' + h + '小时' + m + '分钟' + s + '秒';

                    if (_ticts.time < 0) {
                        ticts.deleteTicts(id); //判断是否到期,到期后自动删除定时器
                        document.getElementById(id).innerHTML = '已结束';
                        var x =  document.getElementById(id);
                        if(disabled){//兼容一下秒杀订单

                            x = x.parentNode;
                            if (x.tagName == 'DIV' && x.classList.contains('productSeckill')) {
                            
                                x.classList.add('disabled');
                            }else{
                                while (x && x.nodeType !== 9) {//dom树根节点
                                    if (x.tagName == 'DIV' && x.classList.contains('productSeckill')) {
                                        //results.push(cur);
                                        x.classList.add('disabled');
                                    }
                                    if(x.tagName == 'DIV' && x.classList.contains('imgbox')){
                                        //console.log(x.previousElementSibling)
                                        x.previousElementSibling&&x.previousElementSibling.tagName =='LABEL'
                                        for (var i = 0; i < x.previousElementSibling.children.length; i++) {
                                            //console.log(x.previousElementSibling.children)
                                            var el = x.previousElementSibling.children[i];
                                            console.log(el)
                                            if(el.nodeType ==1 && el.tagName =='INPUT'){
                                                el.setAttribute('disabled','disabled');
                                                el.setAttribute('checked',false);
                                               el.checked = false;
                                               callback && callback();
                                               
                                            }
                                            if(el.nodeType ==1 && el.tagName =='SPAN'){
                                                el.classList.remove('active');
                                                //el.setAttribute('checked','disable');
                                            }
                                            
                                        }
                                    }
                                    x = x['parentNode'];
                                }
                            }
                        }
                       
                    } else {
                        if (two) {
                            document.getElementById(id).innerHTML = '距结束 ' + ticts.twoNumber(h) + ':' + ticts.twoNumber(m);
                        } else {
                            document.getElementById(id).innerHTML = '距结束 ' + ticts.twoNumber(h) + ':' + ticts.twoNumber(m) + ':' + ticts.twoNumber(s);
                        }
                        _ticts.time -= 1000;
                    }　　　　　　　　　　　
                }, 1000)
            }
            //console.dir(ticts.ticts)
    };
    //清除定时器
    Ticts.prototype.deleteTicts = function(id) {
        clearInterval(this.ticts[id].interval); //清楚定时器的方法,需要定时器的指针作为参数传入clearInterval
        delete this.ticts[id]; //通过delete的方法删除对象中的属性
    };
    //格式化时间
    Ticts.prototype.twoNumber = function(number) {
            return number < 10 ? '0' + number : number;
        }
        //新建一个ticts对象,放到window全局函数中,那么在html页面是(或者其他js文件)可以访问该对象
    window.Ticts = new Ticts();
})();
        var defaults = {
                uuid: $('body').data('uuid'),//用户ID
                phone: $('#phone').val(), //用户绑定的手机号          
                remaintime: $('#remaintime').val(),//拍卖结束的时间
                ReshOther:undefined,//刷新竞拍人数数据的对象
                Reshtime:undefined,//刷新倒计时的对象
                stepprice: $('#premium').val(),//加价的范围
                price:0,//起拍价
              
            };
            
            console.log(defaults);
        var jishi=undefined;
        var vm = new Vue({
            el: '#goods',
            data: {
                goodscon:[],
                daojishi:defaults.remaintime,
                user:[],
                maxprice:0,
                userstate:'1',
                goid:0,
            },
            methods: {
                //初始化所有数据
                init:function(argument) {
                        this.GetbiddingUser();
                   
                },
                //取得竞拍数据
                GetbiddingUser:function(){   
                    this.maxprice=1000; 
                    //刷新竞拍数据 获得最高价格
                    $.ajax({
                    type : "get",
                    url : "index.php/index/getdata",
                    
                        success : function(e) {
    　　　　　　　　　　　　　Vue.set(this, "user", e.user)
                        },
                        error : function(){
                         
                        }

                    });
                   
                },



                //刷新拍卖数据
                getReshOther:function(){
                    this.GetbiddingUser();
                },
                twoNumber:function(){

                },
                SetRemainTime:function() {
             

                 
                    if (this.daojishi > 0) {
                        this.daojishi=this.daojishi-1;
                        retainTime = this.daojishi;
                        var second = Math.floor(retainTime % 60); //计算秒     
                        var minite = Math.floor((retainTime / 60) % 60); //计算分 
                        var hour = Math.floor((retainTime / 3600)); //计算小时
                        

                        $("#endTime").html('<span class="gotham">' + Ticts.twoNumber(hour) + ':</span>' + '<span class="gotham">' + Ticts.twoNumber(minite) + ':</span>' + '<span class="gotham">' + Ticts.twoNumber(second) + '</span>');
                    } else { 
                        clearInterval(defaults.Reshtime);
                        clearInterval(defaults.ReshOther);
                    }

            },
               //
            /**
             *判断用户状态，做出相应提示
             *
             */
            addMoneyFn:function(){
                switch (this.userstate) {
                case "-1":
                    layer.open({
                        type: 2,
                        content: '没有获取到您的信息哦,请注册...',
                        shadeClose: false,
                        time: 2
                    });
                    // setTimeout(function() {
                    //     window.location.href = Config.protocal + window.location.host + "/userCenter/PhoneVerify?openid=" + defaults.openid + "&uuid=" + defaults.uuid;
                    // }, 2000);
                    break;
                case "0":
                    animateTanchuShow("#tanchu",".modal-dialog");

                    showsetvalue();
                    break;
                case "1":
    
                    layer.open({
                        title: '出价警告',
                        content: '您好，请谨慎加价，如果拍卖成功在规定时间内完成不了支付会影响您的个人信誉。',
                        btn: ['确认', '取消'],
                        shadeClose: false,
                        yes: function(index) {
                            //点击确认
                            layer.close(index);
                           
                            animateTanchuShow("#tanchu",".modal-dialog");
                             showsetvalue();
                        },
                        btn2: function() {

                            $("#alert-error").text('您已取消').show().delay(1500).fadeOut();
                        },
                
                    });
                    break;
                case "2":
                    layer.open({
                        title: '付款提示',
                        content: '您好，由于您上次拍得的作品未在48小时之内支付，作品还可为您保留一周，超过一周之后，将对您的个人信誉造成影响。',
                        btn: ['确认', '取消'],
                        shadeClose: false,
                        yes: function(index) {
                            //点击确认
                            layer.close(index);
                            // showsetvalue();
                            animateTanchuShow("#tanchu",".modal-dialog");
                             showsetvalue();
    
                        },
                        btn2: function() {

                            $("#alert-error").text('您已取消').show().delay(1500).fadeOut();
                        },
                        cancel: function(){ 
                            //右上角关闭回调
                            
                            $("#alert-error").text('您已取消').show().delay(1500).fadeOut();
                        }
                    });
                    break;
                case "3":
                    layer.open({
                        title: '订单提示',
                        content: '您好，由于您上次拍得的作品未在7天内支付,如需出价,请联系客服。客服电话:400-088-8769',
                        btn: '我知道了',
                        shadeClose: false,
                        yes: function(index) {
                            layer.close(index);
                        }
                    });
                    break;
            }

            },
            /***判断用户状态，做出相应提示end**/


            }
        });
        vm.init();
        

 defaults.Reshtime=setInterval(function(){ vm.SetRemainTime(vm.daojishi) }, 1000);
 defaults.ReshOther=setInterval(function(){ vm.getReshOther() }, 10000);



        
