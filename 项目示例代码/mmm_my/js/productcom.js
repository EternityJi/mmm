$(function(){
  var id = getKey("productId");
  console.log(id);
  $.ajax({
       url:"http://127.0.0.1:9090/api/getproductcom",
       type:"get",
       data:{
        productid:id
       },
      success:function(info){
          console.log(info);
          $(".main").html(template("commontTpl",info))
      }

  })
 
})