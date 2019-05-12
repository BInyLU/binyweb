	/* 鼠标特效 */
	var a_idx = 0;
	jQuery(document).ready(function($) {
	  $("body").click(function(e) {
		var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善");
		var $i = $("<span/>").text(a[a_idx]);
		a_idx = (a_idx + 1) % a.length;
		var x = e.pageX,
		y = e.pageY;
		$i.css({
		  "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
		  "top": y - 20,
		  "left": x,
		  "position": "absolute",
		  "font-size": ".9em",
		  "color": "#c8605e"
		});
		$("body").append($i);
		$i.animate({
		  "top": y - 180,
		  "opacity": 0
		},
		1500,
		function() {
		  $i.remove();
		});
	  });
	});


// 返回顶部 + 解读报告Tab返回标题
$(function() {
	var backButton=$('.back_to_top');
	var backButton2=$('.for1 li p');
    function backToTop() {
        $('html,body').animate({
            scrollTop: 0
        }, 200);
    }
    backButton.on('click', backToTop);
	function for1lip() {
		$('html,body').animate({
			scrollTop: 1100
		}, 200);
	}
	backButton2.on('click', for1lip);
 
    $(window).on('scroll', function () {/*当滚动条的垂直位置大于浏览器所能看到的页面的那部分的高度时，回到顶部按钮就显示 */
        if ($(window).scrollTop() > $(window).height())
            backButton.fadeIn();
        else
            backButton.fadeOut();
    });
    $(window).trigger('scroll');/*触发滚动事件，避免刷新的时候显示回到顶部按钮*/
})

	
	
// 选项卡
$(document).ready(function () {
	$(".for1 li").click(function () {
		$(".for1 li").eq($(this).index()).addClass("selected").siblings().removeClass('selected');
		$(".right1_3 div").hide().eq($(this).index()).fadeIn("fast");
	});
});

// 选项卡2
$(document).ready(function () {

	(function ($) {
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

		$('.tab ul.tabs li a').click(function (g) {
			var tab = $(this).closest('.tab'),
				index = $(this).closest('li').index();

			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');

			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

			g.preventDefault();
		});
	})(jQuery);

});


// 选项卡3
$(document).ready(function () {
	$(".tab3-sml").click(function () {
		$(".tab3-sml").eq($(this).index()).addClass("active").siblings().removeClass('active');
		$(".tab3 .tab3-content").hide().eq($(this).index()).fadeIn("fast").addClass("selected").siblings().removeClass(
			'selected');
	});
});

// 选项卡4
$(document).ready(function () {
	$(".tab3-sml-1").click(function () {
		$(".tab3-sml-1").eq($(this).index()).addClass("active").siblings().removeClass('active');
		$(".tab3 .tab3-content").hide().eq($(this).index()).fadeIn("fast").addClass("selected").siblings().removeClass(
			'selected');
	});
});

// 手风琴
	$(function () {
		$(".nav_item").removeClass("active");
		$("#nav_index").addClass("active");

		var $centerwell_first = $('#centerwell li:first');
		$centerwell_first.animate({
			width: '590px'
		}, 300);
		$centerwell_first.find('h3').addClass("on");

		$('#centerwell li').click(function () {
			if (!$(this).is(':animated')) {
				$(this).animate({
					width: '590px'
				}, 300).siblings().animate({
					width: '50px'
				}, 300);

				$('#centerwell li h3').removeClass("on");
				$(this).find("h3").addClass("on");
			}
		});
	});

// 点击弹出视频
$(document).ready(function () {
	$("#vv1").click(function () {
		$("#v1").fadeIn("fast");
		$("#c").fadeIn("fast");
	});
	$("#vv2").click(function () {
		$("#v1").fadeIn("fast");
		$("#c").fadeIn("fast");
	});
	$("#vv3").click(function () {
		$("#v1").fadeIn("fast");
		$("#c").fadeIn("fast");
	});
	$("#vv4").click(function () {
		$("#v1").fadeIn("fast");
		$("#c").fadeIn("fast");
	});
	// 关闭视频
	$("#c").click(function () {
		$("#v1").fadeOut("slow");
		$("#c").fadeOut("slow");
		$(".v1").remove("slow");
	});
	$("#c").click(function () {
		$("#v1")[0].pause();
	})
});


