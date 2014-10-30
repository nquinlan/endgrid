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

	$("#locations .airports.large .id").bigtext({
	    childSelector: '> .name'
	});

	$(".segments").width($(window).innerWidth());
});
