window.onload = function() {
	var linkcss = document.getElementById("link-css");
	var themecolor = localStorage.getItem('color', true);
	var theme = document.getElementById("theme");
	var themea = theme.getElementsByTagName("a");
	var len = themea.length;

	function setcolor(thiscolor) {
		switch (thiscolor) {
			case 'green':
				linkcss.setAttribute('href', 'css/css0.css');
				break;
			case 'red':
				linkcss.setAttribute('href', 'css/css1.css');
				break;
			case 'yellow':
				linkcss.setAttribute('href', 'css/css2.css');
				break;
			case 'blue':
				linkcss.setAttribute('href', 'css/css3.css');
				break;
			case 'purple':
				linkcss.setAttribute('href', 'css/css4.css');
				break;
		}
		localStorage.setItem('color', thiscolor);
	}
	setcolor(themecolor);
	console.log(themecolor);
	for (var i = 0; i < len; i++) {
		themea[i].onclick = function() {
			var thiscolor = this.getAttribute('data-color');
			//console.log(thiscolor);
			setcolor(thiscolor);
		}
	}

}