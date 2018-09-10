$(function(){
    //
    let navBox=$(".navBox");
    let navLi=$(".List");
    let section=$("section");
    let sectionBox=$("section .sectionBox");
    navBox.hover(
        function(){
            section.css("height","230px");
            navLi.mouseenter(function(){
                let index = $(this).index();
                sectionBox.css("z-index", "200")
                    .eq(index)
                    .css("z-index", "205");
            })
        },
        function(){
            section.css("height","0");
        }
        )
    //  侧导航
    let lis2=$(".ali");
    let textPicture=$(".textPicture");
    lis2.hover(
        function(){
            let index = $(this).index();
            textPicture.css("display", "none")
                .eq(index)
                .css("display", "block");
        },
        function(){
            let index = $(this).index();
            textPicture
                .eq(index)
                .css("display", "none");
        }
    );
    //  轮播图
    let photoBox=$(".photoBox");
    let photoBoxLi=$(".photoBox li");
    let leftArrow=document.getElementsByClassName("leftArrow")[0];
    let rightArrow=document.getElementsByClassName("rightArrow")[0];
    let pointLi=$(".point li");
    let num=0;
    let t=setInterval(move,3000);

    function move(type="left"){
        if (type=="left") {
            num++;
            if (num >= photoBoxLi.length) {
                num = 0;
            }
        } else {
            num--;
            if (num < 0) {
                num = photoBoxLi.length;
            }
        }
        photoBoxLi.css("z-index", "5")
            .eq(num)
            .css("z-index", "10")
        pointLi.removeClass("white")
            .eq(num)
            .addClass("white");
    }
    photoBox.hover(
        function(){
            clearInterval(t);
        },
        function(){
            t=setInterval(move,3000);
        }
    )
    leftArrow.click(function(){
        move("left");
    })
    rightArrow.click(function(){
        move("right");
    })
    pointLi.click(function(){
        let index1 = $(this).index();
        pointLi.removeClass("white")
            .eq(index1)
            .addClass("white");
        photoBoxLi.css("z-index", "5")
            .eq(index1)
            .css("z-index", "10")
    })


})
