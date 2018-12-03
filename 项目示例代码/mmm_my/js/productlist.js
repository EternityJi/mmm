$(function(){
      var id = getKey("categoryId");
      var category = getKey("category");
    //   console.log(id,category);
  
  $.ajax({
       url:"http://127.0.0.1:9090/api/getcategorybyid",
       type:"get",
       dataType:"json",
       data:{
        categoryid:id
       },
       success:function(info){
           console.log(info);
           console.log( $(".product_list .list"));
           var htmlStr = template("categorybyidTpl",info)
           $(".product_list .list").html(htmlStr);
       }

  })

  //渲染商品列表  categoryid  pageid :  页数id 
  var currentPage = 1;
  $.ajax({
    url:"http://127.0.0.1:9090/api/getproductlist",
    type:"get",
    dataType:"json",
    data:{
     categoryid:id,
     pageid:currentPage,
     category:category
    },
    success:function(info){
        console.log(info);
        
        var htmlStr = template("productlistTpl",info)
        $(".product_main .ul_content").html(htmlStr);
         
    }

   }) 


})