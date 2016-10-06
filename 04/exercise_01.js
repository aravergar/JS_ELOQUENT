function range(start, end, step){
//    if (step == undefined)
//        step = 1;
    if (arguments.length != 3 || step == 0)
        step = 1;
    result = [];
    if(step>0)
        for(i=start; i<=end; i+=step){
            result.push(i);
        }
    else
        for(i=start; i>=end; i+=step){
            result.push(i);
        }
    return result;
}

function sum(array){
    result = 0;
    for(i=0; i<array.length; i++){
        result+=array[i];
    }
    return result;
}

console.log(range(1,10,2));
console.log(sum(range(1,10,2)));
console.log(range(5,2,-1));
