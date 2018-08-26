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
    //  侧导航
    let photoList=document.getElementsByClassName("photoList");
    let lis2=photoList[0].getElementsByClassName("ali");
    let textPicture=document.getElementsByClassName("textPicture");
    for (let i=0;i<lis2.length;i++){
            lis2[i].onmouseenter=function(){
                textPicture[i].style.display="block";
            }
            lis2[i].onmouseleave=function(){
                textPicture[i].style.display="none";
            }
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

    //  轮播图
    let photoBox=document.getElementsByClassName("photoBox")[0];
    let photoBoxLi=photoBox.getElementsByTagName("li");
    let point=document.getElementsByClassName("point")[0];
    let pointLi=point.getElementsByTagName("li");
    let leftArrow=document.getElementsByClassName("leftArrow")[0];
    let rightArrow=document.getElementsByClassName("rightArrow")[0];

    let num=0;
    let t=setInterval(move,3000);
    photoBox.onmouseenter=function(){
        clearInterval(t);
    }
    photoBox.onmouseleave=function(){
        t=setInterval(move,3000);
    }
    leftArrow.onclick=function(){
        moveL();
    }
    rightArrow.onclick=function(){
        move();
    }
    for (let i=0;i<pointLi.length;i++){
        pointLi[i].onclick=function(){
            for (let j=0;j<pointLi.length;j++){
                photoBoxLi[j].style.zIndex="5";
                pointLi[j].className="";
            }
            photoBoxLi[i].style.zIndex="10";
            pointLi[i].className="white";
            num=i;
        }
    }
    function move(){
        num++;
        if (num==photoBoxLi.length){
            num=0;
        }
        for(let i=0;i<photoBoxLi.length;i++){
            photoBoxLi[i].style.zIndex="5";
            pointLi[i].className="";
        }
        photoBoxLi[num].style.zIndex="10";
        pointLi[num].className="white";
    }
    function moveL(){
        num--;
        if (num<0){
            num=photoBoxLi.length-1;
        }
        for(let i=0;i<photoBoxLi.length;i++){
            photoBoxLi[i].style.zIndex="5";
            pointLi[i].className="";
        }
        photoBoxLi[num].style.zIndex="10";
        pointLi[num].className="white";
    }
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
}
