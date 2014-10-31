$(function () {
	$("body").track({
		options: {
			universal: true
		}
	});
	$(".sendgrid-subscription-widget").on("success", function () {
	    ga("send", {
	    	"hitType": "event",
			"eventCategory": "Form",
			"eventAction": "Subscribe",
			"eventLabel" :  "Newsletter"
		});
	});
});