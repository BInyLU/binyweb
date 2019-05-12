// 北京PK10·幸运飞艇切换盘
function role() {
	var sel1 = document.getElementById('selectid');
	var index = sel1.selectedIndex;
	var value = sel1.options[index].value;
	console.log(value);
	if (value == 1) {
		document.getElementById("lm").style.display = "block";
		document.getElementById("dh").style.display = "none";
		document.getElementById("gyj").style.display = "none";
	} else if (value == 2) {
		document.getElementById("lm").style.display = "none";
		document.getElementById("dh").style.display = "block";
		document.getElementById("gyj").style.display = "none";
	} else if (value == 3) {
		document.getElementById("lm").style.display = "none";
		document.getElementById("dh").style.display = "none";
		document.getElementById("gyj").style.display = "block";
	} else {
		document.getElementById("lm").style.display = "block";
		document.getElementById("dh").style.display = "none";
		document.getElementById("gyj").style.display = "none";
	}
};
