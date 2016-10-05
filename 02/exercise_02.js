for(val=0; val<=100; val++){
    if(val%3==0 && val%5==0)
        console.log("FizzBuzz");
    if(val%3==0)
        console.log("Fizz");
    else{
        if(val%5==0)
            console.log("Buzz");
        else
            console.log(val);
    }
}