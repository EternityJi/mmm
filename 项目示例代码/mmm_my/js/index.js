$(function(){
  // 菜单栏
     $.ajax({
         url:"http://127.0.0.1:9090/api/getindexmenu",
         type:"get",
         dataType:"json",
         success:function(info){
              console.log(info);
              $(".indexmenu").html(template("indexmenuTpl",info));
              // 最后四个隐藏
              $(".indexmenu .more").parent().nextAll().hide();
               //  点击更多  切换  使之显示隐藏(事件委托 )
         }
         
     })

     $(".indexmenu").on("click",".more",function(){
        $(".indexmenu .more").parent().nextAll().slideToggle();
    })
   //商品信息
    $.ajax({
      url:"http://127.0.0.1:9090/api/getmoneyctrl",
      type:"get",
      dataType:"json",
      success:function(info){
           console.log(info);
           $(".main ul").html(template("moneyctrlTpl",info));
           
      }

  })
  // 点击返回顶部
  $(".mm_footer .returnTop").click(function(){
    $(document).scrollTop(0);
  })
      
 
})