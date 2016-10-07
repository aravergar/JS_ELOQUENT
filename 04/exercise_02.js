function reverseArray(array){
    result = [];
    length = array.length;
    for(i=0; i<length; i++){
        result.push(array[length-i-1]);
    }
    return result;
}

function reverseArrayInPlace(array){
    var val;
    length = array.length;
    for(i=0; i<length/2; i++){
        val = array[i];
        array[i] = array[length-i-1];
        array[length-i-1] = val;
    }
}

var a = [0,1,2,3,4,5];
console.log(a);
console.log(reverseArray(a));
console.log(a);

reverseArrayInPlace(a);
console.log(a);