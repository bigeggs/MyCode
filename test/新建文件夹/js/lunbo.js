//滚动广告
//
$(document).ready(function(){
    var len = $(".num > li").length;
    var index = 0;  //图片序号
    var adTimer;
    $(".num li").click(function() {
        index = $(".num li").index(this);  //获取鼠标悬浮 li 的index
        showImg(index);
    }).eq(0).click();
    //滑入停止动画，滑出开始动画.
    $("#scrollPics").hover(function() {
        clearInterval(adTimer);
    }, function() {
        adTimer = setInterval(function() {
            showImg(index)
            index++;
            if (index == len) {       //最后一张图片之后，转到第一张
                index = 0;
            }
        }, 1000);
    }).trigger("mouseleave");
    
    //滑入停止动画，滑出开始动画.
    $(".num li").hover(function() {
        clearInterval(adTimer);
        index=$(this).index();
         showImg(index);
    }); $(".num li").mouseleave(function(){$("#scrollPics").mouseleave()});
     function showImg(index) {
        var adWidth = $("#scrollPics>ul>li:first").width();
        $(".slider").stop(true, false).animate({
            "marginLeft": -adWidth * index + "px"    //改变 marginTop 属性的值达到轮播的效果
        }, 300);
        $(".num li").each(function(num,li){
        	var n=num+1;
        	if(index==num)
        	{
        		$(li).removeClass("num"+n).addClass("numr"+n);
        	}
        	else
        	{
        		$(li).removeClass("numr"+(num+1)).addClass("num"+n);
        	}
        }) 
}
});