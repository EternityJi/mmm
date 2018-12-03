$(function(){
    //  getAjax("http://192.168.27.74:9090/api/getcategorytitle",'',".mm_big","categorytitleTpl")
       
   
   
     
    //  getAjax("http://192.168.27.74:9090/api/getcategory",".mm_big .info","category")

   var id;
    $.ajax({
      url: "http://127.0.0.1:9090/api/getcategorytitle",
      type:"get",
      dataType:"json",
        success:function(info){
           console.log(info);
           $(".mm_big").html(template("categorytitleTpl",info));
     }
  })
    $(".mm_big").on("click",".categoryShow",function(){
        id = $(this).data("id");
        // console.log($(".mm_big .categoryUl").parent().parent().eq(id).find(".categoryUl"));
        var ulbox=$(".mm_big .categoryUl").parent().parent().eq(id).find(".categoryUl");
       
         console.log($(this).parent().parent());
         //显示隐藏
         $(this).parent().siblings().toggleClass('hide');

        // console.log(id);
          $.ajax({
            url: "http://127.0.0.1:9090/api/getcategory",
            type:"get",
            dataType:"json",
            data:{
              titleid:id
            },
            success:function(info){
                console.log(info);
                ulbox.html(template("categoryTpl",info));

         }
       })
      
  })

 
 
})