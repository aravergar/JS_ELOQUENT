function arrayToList(array){
    var list = null;
    length = array.length;
    for(i=length-1; i>=0; i--){
        list = {
            value: array[i],
            rest: list
        };
    }
    return list;
}

function listToArray(list){
    var array = [];
    var index = list;
    while(index != null){
        array.push(index.value);
        index = index.rest;
    }
    return array;
}

function prepend(list, element){
    var result = {
        value: element,
        rest: list
    };
    return result;
}

function nth(list, index){
    if(index==0){
        return list.value;
    }
    else{
        if(list.rest==null)
            return undefined;
        else
            return nth(list.rest, index-1);
    }
}

a = [0,1,2,3,4];
b = arrayToList(a);
console.log(a);
console.log(b);
b = prepend(b, 10);
console.log(listToArray(b));
console.log(nth(b,5));