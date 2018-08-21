	$(window).resize(function(){
		$(".banner").height($(".banner img").eq(0).height())
	})
	$(".banner").height($(".banner img").eq(0).height())

		var i = 0;
		var pre = 0;
		$(".banner button").eq(1).click(function(){ 
			to();
		})

		$(".banner button").eq(0).click(function(){ 
			i--;
			if(i<0){ 
				i=3;
			}
			go()
		})

		$(".banner  li").each(function(j){ 
			$(this).click(function(){
				i = j;
				go();
			})
		})

		function go(){
			
			$(".banner a img").css({zIndex:8}); 
			$(".banner a img").eq(pre).css({zIndex:9}); 
			$(".banner a img").eq(i).css({zIndex:10,display:'none'}).fadeIn(1000);
			$(".banner li").removeClass('active')
			$(".banner li").eq(i).addClass('active')
			pre = i;
		}
	
		function to(){
			i++;
			if(i>$(".banner a img").length-1){ 
				i=0;
			}
			go()
		}

		var set = setInterval(to,2000)

		$(".banner").mouseenter(function(){
			clearInterval(set)
		})
		
		$(".banner").mouseleave(function(){
			clearInterval(set)
			set = setInterval(to,2000)
		})

		$(".banner ul li").mouseleave(function(){
			clearInterval(set)
			set = setInterval(to,2000)
		})
		$(".banner ul li").mouseenter(function(){
			clearInterval(set)
		})