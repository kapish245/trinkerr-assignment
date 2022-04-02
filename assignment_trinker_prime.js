function binaryDecimalConversion(n){
    n=n+"";
    let result=0;
    let power=0;
    for(i =0;i<n.length;i++){
        let number = +n[i];
        let exponent = 2**power;
        result = result+(exponent*number);
        power++;
    }
    return result;
}

function primeNumberInBetween(n1,n2){
let answer=[];
 n1 = binaryDecimalConversion(n1);
 n2 = binaryDecimalConversion(n2);
 for(i=n1;i<=n2;i++){
     let result =isPrime(i);
     if(result){
        answer.push(i);
     }
     
 }

console.log(answer);

}


function isPrime(n){
    let i=2;
    if(n===0 || n===1){
        return false;
    }
    while(i<n){
        if(n%i==0){
            return false;
        }
        i++;
    }
    return true;
}


primeNumberInBetween(101,11111)