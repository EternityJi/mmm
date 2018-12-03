       function getKey(k){

              var str = location.search;
              //解析成中文
              str = decodeURI(str);
              //"?categoryId=0"
              //去掉第一个?号
              str = str.slice(1); // "key=匡威鹏&name=pp&age=18&desc=帅"

              // split 将字符串分割数组
              var arr = str.split("&"); // ["key=匡威鹏", "name=pp", "age=18", "desc=帅"]
            
              var obj = {};
            
              // 遍历数组, 取出每个键和值
              arr.forEach(function (v, i) { // v  "age=18"
                var key = v.split("=")[0]; // 键 age
                var value = v.split("=")[1]; // 值 18
            
                obj[key] = value;
              })
              return obj[ k ];
            
       }         
             
  