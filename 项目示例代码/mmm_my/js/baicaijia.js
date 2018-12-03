$(function(){
    $.ajax({
         url:"http://127.0.0.1:9090/api/getbaicaijiatitle",
         dataType:"json",
         success:function(info){
            //  console.log(info);
              $(".tittleUl").html(template("baicaijiatitleTpl",info)) ;
              var lis = $(".tittleUl li");
              // console.log(lis);
              
              var  value = 0;
              lis.each(function(i,v){
                   value += v.offsetWidth;
                   console.log(v.offsetWidth);
              })
              console.log(value);
              
              //设置ul的宽度
              $(".tittleUl").width(value);
              // 需要在动态计算渲染完成 ul 之后, 再进行初始化
                new IScroll(".mm_search", {
                  scrollX: true,
                  scrollY: false
                });

         }
    })
      render();
      //注册点击事件
      var id;
      $(".mm_search").on("click",".tittleUl a",function(){
        $(this).addClass("current").parent().siblings().find("a").removeClass("current");
        id = $(this).data("id");
        render();
     })
     console.log(id);
     function render(){
      $.ajax({
        url:"http://127.0.0.1:9090/api/getbaicaijiaproduct",
        dataType:"json",
        data:{
         titleid:id || 1
        },
        success:function(info){
            console.log(info);
            $(".mm_recommend .main ul").html(template("baicaijiaproductTpl",info))
        }

   })
    }

    $(".arrow").click(function(){
      $(document).scrollTop(0);
      // console.log(111);
      
    })
     
 
})