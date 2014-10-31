var isMobile, boxes;
var colors = ["#d6e685", "#d6e685", "#d6e685", "#d6e685", "#8cc665", "#8cc665", "#8cc665", "#44a340", "#44a340", "#1e6823"];
var s = skrollr.init({
	smoothScrolling: false,
	render: function(data) {
		if(typeof isMobile === "undefined" && typeof s !== "undefined") {
			isMobile = s.isMobile();
		}

		if(!isMobile && typeof s !== "undefined") {
			try {
				var indicator = document.getElementById("indicator");
				if(typeof indicator.innerText !== "undefined" && indicator.innerText.replace(",", "") != indicator.getAttribute("count")) {
					indicator.innerText = Math.round(indicator.getAttribute("count")).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				}
			} catch (e) { }
		}

		var graph = document.getElementById("graph");
		try {
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
		} catch (e) { }
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