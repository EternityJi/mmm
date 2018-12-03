$(function(){
   //商品信息
   var id= getKey("productId");
   console.log(id);
    $.ajax({
      url:"http://127.0.0.1:9090/api/getmoneyctrlproduct",
      type:"get",
      data:{
        productid:id
      },
      dataType:"json",
      success:function(info){
           console.log(info);
           $(".mm_main").html(template("indexproductTpl",info));
           
      }

  })
  

      
 
})