var fs = require('fs');

//output.txt에는 개행문자가 들어가있어야 한다
//그래야 해당 챌린지에 의미가 생김
fs.readFile('output.txt',function(err,data){
   if(err)
       throw err;
   var array = data.toString().split("\n");
   for(var i in array){
       console.log(array[i]);
   }
});
