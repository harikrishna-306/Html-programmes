class Bank{
    min_Bal=500;
    amount=5467;
constructor(a,b,c,d,e,f,g,h){
    this.house_no=a;
    this.city=b;
    this.state=c;
     }
}
class saving_Acc extends bank{
    constructor (a,b,c,d,e,f,g,h){
        super(a,b,c);
        this.name=d;
        this.amount=e;
        this.number=f;
        this.some=g;
        this.hari=h;
    }
}
let s1=new saving_Acc(186 "ka","ban","hari krishna",123,9095);
console.log(s1);
class salary_Acc extends saving_Acc{
    constructor(a,b,c,d,e,f,g,h){
        super(a,b,c,d,e,f,g,h);
    }
}
let s2 =new saving_Acc(186 "ka","ban","hari krishna",638,6983,3732,hari);
console.log(s2);