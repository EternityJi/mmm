$(function(){
  $.ajax({
    url:"http://127.0.0.1:9090/api/getinlanddiscount",
    type:"get",
    dataType:"json",
    success:function(info){
        console.log(info);
        $(".ulList").html(template("inlanddiscountTpl",info));
        var $img =$(".ulList li img");
        console.log($img);
    //     $img.attr("src","data-img")
    //     $img.width(529);
    //     $img.height(505);
        //懒加载
        // var arr = info.result;
        // // console.log(arr);
           imgLazy($(".ulList li img"));
        // 懒加载代码******
        // var srcArr=[];
        // $img.each(function(index,v){  
        //     // console.log(v);
        //     var values = v.getAttribute("src");
        //     srcArr.push(values);
        //     srcArr.map(function(e){ 
        //      v.setAttribute("data-original",e);
        //     })
        //     v.setAttribute("src","./images/timg.gif");
        //    });
        // $(".ulList li img").addClass("lazy");
        // $("img.lazy").lazyload({
        //     placeholder: "../images/timg.gif" // 占位的图片
        // });
        // console.log($img);
        //********

    }
  })

 
  
})