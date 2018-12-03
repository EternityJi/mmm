$(function(){
   
  $.ajax({
       url:"http://127.0.0.1:9090/api/getbrandtitle",
       type:"get",
       dataType:"json",
       success:function(info){
           console.log(info);
           $(".box").html(template("categoryTpl",info));
       }

  })

 
})