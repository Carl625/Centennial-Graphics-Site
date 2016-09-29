// Prevent FOUC (flash of unstyled content) - http://johnpolacek.com/2012/10/03/help-prevent-fouc/
document.documentElement.className = 'no-fouc';

$(document).ready(function() {
	$('.no-fouc').removeClass('no-fouc');
	console.log("Page loaded");
});
