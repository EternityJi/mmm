$(function(){
     render();
      function render(){
         $.ajax({
             url:"http://127.0.0.1:9090/api/getcoupon",
             dataType:"json",
             success:function(info){
                 console.log(info);
                 $(".navUl").html(template("couponTpl",info))
             }
         })
      }
})