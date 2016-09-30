// Prevent FOUC (flash of unstyled content) - based on http://johnpolacek.com/2012/10/03/help-prevent-fouc/

// hide webpage
document.documentElement.className = 'no-fouc';

// called when page is completely finished loading
$(window).load(function()
{
	$('.no-fouc').removeClass('no-fouc');	// show webpage
	console.log("Page loaded");				// for debugging
});
