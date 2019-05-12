// 广西快乐十分切换盘
function role() {
	var sel1 = document.getElementById('selectid');
	var index = sel1.selectedIndex;
	var value = sel1.options[index].value;
	console.log(value);
	if (value == 1) {
		document.getElementById("zh").style.display = "block";
		document.getElementById("1q").style.display = "none";
		document.getElementById("2q").style.display = "none";
		document.getElementById("3q").style.display = "none";
		document.getElementById("4q").style.display = "none";
		document.getElementById("5q").style.display = "none";
		document.getElementById("dq").style.display = "none";
	} else if (value == 2) {
		document.getElementById("zh").style.display = "none";
		document.getElementById("1q").style.display = "block";
		document.getElementById("2q").style.display = "none";
		document.getElementById("3q").style.display = "none";
		document.getElementById("4q").style.display = "none";
		document.getElementById("5q").style.display = "none";
		document.getElementById("dq").style.display = "none";
	} else if (value == 3) {
		document.getElementById("zh").style.display = "none";
		document.getElementById("1q").style.display = "none";
		document.getElementById("2q").style.display = "block";
		document.getElementById("3q").style.display = "none";
		document.getElementById("4q").style.display = "none";
		document.getElementById("5q").style.display = "none";
		document.getElementById("dq").style.display = "none";
	} else if (value == 4) {
		document.getElementById("zh").style.display = "none";
		document.getElementById("1q").style.display = "none";
		document.getElementById("2q").style.display = "none";
		document.getElementById("3q").style.display = "block";
		document.getElementById("4q").style.display = "none";
		document.getElementById("5q").style.display = "none";
		document.getElementById("dq").style.display = "none";
	} else if (value == 5) {
		document.getElementById("zh").style.display = "none";
		document.getElementById("1q").style.display = "none";
		document.getElementById("2q").style.display = "none";
		document.getElementById("3q").style.display = "none";
		document.getElementById("4q").style.display = "block";
		document.getElementById("5q").style.display = "none";
		document.getElementById("dq").style.display = "none";
	}else if (value == 6) {
		document.getElementById("zh").style.display = "none";
		document.getElementById("1q").style.display = "none";
		document.getElementById("2q").style.display = "none";
		document.getElementById("3q").style.display = "none";
		document.getElementById("4q").style.display = "none";
		document.getElementById("5q").style.display = "block";
		document.getElementById("dq").style.display = "none";
	}else if (value == 10) {
		document.getElementById("zh").style.display = "none";
		document.getElementById("1q").style.display = "none";
		document.getElementById("2q").style.display = "none";
		document.getElementById("3q").style.display = "none";
		document.getElementById("4q").style.display = "none";
		document.getElementById("5q").style.display = "none";
		document.getElementById("dq").style.display = "block";
	}else {
		document.getElementById("zh").style.display = "block";
		document.getElementById("1q").style.display = "none";
		document.getElementById("2q").style.display = "none";
		document.getElementById("3q").style.display = "none";
		document.getElementById("4q").style.display = "none";
		document.getElementById("5q").style.display = "none";
		document.getElementById("dq").style.display = "none";
	}
};