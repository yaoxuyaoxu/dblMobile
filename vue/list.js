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
 

   ////将时间减去1秒，计算天、时、分、秒 
       var _SetRemainTime = function(retainTime) {
            var retainTime = retainTime / 1000;
            if (retainTime > 0) {
                retainTime = retainTime - 1;
                var second = Math.floor(retainTime % 60); //计算秒     
                var minite = Math.floor((retainTime / 60) % 60); //计算分 
                var hour = Math.floor((retainTime / 3600)); //计算小时
                retainTime = retainTime;
                $('#add_money_div').show();
                return '距结束 ' + Ticts.twoNumber(hour) + ":" + Ticts.twoNumber(minite) + ":" + Ticts.twoNumber(second);
            } else {
                return '已结束';
            }

    };


layui.use('flow', function() {
    var flow = layui.flow;
    //全部列表也加载
    flow.load({
        elem: '#sc-ul1', 
        scrollElem: '#sc-ul1',
        done: function(page, next) { 
            setTimeout(function() {
                 var lis = [];
                for(var i = 0; i < 8; i++){
                    var showHtml = '';
                    var nowtime=new Date().getTime();
                    var endtime=new Date().getTime()+ 1000*60*60*24*(Math.floor(Math.random()*10+1));
                    var retainTime = moment(endtime).diff(moment(nowtime));
                    var id=Math.floor(Math.random()*100000+1)
                    showHtml+="<li"+ " id='vid"+id+"'>"+ _SetRemainTime(retainTime) +"</li>";
                      lis.push(showHtml)
                       retainTime > 0 && Ticts.createTicts('vid'+id, endtime, nowtime);
                    }



                next(lis.join(''), page < 10);
            }, 500);

        }
    });
        flow.load({
        elem: '#sc-ul2', 
        scrollElem: '#sc-ul2',
        done: function(page, next) { 
            setTimeout(function() {
                 var lis = [];
                for(var i = 0; i < 8; i++){
                    var showHtml = '';
                    var nowtime=new Date().getTime();
                    var endtime=new Date().getTime()+ 1000*60*60*24*(Math.floor(Math.random()*10+1));
                    var retainTime = moment(endtime).diff(moment(nowtime));
                    var id=Math.floor(Math.random()*100000+1)
                    showHtml+="<li"+ " id='vid"+id+"'>"+ _SetRemainTime(retainTime) +"</li>";
                      lis.push(showHtml)
                       retainTime > 0 && Ticts.createTicts('vid'+id, endtime, nowtime);
                    }



                next(lis.join(''), page < 10);
            }, 500);

        }
    });
    flow.load({
        elem: '#sc-ul3', 
        scrollElem: '#sc-ul3',
        done: function(page, next) { 
            setTimeout(function() {
                 var lis = [];
                for(var i = 0; i < 8; i++){
                    var showHtml = '';
                    var nowtime=new Date().getTime();
                    var endtime=new Date().getTime()+ 1000*60*60*24*(Math.floor(Math.random()*10+1));
                    var retainTime = moment(endtime).diff(moment(nowtime));
                    var id=Math.floor(Math.random()*100000+1)
                    showHtml+="<li"+ " id='vid"+id+"'>"+ _SetRemainTime(retainTime) +"</li>";
                      lis.push(showHtml)
                       retainTime > 0 && Ticts.createTicts('vid'+id, endtime, nowtime);
                    }



                next(lis.join(''), page < 10);
            }, 500);

        }
    });



});
        
