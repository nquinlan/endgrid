$(function () {
	$("#title h1, #title h2").bigtext({
		childSelector: '> span'
	});

	$("#locations .airports.large .id").bigtext({
		childSelector: '> .name'
	});

	$(".segments").width($(window).innerWidth());

	var $graph = $("#graph");
	var $tr = $("<tr></tr>");
	for (var i = 0; i < 70; i++) {
		$tr.append("<td></td>");
	};
	for (var i = 0; i < 7; i++) {
		$graph.append($tr.clone());
	}

	if(isMobile) {
		fillGitHubGraph();
	}
});
