$(".loan-list").hover(
	function(){
		var href = $(".loan-title a",$(this)).attr("href");
		$(this).append("<a href='"+href+"' class='lend-mask'></a>");
	},
	function(){
		$(this).children(".lend-mask").remove();
	}
);