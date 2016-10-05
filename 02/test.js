var num = 30;
num -= 10;
console.log("value of num is", num);

number=0;
while(number<=10){
    console.log("number", number);
    number+=2;
}

for(num=1024; num>1; num/=2)
    console.log(num);

for(num=0; num<10; num++){
    if(num%2==0)
        continue;
    console.log("num", num);
}