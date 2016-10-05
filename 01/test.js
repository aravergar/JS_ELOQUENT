/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global NaN */

//test = new Date();
//month = test.getMonth();
//month = (month * 1) + 1;
//day = test.getDate();
//year = test.getFullYear();
//console.log(" ",month,"/",day,"/",year," ");
//

console.log(null || "user");

console.log("Karl" || "user");

var question = 5*2 == 10 && 10-7 == 3;
console.log("\"\" == false " + ("" == false));
console.log("\"\" === false " + ("" === false));
console.log("shortcircuit " + (false && (5*2 == 10 && 10-7 == 3)));
console.log("conditional " + (5>=2 ? false : true));