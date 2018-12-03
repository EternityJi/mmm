$(function(){
  var id = getKey("couponId");
    console.log(id);
     render();
     console.log($(".main .moneyctrlUl"));
     
  
     function render(){
         
          $.ajax({
               url:"http://127.0.0.1:9090/api/getcouponproduct",
               type:"get",
               dataType:"json",
               data:{
                couponid:id
               },
               success:function(info){
               //    console.log(info);
                  $(".main ul").html(template("couponTpl",info));
               


               }

          })

     }
     var num ;
     var nowA;
     var nowImg;
     $(".main .moneyctrlUl").on("click","a",function(){
          // console.log(1111);
          // console.log($(this));
          
          var imgB = $(this).data("img");
          console.log(imgB);
          $(".Carousel").css("display","block");
          $(".Carousel .inner .innerimg").html(imgB);
          var num = $(this).data("num")
          // console.log(num );
          $(".inner .right").click(function(){
                 console.log($(".moneyctrlUl li").length);
                 
               if(num>=$(".moneyctrlUl li").length){
                      return;
               }
               console.log(num);
                num++;
               nowA = $("a[data-num='"+num+"']");
               nowImg = nowA.data("img");
              $(".Carousel .inner .innerimg").html(nowImg);
       })
       $(".inner .left").click(function(){
              if(num==0){
                return;
              }
              num--;
              console.log(num);
              nowA = $("a[data-num='"+num+"']");
              nowImg = nowA.data("img");
              $(".Carousel .inner .innerimg").html(nowImg);
       }) 

     })
  
   
  

      
  
})