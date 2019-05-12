    //////////////////////////////////////////////////
    //// nav
    $('.Header-nav-a').mouseenter(function(){
        $(this).siblings().removeClass('Hover');
        $(this).addClass('Hover');
    }).click(function(){
        $('.Header-nav-a').removeClass('active');
        $(this).addClass('active');
    }).parent().mouseenter(function(){
        $(this).children('.Header-nav-frame').delay(10).stop(false,true).fadeIn(300);
    }).mouseleave(function(){
        $(this).children('.Header-nav-a').removeClass('Hover');
        $(this).children('.Header-nav-frame').delay(10).stop(false,true).fadeOut(200);
    });

    $('.Header-nav-frame').children().hover(function(){
        $(this).addClass('active');
        $(this).children().animate({'padding-left':'+=4%'},300);
    },function(){
        $(this).removeClass('active');
        $(this).children().animate({'padding-left':'-=4%'},300);
    }).parent().last().css({'left':'auto','right':0});

    for(var i=0;i<$('.Header-nav').find('.Header-nav-frame').length;i++){
        $('.Header-nav').find('.Header-nav-frame').eq(i).children().last().css('border-bottom','none');
    };

    ///////////////////////////////////////////////////
    ////
	$('.Paging a').click(function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});
	$(function(){
    ////////////////////////////////////////////////////////////////
    //// Register-li-submit
    $('.Register-li-submit01').click(function(){
        $('.Register-body').hide().eq(1).show();
        $('.Register-head-li').removeClass('active').eq(1).addClass('active');
    });
	
	$('.Register-li-submit02').click(function(){
        $('.Register-body').hide().eq(2).show();
        $('.Register-head-li').removeClass('active').eq(2).addClass('active');
    });
	
	$('.Register-li-submit03').click(function(){
        $('.Register-body').hide().eq(3).show();
        $('.Register-head-li').removeClass('active').eq(3).addClass('active');
    });

});



$(function() {
	var henghost={};
	$('[_h_nav]').hover(function(){
		var _nav = $(this).attr('_h_nav');
		clearTimeout( henghost[ _nav + '_timer' ] );
		henghost[ _nav + '_timer' ] = setTimeout(function(){
			$('[_h_nav]').each(function(){
				$(this)[ _nav == $(this).attr('_h_nav') ? 'addClass':'removeClass' ]('active');
			});
			$('#'+_nav).stop(true,true).slideDown(200);
		}, 150);
	},function(){
		var _nav = $(this).attr('_h_nav');
		clearTimeout( henghost[ _nav + '_timer' ] );
		henghost[ _nav + '_timer' ] = setTimeout(function(){
			$('[_h_nav]').removeClass('active');
			$('#'+_nav).stop(true,true).slideUp(200);
		}, 150);
	});
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');
    /*熊 end*/
	$(window).scroll(function() {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
        ($(this).scrollTop() > offset) ? $('.pricing-navbar').addClass('fixed'): $('.pricing-navbar').removeClass('fixed');
        ($(this).scrollTop() > 36) ? $('.header').addClass('fixed pulse') : $('.header').removeClass('fixed pulse');
        ($(this).scrollTop() > 36) ? $('.subnav').addClass('fixed') : $('.subnav').removeClass('fixed');
		/*熊2015-07-20修改*/
        //($(this).scrollTop() > 350 ) ? $('.order-viewport').addClass('fixed') : $('.order-viewport').removeClass('fixed');
		if($('#settop').size()>0){
			var settop=$("#settop").offset();
			var footer=$(".call-to-action").offset();		
			var contentHeight=footer.top-$(".order-viewport").height()-100;
			if($(window).scrollTop()>=contentHeight){
				$(".order-viewport").css({top:contentHeight-350,position:"absolute"});
			}else if($(window).scrollTop()<contentHeight && $(window).scrollTop()>=((settop.top)*1-50)){
				$(".order-viewport").css({top:"80px",position:"fixed",width:"360px"});
			}else if($(window).scrollTop()<settop.top){
				$(".order-viewport").css({position:"static"});
			}
		}
		/*熊 end*/
		if($('.tabpanel-title').size()>0){
			var tabpanel = $('.tab-content').offset();
			var tabpanel_h=tabpanel.top-60;
			if($(window).scrollTop() >= tabpanel_h){ 
				$('.tabpanel-title').addClass('fixed');
			}else{
				$('.tabpanel-title').removeClass('fixed');
			}
			//($(window).scrollTop() > tabpanel.top) ? $('.tabpanel-title').addClass('fixed') : $('.tabpanel-title').removeClass('fixed');
        }
    });
});
// HOME LINKS
setInterval(function(){
    $('.links li:last').css({'height':'0px','opacity': '0'}).insertBefore('.links li:first').animate({'height':'24px','opacity': '1'}, 'slow', function() {
      $(this).removeAttr('style');
    });
},2000);
