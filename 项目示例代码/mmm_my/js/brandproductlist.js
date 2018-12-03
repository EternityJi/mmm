$(function(){
 
  var id = getKey("brandTitleId");
  console.log(id);
  
  render();
  function render(){
 
   $.ajax({
     url:"http://127.0.0.1:9090/api/getbrandproductlist",
     type:"get",
     data:{
      brandtitleid:id,
      pagesize:4

     },
     success:function(info){
       console.log(info);
      //  var Allsize =  Math.ceil(info.totalCount/info.pagesize);
       // console.log(Math.ceil(info.totalCount/info.pagesize));
       $(".main ul").html(template("moneyctrlTpl",info));
    //    var value = $(".page option").text(1/Allsize);
    
    //    $(".page .pageUp").click(function(){
    //        value--;  
    //        currentPage--;
    //        render()
    //        $(".page option").text(value);
    //    })
    //    $(".page .pageDown").click(function(){
    //      value++; 
    //      currentPage++; 
    //      // console.log(value);
    //      console.log(value);
    //      render();
    //      $(".page option").text(value);
    //  })

       
       
       
     }

 }) 
}
})