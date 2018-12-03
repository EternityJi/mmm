$(function(){
    var id = getKey("productId");
    console.log(id);
    $.ajax({
         url:"http://127.0.0.1:9090/api/getmoneyctrlproduct",
         type:"get",
         data:{
          productid:id
         },
        success:function(info){
            console.log(info);
            $(".mm_main").html(template("discountTpl",info))
        }

    })
    $(".mm_footer .returnTop").click(function(){
      $(document).scrollTop(0);
    })
})