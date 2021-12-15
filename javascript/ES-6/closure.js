function cart(){
    var counter= 0;

function incrcounter() {
    counter+=1;
    console.log("hello gd morning" +counter);
}
function decrcounter(){
    counter-=1;
    console.log("hari"-counter)
}
function getcounter(){
      return counter;
}
return { incr: incrcounter,decr:decrcounter,count:getcounter};
}
let x=cart();
console.log(x);
x.incr();
x.decr();
x.incr();
x.incr();
console.log(x.count());
x.decr();


