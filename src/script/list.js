var toggleEle = function(toggleName){
    if(toggleName === "recommend"){
    	$(".all").hide(500);
    }else if(toggleName === "all"){
    	$(".recommend").hide(500);
    }
	var display = $("."+toggleName).css("display");
	if(display === "none"){
		$("."+toggleName).show(500);
	}else{
		$("."+toggleName).hide(500);
	}
};
$(function(){
	$("#recommend").on("click", function(){
		toggleEle("recommend");
	});
	$("#all").on("click", function(){
		toggleEle("all");
	})
});