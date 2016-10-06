//var <function_name> = function(<function_arguments>){
//    <function_body>
//};
"use strict";

var power = function(base, exponent){
    var result = 1;
    for(var count=0; count<exponent; count++)
        result*=base;
    return result;
};

console.log(power(2,10));

var num = 0;
{
    let num = 10;
    console.log(num);
}
console.log(num);

function square(base){
    return base*base;
}

console.log(square(12));

power = function(base, exponent){
    if(exponent == undefined)
        exponent = 2;
    var result = 1;
    for(var count=0; count<exponent; count++)
        result*=base;
    return result;
};

console.log(power(4));
console.log(power(4,2));

function username(name){
    return function(surname){
        return name+surname;
    };
}

var user = username("Ara");
var complete_name = user("vergas");
console.log(user("vergar"));
console.log(complete_name);