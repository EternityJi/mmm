$(function(){

  var id = getKey("productId");
  var categoryId = getKey("categoryId");
  console.log(id);
  // console.log(categoryId);
  // 获取商品分类的标题
  // 获取分类3级标签的标题 categoryid
 
  $.ajax({
       url:"http://127.0.0.1:9090/api/getcategorybyid",
       type:"get",
       dataType:"json",
       data:{
        categoryid:categoryId
       },
       success:function(info){
           console.log(info);
           $(".product_list .list").html(template("productbyidTpl",info))
           
       }
  })
  render();
  // 获取产品具体信息
  function render(){
    $.ajax({
      url:"http://127.0.0.1:9090/api/getproduct",
      type:"get",
      dataType:"json",
      data:{
        productid:id
      },
      success:function(info){
          console.log(info);
          categoryid = info.result[0].categoryId;
          console.log(categoryid);
          $(".list_content").html(template("getproductTpl",info))
          $(".product_list .third").html(template("thidTitle",info))

      }
      })
  }

  //获取商品评论 http://mmb.ittun.com/api/getproductcom
  $.ajax({
       url:"http://127.0.0.1:9090/api/getproductcom",
       data:{
        productid:id
       },
       dataType:"json",
       success:function(info){
             console.log(info);
             $(".ulComment").html(template("getproductcomTpl",info))
       }
  })
})