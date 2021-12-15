let sum = 0;
const number = 153;

let temp = number;
while(temp>0){
    let remainder=temp%10;
    sum=sum+remainder*remainder*remainder;
    temp=parseInt(temp/10);
}
if(temp==0){
    console.log("arm number ");
}
else{
    console.log("not arm number");
}
