window.onload = function () {
	var theme = document.getElementById("theme");
	var themePath = document.getElementById("link-css");
	var themea = theme.getElementsByTagName("a");
	for (var i = 0; i < themea.length; i++) {
		themea[i].index = i;
		themea[i].onclick = function themeIndex() {
			var j=this.index;
			themePath.href = "css/css" + j + ".css"
		};
	}
};