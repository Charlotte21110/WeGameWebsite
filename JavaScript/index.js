window.onload=function(){
    // subnav制作
    var submenu = document.getElementById("submenu");
    var platform = document.getElementById('platform');
    var flag = 0;
    platform.onmouseover = function() {
        submenu.style.display='block';
    }
    platform.onmouseout = function() {
        submenu.style.display='none';
    }

    // 表单
    var text = document.querySelector('input');
    text.onfocus = function() {
        if (this.value === '剑网3缘起'){
            this.value = '';
        }
    }
    text.onblur = function() {
        if (this.value === ''){
            this.value = '剑网3缘起';
        }
    }

    // 轮播图内点击圆点
    var and = document.getElementById("and");
    var feedback = document.getElementById("feedback");
    
    and.onclick = function() {
        if (feedback.style.display=='none'){
            feedback.style.display = 'block';
        }
        else{
            feedback.style.display = 'none';
        }
        return false;
    }

    var and02 = document.getElementById("and02");
    var feedback02 = document.getElementById("feedback02");
    
    and02.onclick = function() {
        if (feedback02.style.display=='none'){
            feedback02.style.display = 'block';
        }
        else{
            feedback02.style.display = 'none';
        }
        return false;
    }

    var and03 = document.getElementById("and03");
    var feedback03 = document.getElementById("feedback03");
    
    //轮播图内的feedback反馈修改
    and03.onclick = function() {
        if (feedback03.style.display=='none'){
            feedback03.style.display = 'block';
        }
        else{
            feedback03.style.display = 'none';
        }
        return false;
    }

    var and04 = document.getElementById("and04");
    var feedback04 = document.getElementById("feedback04");
    
    and04.onclick = function() {
        if (feedback04.style.display=='none'){
            feedback04.style.display = 'block';
        }
        else{
            feedback04.style.display = 'none';
        }
        return false;
    }

    var and05 = document.getElementById("and05");
    var feedback05 = document.getElementById("feedback05");
    
    and05.onclick = function() {
        if (feedback05.style.display=='none'){
            feedback05.style.display = 'block';
        }
        else{
            feedback05.style.display = 'none';
        }
        return false;
    }

    var and06 = document.getElementById("and06");
    var feedback06 = document.getElementById("feedback06");
    
    and06.onclick = function() {
        if (feedback06.style.display=='none'){
            feedback06.style.display = 'block';
        }
        else{
            feedback06.style.display = 'none';
        }
        return false;
    }
    
    var and07 = document.getElementById("and07");
    var feedback07 = document.getElementById("feedback07");
    
    and07.onclick = function() {
        if (feedback07.style.display=='none'){
            feedback07.style.display = 'block';
        }
        else{
            feedback07.style.display = 'none';
        }
        return false;
    }

    //轮播图动作
    var and08 = document.getElementById("and08");
    var feedback08 = document.getElementById("feedback08");
    
    and08.onclick = function() {
        if (feedback08.style.display=='none'){
            feedback08.style.display = 'block';
        }
        else{
            feedback08.style.display = 'none';
        }
        return false;
    }

    var items = document.getElementsByClassName('wgBanner-box');
    var points = document.getElementsByClassName('wgBanner-menu_ul_li');
    var index = 0;

    var clearActive = function(){
        for(var i = 0; i < items.length; i++){
            items[i].className = 'wgBanner-box';
        }
        for(var i = 0; i < items.length; i++){
            points[i].className = 'wgBanner-menu_ul_li';
        }
    }

    var goIndex = function(){
        clearActive();
        items[index].className = 'wgBanner-box first_active';
        points[index].className = 'wgBanner-menu_ul_li active';
    }

    var goNext = function(){
        if(index<7){
            index++;
        }
        else{
            index=0;
        }
        goIndex();
    }

    for (var i = 0; i < points.length; i++){
        points[i].addEventListener('mouseenter',function(){
            var pointIndex = this.getAttribute('data-index');
            index = pointIndex;
            goIndex();

            // clearInterval(time);
            // time = null;
        })
        points[i].addEventListener('mouseleave',function(){
            var pointIndex = this.getAttribute('data-index');
            index = pointIndex;
            goIndex();
        })
    }

    var time = 0;

    setInterval(function() {
        time++;
        if(time == 20){
            goNext();
            time = 0;
        }
    }, 100)

    // 新游发布的动画
    //代码繁琐其实可以优化emmm但是emmmmmmm

    var liBox01 = document.getElementById('liBox01');
    var flexStick01 = document.getElementById('flexStick01');
    var releaseVideo01 = document.getElementById('releaseVideo01');

    // 鼠标经过视频出现
    liBox01.addEventListener('mouseenter',function() {
        releaseVideo01.style.display = 'block';
        animate(flexStick01, 0);
    })
    liBox01.addEventListener('mouseleave',function() {
        releaseVideo01.style.display = 'none';
        animate(flexStick01, 145);
    })

    //动画往上滑动的定时器
    function animate(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            var step = (target - obj.offsetTop) / 10;
            step = step > 0? Math.ceil(step) : Math.floor(step);
            if (obj.offsetTop == target) {
                clearInterval(obj.timer);
                callback && callback();
            }
            obj.style.top = obj.offsetTop + step + 'px';
        }, 5);
    }

    var liBox02 = document.getElementById('liBox02');
    var flexStick02 = document.getElementById('flexStick02');
    var releaseVideo02 = document.getElementById('releaseVideo02');
    liBox02.addEventListener('mouseenter',function() {
        releaseVideo02.style.display = 'block';
        animate(flexStick02, 0);
    })
    liBox02.addEventListener('mouseleave',function() {
        releaseVideo02.style.display = 'none';
        animate(flexStick02, 145);
    })

    var liBox03 = document.getElementById('liBox03');
    var flexStick03 = document.getElementById('flexStick03');
    var releaseVideo03 = document.getElementById('releaseVideo03');
    liBox03.addEventListener('mouseenter',function() {
        releaseVideo03.style.display = 'block';
        animate(flexStick03, 0);
    })
    liBox03.addEventListener('mouseleave',function() {
        releaseVideo03.style.display = 'none';
        animate(flexStick03, 145);
    })

    var liBox04 = document.getElementById('liBox04');
    var flexStick04 = document.getElementById('flexStick04');
    var releaseVideo04 = document.getElementById('releaseVideo04');
    liBox04.addEventListener('mouseenter',function() {
        releaseVideo04.style.display = 'block';
        animate(flexStick04, 0);
    })
    liBox04.addEventListener('mouseleave',function() {
        releaseVideo04.style.display = 'none';
        animate(flexStick04, 145);
    })

    var liBox05 = document.getElementById('liBox05');
    var flexStick05 = document.getElementById('flexStick05');
    var releaseVideo05 = document.getElementById('releaseVideo05');
    liBox05.addEventListener('mouseenter',function() {
        releaseVideo05.style.display = 'block';
        animate(flexStick05, 0);
    })
    liBox05.addEventListener('mouseleave',function() {
        releaseVideo05.style.display = 'none';
        animate(flexStick05, 145);
    })

    // 先锋测试部分
    function animateLeft(obj, target, callback) {
        clearInterval(obj.timer01);
        obj.timer01 = setInterval(function() {
            var step = (target - obj.offsetLeft) / 10;
            step = step > 0? Math.ceil(step) : Math.floor(step);
            if (obj.offsetLeft == target) {
                clearInterval(obj.timer01);
                callback && callback();
            }
            obj.style.left = obj.offsetLeft + step + 'px';
        }, 15);
    }
    var test_box01 = document.getElementById('test_box01');
    var test_box_span01 = document.getElementById('test_box_span01');
    var test_box02 = document.getElementById('test_box02');
    var test_box_span02 = document.getElementById('test_box_span02');
    var test_box03 = document.getElementById('test_box03');
    var test_box_span03 = document.getElementById('test_box_span03');
    
    test_box01.addEventListener('mouseenter',function(){
        animateLeft(test_box_span01, 20);
        test_box01.style.boxShadow='1px 6px 7px 1px #a0a0a0';
    })
    test_box01.addEventListener('mouseleave',function(){
        animateLeft(test_box_span01, 0);
        test_box01.style.boxShadow='';
    })
    test_box02.addEventListener('mouseenter',function(){
        animateLeft(test_box_span02, 20);
        test_box02.style.boxShadow='1px 6px 7px 1px #a0a0a0';
    })
    test_box02.addEventListener('mouseleave',function(){
        animateLeft(test_box_span02, 0);
        test_box02.style.boxShadow='';
    })
    test_box03.addEventListener('mouseenter',function(){
        animateLeft(test_box_span03, 20);
        test_box03.style.boxShadow='1px 6px 7px 1px #a0a0a0';
    })
    test_box03.addEventListener('mouseleave',function(){
        animateLeft(test_box_span03, 0);
        test_box03.style.boxShadow='';
    })

    // 先锋测试的点击动态

    var test_items = document.getElementsByClassName('pioneer_content_ul_li');
    var test_points = document.getElementsByClassName('hot_ul_li');
    var hpr_ones = document.getElementsByClassName('hpr_one');
    var hpr_threes = document.getElementsByClassName('hpr_othree');
    test_index = 0;

    //这里的代码比上面的清爽，没那么冗杂，给每个元素添加了事件
    clearActive02 = function() {
        for (var i = 0; i < 8; i++){
            test_items[i].className = 'pioneer_content_ul_li';
        }
        for (var i = 0; i < 8; i++){
            test_points[i].className = 'hot_ul_li';
        }
    }
     
    var goIndex02 = function() {
        clearActive02();
        test_items[test_index].className = 'pioneer_content_ul_li pioneerActive';
        test_points[test_index].className = 'hot_ul_li orange';
    }

    for (var i = 0; i < test_points.length; i++){
        test_points[i].addEventListener('click', function(){
            var pointIndex02 = this.getAttribute('data-index');
            test_index = pointIndex02;
            console.log(test_index);
            goIndex02();
        })
    }
    // footer部分
    var wechat = document.getElementById('wechat');
    var footer_stick = document.getElementById('footer_stick');
    wechat.addEventListener('mouseenter',function(){
        footer_stick.style.opacity = 1;
    })
    wechat.addEventListener('mouseleave',function(){
        footer_stick.style.opacity = 0;
    })

    //返回顶部部分的动画
    function animateLeftquick(obj, target, callback) {
        clearInterval(obj.timer01);
        obj.timer01 = setInterval(function() {
            var step = (target - obj.offsetLeft) / 10;
            step = step > 0? Math.ceil(step) : Math.floor(step);
            if (obj.offsetLeft == target) {
                clearInterval(obj.timer01);
                callback && callback();
            }
            obj.style.left = obj.offsetLeft + step + 'px';
        }, 5);
    }
    var shopping = document.getElementById('shopping');
    var coupon = document.getElementById('coupon');
    var rocket = document.getElementById('rocket');
    var back_box_stick01 = document.getElementById('back_box_stick01');
    var back_box_stick02 = document.getElementById('back_box_stick02');
    var back_box_stick03 = document.getElementById('back_box_stick03');

    shopping.addEventListener('mouseover',function() {
        animateLeftquick(back_box_stick01, 13);
        back_box_stick01.style.opacity = 1;
    })
    shopping.addEventListener('mouseleave',function() {
        animateLeftquick(back_box_stick01, 2);
        back_box_stick01.style.opacity = 0;
    })
    coupon.addEventListener('mouseover',function() {
        animateLeftquick(back_box_stick02, 13);
        back_box_stick02.style.opacity = 1;
    })
    coupon.addEventListener('mouseleave',function() {
        animateLeftquick(back_box_stick02, 2);
        back_box_stick02.style.opacity = 0;
    })
    rocket.addEventListener('mouseover',function() {
        animateLeftquick(back_box_stick03, 13);
        back_box_stick03.style.opacity = 1;
    })
    rocket.addEventListener('mouseleave',function() {
        animateLeftquick(back_box_stick03, 2);
        back_box_stick03.style.opacity = 0;
    })
    // 我不知道为什么这个部分的js，我的电脑显示出来是会卡死，出bug，一时有反应一时没有，鼠标经过有时候会没有效果，有时候有

    rocket.onclick=function() {
        animateWin(window, 0);
    }

    console.log('一天写一两千行终于肝完了，真的不鼓励一下吗QAQ！哼');
    //返回顶部动画
    function animateWin(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            var step = (target - window.pageYOffset) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
                if (window.pageYOffset == target) {
                    clearInterval(obj.timer);
                    callback && callback();
                }
            window.scroll(0, window.pageYOffset + step);
        }, 15);
        
    }
}