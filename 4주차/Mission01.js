var fs = require('fs');

fs.readFile('output.txt',function(err,data){
   if(err)
       throw err;
   var array = data.toString().split("\n");
   for(var i in array){
       console.log(array[i]);
   }
});
