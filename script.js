(function() {
	// Variables
	var elementGenerate = document.getElementById("generate");
	var elementResult = document.getElementById("result");

	var txtSiteName = document.getElementById("txtSiteName");
	var urlPostUrl = document.getElementById("urlPostUrl");
	var txtImageAltText = document.getElementById("txtImageAltText");
	var urlImageUrl = document.getElementById("urlImageUrl");
	var numImageHeight = document.getElementById("numImageHeight");
	var numImageWidth = document.getElementById("numImageWidth");
	var numEmbedHeight = document.getElementById("numEmbedHeight");
	var numEmbedWidth = document.getElementById("numEmbedWidth");
	
	// Add Event Listeners
	elementGenerate.addEventListener(
		'click',
		function() {
			generateResult(elementResult, txtSiteName, urlPostUrl, txtImageAltText, urlImageUrl, numImageHeight, numImageWidth, numEmbedHeight, numEmbedWidth);
		}
	);
})();
function generateResult(elementResult, txtSiteName, urlPostUrl, txtImageAltText, urlImageUrl, numImageHeight, numImageWidth, numEmbedHeight, numEmbedWidth) {
	elementResult.value = "&lt;h3&gt;Share this Image On Your Site&lt;/h3&gt;";
	elementResult.value += "&lt;textarea onclick=&#34;this.focus();this.select()&#34; style=&#34;height:" + numEmbedHeight.value + "px;width:" + numEmbedWidth.value + "px;&#34;&gt;";
	elementResult.value += "&lt;p&gt;";
	elementResult.value += "&lt;strong&gt;Please include attribution to " + txtSiteName.value + " with this graphic.&lt;/strong&gt;";
	elementResult.value += "&lt;br /&gt;&lt;br /&gt;";
	elementResult.value += "&lt;a href=&#34;" + urlPostUrl.value + "&#34;&gt;";
	elementResult.value += "&lt;img alt=&#34;" + txtImageAltText.value + "&#34; height=&#34;" + numImageHeight.value + "&#34; src=&#34;" + urlImageUrl.value + "&#34; width=&#34;" + numImageWidth.value + "&#34;&gt;";
	elementResult.value += "&lt;/a&gt;";
	elementResult.value += "&lt;/p&gt;";
	elementResult.value += "&lt;/textarea&gt;";
}