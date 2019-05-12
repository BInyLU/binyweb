// 新疆时时彩·重庆时时彩·天津时时彩切换盘
function role() {
	var sel1 = document.getElementById('selectid');
	var index = sel1.selectedIndex;
	var value = sel1.options[index].value;
	console.log(value);
	if (value == 1) {
		document.getElementById("zh").style.display = "block";
		document.getElementById("ww").style.display = "none";
		document.getElementById("qw").style.display = "none";
		document.getElementById("bw").style.display = "none";
		document.getElementById("sw").style.display = "none";
		document.getElementById("gw").style.display = "none";
	} else if (value == 2) {
		document.getElementById("zh").style.display = "none";
		document.getElementById("ww").style.display = "block";
		document.getElementById("qw").style.display = "none";
		document.getElementById("bw").style.display = "none";
		document.getElementById("sw").style.display = "none";
		document.getElementById("gw").style.display = "none";
	} else if (value == 3) {
		document.getElementById("zh").style.display = "none";
		document.getElementById("ww").style.display = "none";
		document.getElementById("qw").style.display = "block";
		document.getElementById("bw").style.display = "none";
		document.getElementById("sw").style.display = "none";
		document.getElementById("gw").style.display = "none";
	} else if (value == 4) {
		document.getElementById("zh").style.display = "none";
		document.getElementById("ww").style.display = "none";
		document.getElementById("qw").style.display = "none";
		document.getElementById("bw").style.display = "block";
		document.getElementById("sw").style.display = "none";
		document.getElementById("gw").style.display = "none";
	} else if (value == 5) {
		document.getElementById("zh").style.display = "none";
		document.getElementById("ww").style.display = "none";
		document.getElementById("qw").style.display = "none";
		document.getElementById("bw").style.display = "none";
		document.getElementById("sw").style.display = "block";
		document.getElementById("gw").style.display = "none";
	}else if (value == 6) {
		document.getElementById("zh").style.display = "none";
		document.getElementById("ww").style.display = "none";
		document.getElementById("qw").style.display = "none";
		document.getElementById("bw").style.display = "none";
		document.getElementById("sw").style.display = "none";
		document.getElementById("gw").style.display = "block";
	} else {
		document.getElementById("zh").style.display = "block";
		document.getElementById("ww").style.display = "none";
		document.getElementById("qw").style.display = "none";
		document.getElementById("bw").style.display = "none";
		document.getElementById("sw").style.display = "none";
		document.getElementById("gw").style.display = "none";
	}
};