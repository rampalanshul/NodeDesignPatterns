const fs = require('fs')

fs.readFile('./Data/556353260_Sep2018.xls','UTF-8',(err,data)=>{
    if(err) 
      console.log(err);
    console.log(data.toString());
})

// console.log('Started Reading File')