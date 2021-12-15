const bcrypt = require("bcryptjs");
let user ={
    name:"hari",
    email:"har@7898365",
    password:"8236586972"
}
let emp= bcrypt.genSaltSync(10);
let newpassword= bcrypt.hashSync(user.password,emp);
let new_user={...user,password:newpassword}
console.log(new_user)
let result=bcrypt.compareSync(user.password,new_user.password);
if (result){
    console.log("login successful");
    }
    else{
        console.log("login failed");
    }