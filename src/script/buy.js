$(function(){
	//add item
	$("#add").on("click", function(){
		var num = $(".deal-item").length;
		var $newDeal = $("#clone-template .deal-item").clone();
		$newDeal.find("input").each(function(){
			this.name = this.name.replace(/\d+/,num);
		});
		$newDeal.find("textarea").each(function(){
			this.name = this.name.replace(/\d+/,num);
		});

		$("#deal").append($newDeal);
	});

	//delete item
	$("body").on("click", "button.delete-deal", function(){
		alert("testing");
		$(this).parents(".deal-item").remove();
	});

});