$(function(){
 var id = getKey("brandTitleId");
 console.log(id);
  $.ajax({
    url:"http://127.0.0.1:9090/api/getbrand",
    type:"get",
    dataType:"json",
    data:{
      brandtitleid:id
    },
      success:function(info){
         console.log(info);
         $(".sale ul").html(template("brandTpl",info));
         var lis = $(".sale ul li");
         console.log(lis);
         lis.each(function(i,v){
            //  console.log(i);
             if(i === 0){
              $(v).children().find(".quare").css("background-color","pink"); 
             }
             if(i === 1){
              $(v).children().find(".quare").css("background-color","orange"); 
             }
             if(i === 2){
              $(v).children().find(".quare").css("background-color","skyblue"); 
             }
         })
         
   }
})
})