$(function(){
        //商品列表渲染  http://mmb.ittun.com/api/getmoneyctrl
        //作用描述	根据页数用来获取省钱控的每一页的商品列表信息
        //一进入页面  就进行渲染
        
        var currentPage = 1;//当前页
        var Allsize ;//所有的页数
        render();
        function render(){
            $.ajax({
            url:"http://127.0.0.1:9090/api/getmoneyctrl",
            type:"get",
            data:{
                pageid:currentPage,
            },
            success:function(info){
            //    console.log($(".moneyctrlUl li img"));
            //  imgLazy($(".moneyctrlUl li img"))
               console.log(info);
            //    console.log($(".main .pic img"));
               Allsize =  Math.ceil(info.totalCount/info.pagesize);
                // console.log(Math.ceil(info.totalCount/info.pagesize));
                $(".main ul").html(template("moneyctrlTpl",info));
                $(".outside .inner").html(template("PageTpl",info));
                // console.log(Allsize);
                // var value = $(".page option").text(1/Allsize);
                // console.log(value);
                for(var i = 0; i<=Allsize;i++ ){
                    var li = document.createElement("li");
                    // currentPage = i;
                    li.innerText= i+"/"+Allsize;
                    $(".inner").append(li);
                    li.style.borderBottom="1px solid #ccc";
                }
            } 
        }) 
    } 
        //动态创建li
        //   console.log(Allsize);
            //显示隐藏
             $(".inner").hide();
             $(".outside").click(function(){ 
                 var values=[];
                  $(".inner li").each(function(i,v){
                    //   console.log($(v));
                      if($(v).text()==$(".outside p").text()){
                        $(v).css("backgroundColor","skyblue"); 
                      }
                  })
                $(".inner").toggle();
             } )
            //事件委托遍历ul
            $(".inner").on("click","li",function(){
                  
                  $(".outside p").text($(this).text());
                  $(this).addClass("now").siblings().removeClass("now");
                  console.log($(".outside p").text());
                //   14/15
                  currentPage = $(".outside p").text().replace("/15","");
            //    console.log(currentPage);
                  render();
            })
            $(".page .pageUp").click(function(){
                // value--; 
                // if(currentPage>0)
                // {
                //     $(".pageUp").css('background-color',"#ccc");
                // }
               if(currentPage<=0){
                    // console.log( $(".pageUp .up"));
                    // $(".pageUp").css('background-color',"red");
                    return false;
                }
              
                currentPage--;
                console.log(currentPage);
                $(".outside p").text(currentPage+"/"+Allsize);
                // console.log(currentPage);
                render()
                // $(".page option").text(value);
            })
            $(".page .pageDown").click(function(){
                if(currentPage>=Allsize){
                    $(".pageDown").css('background-color',"red");
                    return false;
                }
            currentPage++; 
            console.log(currentPage);
            $(".outside p").text(currentPage+"/"+Allsize);
            render();
    
            })
     

})
  
  

