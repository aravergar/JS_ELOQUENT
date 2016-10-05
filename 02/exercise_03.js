var size = 7;
var grid = "";
var row = 1;
var square = size*size;
for(i=1; i<=square; i++){
    if((size%2==0) && (row%2==0)){
        if(i%2==0)  grid+=" ";
        else
            grid+="#";
    }
    else{
        if(i%2==0)  grid+="#";
        else
            grid+=" ";
    }
    if(i%size == 0 && i!=square) grid+="\n";
    if(i%size == 0)   row++;
}
console.log(grid);