function isEven(n){
    if(n<0)
        n*=-1;
    if(n==0)
        return "even";
    else if(n==1)
        return "odd";
    else
        return isEven(n-2);
}

console.log(isEven(-28));