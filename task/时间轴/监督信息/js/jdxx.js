$(function(){
	$(".ul_box ul").mouseover(function(){
		$(this).css("overflow","auto");
	})
	$(".ul_box ul").mouseout(function(){
		$(this).css("overflow","initial");
	})
	
	$(".p_list p").click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
		}else{
			$(this).addClass("active");
		}
		
	})
	$(".rt_text div span").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
	$(".div_lt ul li img").click(function(){
		$(".div_lt ul li img").removeClass("active");
		$(this).addClass("active");
	})
	$(".dx").click(function(){
		
		if($(".rt_list").hasClass("active")){
			$(".rt_list").removeClass("active");
			$(".date_yaer").removeClass("active");
			$(this).text("多选");
		}else{
			$(".rt_list").addClass("active");
			$(".date_yaer").addClass("active");
			$(this).text("收起");
		}
		

	})
	
	
})
