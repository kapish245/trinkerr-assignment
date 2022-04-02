const fs = require('fs');

function handlingFileInput(input){
    for(i=0;i<input.length;i++){
        let temp = input[i];
        if(isPresent(temp)){
            temp=temp.slice()
            fs.writeFile('./file.txt',temp,()=>{
                console.log("its done");
            });
        }else{
            //if not present then write in file
        }
    }
   
    return;
}

function isPresent(temp){
    fs.readFile("./file.txt",{encoding:"utf8"},(err,data)=>{
        if(err){
            throw new Error(err);
        }
        data=data.split("\n")
        let result = data.filter((data)=>{
            return data===temp
        })
        if(result){
            console.log("presnt")
        }
        else{
            console.log("no")
        }
    })
}

handlingFileInput(["kapish_assignment"])
