function getAjax(url,param,name,Tpl){
  $.ajax({
    url: url,
    type:"get",
    dataType:"json",
    data: param || '',
    success:function(info){
         console.log(info);
         $(name).html(template(Tpl,info));
         // 最后四个隐藏
       
    }
})
}
 // 点击返回顶部
 $(".mm_footer .returnTop").click(function(){
  $(document).scrollTop(0);
  console.log(111);
  
})
    