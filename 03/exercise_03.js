function countBs(beans, letter){
    if(letter == undefined)
        letter = "B";
    count=0;
    for(i=0; i<beans.length; i++){
        if(beans.charAt(i)==letter)
            count++;
    }
    return count;
}

console.log(countBs("BarraBasaBa"));
console.log(countBs("BarraBasaBa", "a"));