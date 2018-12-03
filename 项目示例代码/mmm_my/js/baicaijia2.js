$(function(){
  $.ajax({
       url:"http://127.0.0.1:9090/api/getbaicaijiatitle",
       dataType:"json",
       success:function(info){
          //  console.log(info);
            $(".mm_search ul").html(template("baicaijiatitleTpl",info)) ;
            // var lis = $(".tittleUl li");
            // // console.log(lis);
            
            // var  value = 0;
            // lis.each(function(i,v){
            //      value += v.offsetWidth;
            //      console.log(v.offsetWidth);
            // })
            // console.log(value);
            
            // //设置ul的宽度
            // $(".tittleUl").width(value);
            // // 需要在动态计算渲染完成 ul 之后, 再进行初始化
            //   new IScroll(".mm_search", {
            //     scrollX: true,
            //     scrollY: false
            //   });
            // options = {
            //   scrollY: false, //是否竖向滚动
            //   scrollX: true, //是否横向滚动
            //   startX: 0, //初始化时滚动至x
            //   startY: 0, //初始化时滚动至y
            //   indicators: true, //是否显示滚动条
            //   deceleration:0.0006, //阻尼系数,系数越小滑动越灵敏
            //   bounce: true //是否启用回弹
            //  }
            mui('.mui-scroll-wrapper').scroll({
              deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
              indicators: false, //是否显示滚动条
            });
           

       }
  })
  
})
    // render();
    //注册点击事件
//     var id;
//     $(".mm_search").on("click",".tittleUl a",function(){
//       $(this).addClass("current").parent().siblings().find("a").removeClass("current");
//       id = $(this).data("id");
//       render();
//    })
//    console.log(id);
//    function render(){
//     $.ajax({
//       url:"http://127.0.0.1:9090/api/getbaicaijiaproduct",
//       dataType:"json",
//       data:{
//        titleid:id || 1
//       },
//       success:function(info){
//           console.log(info);
//           $(".mm_recommend .main ul").html(template("baicaijiaproductTpl",info))
//       }

//  })
  

  // $(".arrow").click(function(){
  //   $(document).scrollTop(0);
  //   // console.log(111);
    
  // })
   

// })