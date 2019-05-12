
			function GetBaidu(query, obj) {
				var q = query;
				var appid = "20180817000195458";
				var key = "HCZ4DFfpB_5KT8CaQqUr";
				var salt = (new Date).getTime();
				var str1 = appid + q + salt + key;
				var sign = MD5(str1);
				$.ajax({
					url: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
					type: 'post',
					dataType: 'jsonp',
					data: {
						q: q,
						from: 'auto',
						to: 'zh',
						appid: appid,
						salt: salt,
						sign: sign
					},
					success: function(msg) {
						var html = "";
						for (var i = 0; i < msg.trans_result.length; i++) {
							console.log(msg.trans_result[i].dst);
							html += msg.trans_result[i].dst
						}
						obj.html(html)
					}
				});
			}
			var text = $('.title,.text,p,ul li a').html(function(i, text) {
				GetBaidu(text, $(this));
			});