$(function(){
	eventstandout($('.time_line:first'));
	$('.time_line').mouseenter(function(event) {
		eventstandout($(this));
		eventrevert($(this).siblings());
	});
	$('.time_line2').mouseenter(function(event) {
		$(this).find('.inner').addClass('');
		$(this).find('h2').addClass('pb10');
		$(this).find('p').addClass('pt10');
		$(this).find('.hideimg').stop().fadeIn();
	});
	$('.circle_clock2').appear(function() {
	  	var numa=0;
		var circleTime=setInterval(function(){
			numa++;
			if(numa>=101){
				return false;
			}
			change(numa);
		},2);
	},{accY: -200});
});

function eventstandout(_this){
	_this.find('.landmark_point').attr('src','assets/img/about/landmark_point2.png');
	_this.find('.left span').css('color','#64A024');
	_this.find('.left h3').css('color','#64A024');
	_this.find('.inner_left').stop().animate({'marginLeft':'0px'}, 200);
	_this.find('.inner').css('background','#64A024');
	_this.find('p').css('color','#fff');
	_this.find('h2').css('color','#fff');
	_this.find('.landmark_point').addClass('trf_rotate90');
}
function eventrevert(_this){
	_this.find('.landmark_point').attr('src','assets/img/about/landmark_point.png');
	_this.find('.left span').css('color','#ccc');
	_this.find('.left h3').css('color','#ccc');
	_this.find('.inner_left').stop().animate({'marginLeft':'-90px'}, 200);
	_this.find('.inner').css('background','#f4f4f4');
	_this.find('p').css('color','#999');
	_this.find('h2').css('color','#666');
	_this.find('.landmark_point').removeClass('trf_rotate90');
	_this.find('.inner').removeClass('');
	_this.find('h2').removeClass('pb10');
	_this.find('p').removeClass('pt10');
	_this.find('.hideimg').stop().fadeOut(10);
}
function change(numa){
	var num=numa*3.6;
	if (num<=180){
        $('.circle_clock2').find('.right2').css('transform', "rotate(" + num + "deg)");
    } else {
        $('.circle_clock2').find('.right2').css('transform', "rotate(180deg)");
        $('.circle_clock2').find('.left2').css('transform', "rotate(" + (num - 180) + "deg)");
    };
}