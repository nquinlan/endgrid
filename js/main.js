var s = skrollr.init({
	smoothScrolling: false
});

if(s.isMobile()){
	s.destroy()
}

$(function () {
	$("#title h1, #title h2").bigtext({
	    childSelector: '> span'
	});
	$(".segments").width($(window).innerWidth());
});
