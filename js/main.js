var isMobile, boxes;
var colors = ["#d6e685", "#d6e685", "#d6e685", "#d6e685", "#8cc665", "#8cc665", "#8cc665", "#44a340", "#44a340", "#1e6823"];
var s = skrollr.init({
	smoothScrolling: false,
	render: function(data) {
		if(typeof isMobile === "undefined" && typeof s !== "undefined") {
			isMobile = s.isMobile();
		}
		if(!isMobile && typeof s !== "undefined") {
			var indicator = document.getElementById("indicator");
			if(indicator.innerText.replace(",", "") != indicator.getAttribute("count")) {
				indicator.innerText = Math.round(indicator.getAttribute("count")).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}
		}
		var graph = document.getElementById("graph");
		if(boxes != graph.getAttribute("boxes")) {
			boxes = graph.getAttribute("boxes");
			var intBoxes = Math.floor(boxes);
			var trNumber = (intBoxes % 7 || 7) - 1;
			var tdNumber = Math.floor(boxes / 7);

			var index = Math.round(Math.random() * 9);
			if(typeof $ !== "undefined") {
				$(graph).find("tr").eq(trNumber).find("td").eq(tdNumber).css("background", colors[index]);
			}
		}
	}
});

if(s.isMobile()){
	isMobile = true;
	s.destroy();
	fillGitHubGraph();
}

function fillGitHubGraph () {
	if(typeof $ !== "undefined") {
		$("#graph").find("td").each(function () {
			if(Math.random() > .7) {
				var index = Math.round(Math.random() * 9);
				$(this).css("background", colors[index]);
			}
		});
	}
}

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
