window.onload=function(){
    // 购物车
    let car=document.getElementsByClassName("car");
    let goods=document.getElementsByClassName("goods");
    car[0].onmouseenter=function(){
        goods[0].style.height="98px";
        goods[0].style.boxShadow="0 2px 10px rgba(0,0,0,0.15)";
    }
    car[0].onmouseleave=function(){
        goods[0].style.height="0";
        goods[0].style.boxShadow="none";
    }
    // 选项卡
    function name(content){
        let word_right=content.getElementsByClassName("word_right")[0];
        let lis3=word_right.getElementsByTagName("li");
        let a1=word_right.getElementsByTagName("a");
        let pe=content.getElementsByClassName("pe");
        for (let i=0;i<lis3.length;i++){
            lis3[i].onmouseenter=function(){
                for (let j=0;j<lis3.length;j++){
                    pe[j].style.zIndex="5";
                    a1[j].style.color="#333333";
                    a1[j].style.borderBottom="none";
                }
                pe[i].style.zIndex="10";
                a1[i].style.color="#ff6700";
                a1[i].style.borderBottom="2px solid #ff6700";
            }
        }
    }
    let hea=document.getElementsByClassName("hea")[0];
    name(hea);
    let intelligent=document.getElementsByClassName("intelligent")[0];
    name(intelligent);
    let collocation=document.getElementsByClassName("collocation")[0];
    name(collocation);
    let parts=document.getElementsByClassName("parts")[0];
    name(parts);
    let side=document.getElementsByClassName("side")[0];
    name(side);
    //  内容
    let readBox=document.querySelector(".readBox");
    let current1=next1=0;
    Content(readBox,current1,next1);
    let readBox1=document.querySelector(".readBox1");
    let current2=next2=0;
    Content(readBox1,current2,next2);
    let readBox2=document.querySelector(".readBox2");
    let current3=next3=0;
    Content(readBox2,current3,next3);
    let readBox3=document.querySelector(".readBox3");
    let current4=next4=0;
    Content(readBox3,current4,next4);
    function Content(readBoxs,current,next){
        let read=readBoxs.querySelectorAll(".read");
        let read1=readBoxs.querySelector(".read");
        let width=parseInt(getComputedStyle(read1,null).width);
        let wayPoint=readBoxs.querySelector("ul");
        let wayPoint1=wayPoint.querySelectorAll("li");
        let moveLeft=readBoxs.querySelector(".move_left");
        let moveRight=readBoxs.querySelector(".move_right");
        current=next=0;
        let flag=true;
        moveRight.onclick=function(){
            if (!flag){
                return;
            }
            if(next==read.length-1){
                next==read.length-1;
                return;
            }
            flag=false;
            move1();
        }
        moveLeft.onclick=function(){
            if(!flag){
                return;
            }
            if (next==0){
                return;
            }
            flag=false;
            move1L();
        }
        function move1(){
            next++;
            if (next==read.length){
                next=0;
            }
            read[next].style.left=width+"px";
            animate(read[current],{left: -width});
            animate(read[next],{left: 0},function(){
                flag=true;
            });
            wayPoint1[current].classList.remove("onclick");
            wayPoint1[next].classList.add("onclick");
            current=next;
        }
        function move1L(){
            next--;
            if (next<0){
                next=read.length-1;
            }
            read[next].style.left=-width+"px";
            animate(read[current],{left: width});
            animate(read[next],{left: 0},function(){
                flag=true;
            });
            wayPoint1[current].classList.remove("onclick");
            wayPoint1[next].classList.add("onclick");
            current=next;
        }
        wayPoint1.forEach(function(v,i){
            v.onclick=function(){
                wayPoint1.forEach(function(v,i){
                    wayPoint1[current].classList.remove("onclick");
                })
                if (i==current){
                    return;
                } else if (i>current){
                    read[i].style.left=width+"px";
                    animate(read[current],{left: -width});
                    animate(read[i],{left: 0},function(){
                        flag=true;
                    });
                } else{
                    read[i].style.left=-width+"px";
                    animate(read[current],{left: width});
                    animate(read[i],{left: 0},function(){
                        flag=true;
                    });
                }
                wayPoint1[i].classList.add("onclick");
                next=current=i;
            }
        })
    }

    //明星产品
    let selectBefore=document.querySelector(".select .select_before");
    let selectAfter=document.querySelector(".select .select_after");
    let purchase_right=document.querySelector(".purchase_right");
    let purchase_rightUl=document.querySelector(".purchase_right ul");
    let width2=parseInt(getComputedStyle(purchase_right,null).width);

    let rTime=0;
    selectAfter.onclick=function(){
        rTime++;
        if (rTime>=2){
            rTime=2;
            purchase_rightUl.style.transform="translateX("+(-(width2+248+14))+"px)";
            selectAfter.style.color="#e0e0e2";
        }else{
            purchase_rightUl.style.transform="translateX("+(-(width2+14)*rTime)+"px)";
            selectAfter.style.color="#ff6700";
        }
        if (rTime==0){
            selectBefore.style.color="#e0e0e2";
        }else{
            selectBefore.style.color="#bbb2b0";
        }
    }
    selectBefore.onclick=function(){
        rTime--;
        if (rTime<=0){
            rTime=0;
            selectBefore.style.color="#e0e0e2";
            purchase_rightUl.style.transform="translateX("+(-(width2+14)*rTime)+"px)";
        }else{
            purchase_rightUl.style.transform="translateX(-248px)";
            selectBefore.style.color="#ff6700";
        }
        if (rTime==2){
            selectAfter.style.color="#e0e0e2";
        }else{
            selectAfter.style.color="#bbb2b0";
        }
    }
    selectAfter.onmouseenter=function() {
        if (rTime==2){
            selectAfter.style.color="#e0e0e2";
        }else{
            selectAfter.style.color="#ff6700";
        }
    }
    selectAfter.onmouseleave=function() {
        if (rTime==2){
            selectAfter.style.color="#e0e0e2";
        }else{
            selectAfter.style.color="#bbb2b0";
        }
    }
    selectBefore.onmouseenter=function() {
        if (rTime==0){
            selectBefore.style.color="#e0e0e2";
        }else{
            selectBefore.style.color="#ff6700";
        }
    }
    selectBefore.onmouseleave=function() {
        if (rTime==0){
            selectBefore.style.color="#e0e0e2";
        }else{
            selectBefore.style.color="#bbb2b0";
        }
    }





    //为你推荐
    let select1Before=document.querySelector(".select1 .select_before");
    let select1After=document.querySelector(".select1 .select_after");
    let commend_bottom=document.querySelector(".commend_bottom");
    let commend_bottomUl=document.querySelector(".commend_bottom ul");
    let width1=parseInt(getComputedStyle(commend_bottom,null).width);


    let times=0;
        select1After.onclick=function(){
            times++;
            if (times>=2){
                times=2;
                select1After.style.color="#e0e0e2";
            }else{
                select1After.style.color="#ff6700";
            }
            if (times==0){
                select1Before.style.color="#e0e0e2";
            }else{
                select1Before.style.color="#bbb2b0";
            }
            commend_bottomUl.style.transform="translateX("+(-(width1+14)*times)+"px)";
        }
        select1Before.onclick=function(){
            times--;
            if (times<=0){
                times=0;
                select1Before.style.color="#e0e0e2";
            }else{
                select1Before.style.color="#ff6700";
            }
            if (times==2){
                select1After.style.color="#e0e0e2";
            }else{
                select1After.style.color="#bbb2b0";
            }
            commend_bottomUl.style.transform="translateX("+(-(width1+14)*times)+"px)";
        }
        select1After.onmouseenter=function() {
            if (times==2){
                select1After.style.color="#e0e0e2";
            }else{
                select1After.style.color="#ff6700";
            }
        }
        select1After.onmouseleave=function() {
            if (times==2){
                select1After.style.color="#e0e0e2";
            }else{
                select1After.style.color="#bbb2b0";
            }
        }
        select1Before.onmouseenter=function() {
            if (times==0){
                select1Before.style.color="#e0e0e2";
            }else{
                select1Before.style.color="#ff6700";
            }
    }
        select1Before.onmouseleave=function() {
            if (times==0){
                select1Before.style.color="#e0e0e2";
            }else{
                select1Before.style.color="#bbb2b0";
            }
    }

    // 固定定位
    let zhiding=document.querySelector(".zhiding");
        zhiding.onclick=function(){
            animate(document.body,{scrollTop:0});
            animate(document.documentElement,{scrollTop:0});
        }


    }
