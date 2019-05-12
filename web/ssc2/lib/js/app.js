// 期号截止倒计时
var intDiff = parseInt(1200000000); //倒计时总秒数量

function timer(intDiff) {
	window.setInterval(function() {
		var day = 0,
			hour = 0,
			minute = 0,
			second = 0; //时间默认值		
		if (intDiff > 0) {
			day = Math.floor(intDiff / (60 * 60 * 24));
			hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
			minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
			second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
		}
		if (minute <= 9) minute = '0' + minute;
		if (second <= 9) second = '0' + second;
		$('#day_show').html(day + "天");
		$('#hour_show').html('<s id="h"></s>' + hour + '时');
		$('#minute_show').html('<s></s>' + minute + '分');
		$('#second_show').html('<s></s>' + second + '秒');
		intDiff--;
	}, 1000);
}

$(function() {
	timer(intDiff);
});

//彩种快捷下注点击状态
$("tr").on('tap', function(event) {
	this.click();
	$(this).toggleClass("activebg");
});

//	$(this).animate({width:"auto",height:"auto"},3000)
//    .delay(200)//两个动画之间的延迟
//    .animate({ width: "auto", height: "400px" }, 3000);


//普通和快捷下注
$("#ptxz").on('tap', function(event) {
	this.click();
	$(".amount").addClass("blocks");
	$(".amount").removeClass("none");
});
$("#kjxz").on('tap', function(event) {
	this.click();
	$(".amount").addClass("none");
	$(".amount").removeClass("blocks");
});

//彩种结算计算
$(document).ready(function() {
	$(".amount input").attr("id", "in");
	$("input[id^='in']").change(function() {
		var sum = 0;
		$("input[id^='in']").each(function() {
			var r = /^-?\d+$/; //正整数 
			if ($(this).val() != '' && !r.test($(this).val())) {
				$(this).val(""); //正则表达式不匹配置空 
			} else if ($(this).val() != '') {
				sum += parseInt($(this).val());
			}
			$("#zj").val(sum);
			$("#tzp").val(sum)
		});
	});
});

//下注结算窗口 
$("#tzbtn").on('tap', function(event) {
	this.click();
	$(".tzbtns").toggle("blocks");
});
$(".close,.quedin").on('tap', function(event) {
	this.click();
	$(".tzbtns").fadeOut(200);
});

//点击收起彩种信息
$(".closenav").on('tap', function(event) {
	this.click();
	$(".play-title,.balance").toggle("blocks");
});

