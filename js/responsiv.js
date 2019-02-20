$(function (){
   $('body > header .nav_three .nav_bar .nav_bar_item').mouseover(function (){
       $('body > header .nav_three .nav_bar .nav_bar_item .sub_menu:visible').hide();
      $(this).find('.sub_menu').show(); 
   });
   
   $('#nav_bar_menu_icon img').click(function (){
       $('#mobile_nav_effect_backgroud').show();
       $('body > header .nav_three').show(); 
   });
   $('#mobile_nav_effect_backgroud').click(function (){
       $('body > header .nav_two .search_box:visible').hide();
       $('body > header .nav_three:visible').hide();
       $('#mobile_nav_effect_backgroud').hide(); 
   });
   
   $('body > header .nav_two > div > div:last-child .search_icon_mobile').click(function (){
       $('#mobile_nav_effect_backgroud').show();
       $('body > header .nav_two .search_box').show(); 
   });
});