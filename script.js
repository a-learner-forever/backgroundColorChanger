function bgchange(color) {
	let colorarray = ["pink", "lightgreen", "lightblue", "#78e08f", "#fd79a8"];
	document.body.style.background = colorarray[color];
}

var colorarray = ["pink", "lightgreen", "lightblue", "#78e08f", "#fd79a8"];
var colorbox = document.getElementById("colorbox");

colorarray.forEach(function (color, index) {
	let btn = document.createElement("button");
	btn.style.backgroundColor = color;
	btn.addEventListener("click", function () {
		bgchange(index);
	});
	colorbox.appendChild(btn);
});
