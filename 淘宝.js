// JavaScript Document
$(function(){
	
  //导航条
	$(function(){
		 function tb_nav(obj,show_box){
			$(obj).mouseover(function(){
			
				$(this).find(show_box).show();
				
				}).mouseout(function(){
					
					$(this).find(show_box).hide();
					
					});
			
		 }
		 
		 tb_nav($("#tb_cover div.nav_box"),"div.nav_show_box");
		 tb_nav($("#tb_cover div.nav_box"),"div.inter_nav");
	});

  //搜索框切换
  $(function(){
	  
	     var aBtn=$(".tb_search_btn li a"); 
	     var search_box=$(".tb_btn_search");	
		 aBtn.eq(0).click(function(){
			_this=this;
			search_active(_this,"active","active_mao");
			  });
		 aBtn.eq(2).click(function(){
			_this=this;
			search_active(_this,"active","active_mao");
			  });
		  	  				  	  
		 aBtn.eq(1).click(function(){
			_this=this; 
			search_active(_this,"active_mao","active")

			  });	
		function search_active(_attr,sClass,no_sClass){
		
			aBtn.attr("class","");  
			$(_attr).attr("class",sClass);  
			search_box.addClass(sClass).removeClass(no_sClass);
			$(".button_box a").attr("class",sClass);
			$(".button_box").addClass("class",sClass).removeClass(no_sClass);
		
			}		  
	  
	  });	
	 //搜索框焦点事件
	 
	 $(function(){
		 
		 var tb_main_Input=$(".input_box input")
		 
		 
		 $(".input_box input").focus(function(){
			 if(tb_main_Input.val()=="10月第一镰新米"){
			 	$(this).val("");	
			 }
	     }).blur(function(){
			if(tb_main_Input.val()==""){
			 	$(this).val("10月第一镰新米");
			 } 
		})
		 
	 });
	 
	 
	 //二维码关闭
	 $(function(){
		 
		 $("#Ma_tb div span").click(function(){
			 
			   $("#Ma_tb").hide(500);
			 
			 }); 
		 
		 });
	
	//详情导航
	
	 $(function(){
		 
		var oTab=$("#tb_shop_header .tipe_wrap"); 
		var oTab_wrap=$(".dis_ad .dis_shopbox");
	
		oTab.mouseover(function(){
		   
		   oTab_wrap.eq($(this).index()).show();	
			
			}).mouseout(function(){
			
					
				oTab_wrap.eq($(this).index()).hide()	
			
		}) 
	   oTab_wrap.mouseover(function(){
		  $(this).show();	
			}).mouseout(function(){
				
		  $(this).hide();		
				}); 		
		 
		 
		 });

     //轮播图		
	 
	   $(function(){
		  
		 var Parent=$("div.img_box");
		 var oDiv_mb=Parent.find("div.img_ball_show.mb");
		 var oDiv_taken=Parent.find("div.img_ball_show.taken");
		 
		 ball_show(oDiv_mb,4000);
		 ball_show(oDiv_taken,5000);
		 
		 function ball_show(oParent,_time){ 
			 
			var now=0;
			var $oUl=oParent.find("ul"); 	
			var $oLi=$oUl.find("li");
			var onOff=true; 
			var $_li=oParent.find("ol").children("li");
			var timer=null;
			oParent.mouseover(function(){
				$(this).find("a.prev,a.next").stop().animate({opacity:1});
				
				}).mouseout(function(){
				$(this).find("a.prev,a.next").stop().animate({opacity:0});
				
				})		
			
			
			oParent.find("a.prev").click(function(){
				
				if(!onOff){return;}
				onOff=false;	
				now--;
				if(now<0){
				   now=($_li.length-1);	
					}
				 normal_click()
			});
			
			oParent.find(".next").click(function(){	
				
				if(!onOff){return;}
				onOff=false;	
				now++;
				if(now==$_li.length){
				 now=0;	
					}
				normal_click()
				});
		   function normal_click(){
				if(!$oUl.is(":animated")){	
					$oUl.animate({
						left:-$oLi.eq(0).width()*now
					},function(){		   
				   onOff=true;		
				   });
				}
				clear();
			}		
	
		   $_li.click(function(){
				now=$(this).index();
				timer_click();
			});
	
			timer=setInterval(k_click,_time);	
			oParent.mouseover(function(){
				 clearInterval(timer);	
				});
			oParent.mouseout(function(){
			  timer=setInterval(k_click,_time);
				});	
		
			function clear(){		
				$_li.attr("class","")
				$_li.eq(now).attr("class","active");	
				}	
			function k_click(){
				now++;
				if(now==$_li.length){
				 now=0;	
				}
				timer_click();
				}
			function timer_click(){
			   if(!$oUl.is(":animated")){	  
				$oUl.animate({
				left:-($oLi.eq(0).width()*now)
				});
				}
				clear();				
				}						

			 } 
   
		   
		   }); 	 
	<!--淘宝头条-->	   
		$(function(){
			
		setInterval(taken,4000);	
		
		var now=0;	
		function taken(){	
			
			now++;
			if(now==$(".scroll_box ul li").length){
			   now=0;	
			}
		 	$(".scroll_box ul").animate({
			top:-($(".scroll_box ul li").height()*now)
			})
			
			}
			
			})
		
			   
	<!--左边选项卡-->
		  $(function(){
			  
			  $(".red_head_left_tab ul li").mouseover(function(){
				  
				 $(".red_head_left_tab div").hide();
				 $(".red_head_left_tab div").eq($(this).index()).show(); 
	        })
		  })
     <!--下方赵薇-->
	 
	   $(function(){
		   
		   $(".tb_hot_point_img").find("span.btn_top").click(function(){
			 
			  $(".tb_hot_point_img").find("ul").animate({top:-45});
			  $(this).addClass("active").siblings().removeClass("active");
			   
			   })
		   $(".tb_hot_point_img").find("span.btn_bottom").click(function(){
			 
			  $(".tb_hot_point_img").find("ul").animate({top:0})
			   $(this).addClass("active").siblings().removeClass("active");
			   
			   })	   
		   
		   
		   });	
		/*下方商品区弹出*/   
		
		$(function(){
		  
		 var timer=null;
		  var $togo= $("#tb_ad_body").find(".tb_shoe_title").children("a.tb_shoe_togo")
	
		  $("#tb_ad_body").hover(function(){
			  clearTimeout(timer);
			 if(! $togo.is(":animated")){  
			  $togo.show().animate({
				  opacity:1 
				  },400);
			 }

		 },function(){ 
			 
			timer=setTimeout(function(){ 
			 if(! $togo.is(":animated")){
				  $togo.animate({
					  opacity:0
					  },400).hide();  
					  
			 }
			},500);
			 
			 })	
				
			
		});
	/*悬浮框*/
	
	    $(function(){
			
		  $(window).scroll(function(){
			if($(window).scrollTop()>50){
			 $("#fix_box").show(); 
			}else{
				
			$("#fix_box").hide(); 	
				
			}
			
		  })	
		});
		
  /*移入显示边框*/			
		$(function(){
			
			var _tb_market=$(".tb_ad_body_market")
			
			_tb_market.hover(function(ev){
			
				clearTimeout($(this).timer);
				
				var target=ev.target||ev.srcElement;
			     $(this).css("borderColor","#f40").siblings("div.hr").css("background","#f40"); 
				$(this).find(".tb_shoe_togo").show().animate({opacity:1})
				
			
				},function(ev){
				
				
				var target=ev.target||ev.srcElement;
				var _togo=$(this).find(".tb_shoe_togo");
				 $(this).css("borderColor","#ccc").siblings("div.hr").css("background","#ccc");
				$(this).timer=setTimeout(function(){
						_togo.hide().animate({opacity:0})
						},1000);
				
				});
			
			
			});	
			
<!--生活服务选项卡-->			

  $(function(){
	  
	  var _Li=$(".tab_wedding .tab_head ul li")
	    _Li.click(function(){
		  
		  _Li.attr("class","");
		   $(this).attr("class","active");
		  $(".tab_img_wrap_bottom").hide();
		  $(".tab_img_wrap_bottom").eq($(this).index()).show();
		  
		  })

	  
	  })
	
<!--二维码侧边栏-->	

  $(function(){
	  
	  $(".ali_app ul li").hover(function(){
		  
		  $(this).find("div.two_img").show();
		  
		  },function(){
			  
		   $(this).find("div.two_img").hide();	
			  
			  })

	  
	  });
	  
<!--侧边栏-->	

   $(function(){
	   
	   $(".shop_area_div").hover(function(ev){
		   
		   $(this).find("div.tb_dis_tab").height(0);
		   $(this).find("div.tb_dis_tab").stop(true).show().animate({height:30});

			ev.stopPropagation();
		   },function(ev){
			   
		  $(this).find("div.tb_dis_tab").stop(true).hide().animate({height:0});
			   
			 ev.stopPropagation();
			 
			   });

	   
	   })	  
	  	
	  
	  			
		     
	
	
});


 
			/*  $(this).css("borderColor","#f40").siblings("div.hr").css("background","#f40");
			  if(!$(this).find(".tb_shoe_togo").is(":animated")){
				  
			  $(this).find(".tb_shoe_togo").show().animate({opacity:1});	
				
			  }
			  
			   
			   
			   
			    var target=ev.target||ev.srcElement;		
					
				 $(this).css("borderColor","#ccc").siblings("div.hr").css("background","#ccc");
				 var _togo=$(this).find(".tb_shoe_togo")
					
				 if(!_togo.is(":animated")){  			
				 _togo.hide().animate({opacity:0});
				 }
			  */