// var $img = $(".mm_main .pic img");
function imgLazy(imgName){
  // console.log($img);
  var values = [];
  imgName.each(function(index,v){
      // console.log(v.getAttribute("src"));
      values.push(v.getAttribute("src"));
      values.map(function(e){
        v.setAttribute("data-original",e);
      })
      v.setAttribute("src","./images/timg.gif");
      console.log(v);
  })
  imgName.addClass("lazy");
  $("img.lazy").lazyload({
    placeholder: "../images/timg.gif",  // 占位的图片     
  });
}