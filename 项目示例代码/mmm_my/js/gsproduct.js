$(function(){
  // 京东

  var shopId;
  var areaid;
  productRender();
  $(".jd").click(function(e){
      $("#shop ul").slideToggle();
      renderJd();
     
    
    })

    $(".hb").click(function(e){
      renderhb();
    $("#area ul").slideToggle();
 
   })

    $("#shop").on("click","a",function(){
      $(".jd").text($(this).text());
      $("#shop ul").hide();
      shopId =$(this).data("shopid");
      productRender()

     })
    
     
     
      
 
   $("#area").on("click","a",function(){
    $(".hb").text($(this).text());
    $("#area ul").hide();
    // console.log();
    areaid = $(this).data("areaid")
    productRender()
   })
 


  // 京东
    function  renderJd(){
      $.ajax({
        url:"http://127.0.0.1:9090/api/getgsshop",
        type:"get",
        dataType:"json",
        success:function(info){
            // console.log(info);
            $("#shop ul").html(template("shopTpl",info))
         }
      })
    }
  // 华北
    function renderhb(){
      $.ajax({
        url:"http://127.0.0.1:9090/api/getgsshoparea",
        type:"get",
        dataType:"json",
        success:function(info){
            // console.log(info);
            $("#area ul").html(template("areaTpl",info))
        }
      })
    }

   //产品渲染
  //  var values = [];
    function productRender(){
      $.ajax({
        url:"http://127.0.0.1:9090/api/getgsproduct",
        type:"get",
        dataType:"json",
        data:{
          shopid:shopId || 1,
          areaid:areaid || 1
        },
        success:function(info){
            console.log(info);
            $(".mm_main .ulmain").html(template("productTpl",info));
            var $img = $(".mm_main .pic img");
            imgLazy($img);
            // console.log($img);
            // $img.each(function(index,v){
            //     // console.log(v.getAttribute("src"));
            //     values.push(v.getAttribute("src"));
            //     values.map(function(e){
            //       v.setAttribute("data-original",e);
            //     })
            //     v.setAttribute("src","./images/timg.gif");
            //     console.log(v);
            // })
            // $(".mm_main .pic img").addClass("lazy");
            // $("img.lazy").lazyload({
            //   placeholder: "../images/timg.gif",  // 占位的图片     
            // });
           
            
            
        }
      })
    }

  })
  







 

