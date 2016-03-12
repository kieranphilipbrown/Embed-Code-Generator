(function() {
	// Variables
	var elementGenerate = document.getElementById("generate");
	var elementResult = document.getElementById("result");

	var txtSiteName = document.getElementById("siteName");
	var urlPostUrl = document.getElementById("postUrl");
	var txtImageAltText = document.getElementById("imageAltText");
	var urlImageUrl = document.getElementById("imageUrl");
	var numImageHeight = document.getElementById("imageHeight");
	var numImageWidth = document.getElementById("imageWidth");
	
	// Add Event Listeners
	elementGenerate.addEventListener(
		'click',
		function() {
			generateResult(elementResult, txtSiteName, urlPostUrl, txtImageAltText, urlImageUrl, numImageHeight, numImageWidth);
		}
	);
})();
function generateResult(elementResult, txtSiteName, urlPostUrl, txtImageAltText, urlImageUrl, numImageHeight, numImageWidth) {
	elementResult.value = "<h3>Share this Image On Your Site</h3>";
	elementResult.value += "<textarea onclick=&#34;this.focus();this.select()&#34;>";
	elementResult.value += "&lt;p&gt;";
	elementResult.value += "&lt;strong&gt;Please include attribution to " + txtSiteName.value + " with this graphic.&lt;/strong&gt;";
	elementResult.value += "&lt;br /&gt;&lt;br /&gt;";
	elementResult.value += "&lt;a href=&#34;" + urlPostUrl.value + "&#34;&gt;";
	elementResult.value += "&lt;img alt=&#34;" + txtImageAltText.value + "&#34; height=&#34;" + numImageHeight.value + "&#34; src=&#34;" + urlImageUrl.value + "&#34; width=&#34;" + numImageWidth.value + "&#34;&gt;";
	elementResult.value += "&lt;/a&gt;";
	elementResult.value += "&lt;/p&gt;";
	elementResult.value += "</textarea>";
}