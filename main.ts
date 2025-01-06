    //  variables
// console.log("hamza")
// let name1:number=12334
// console.log(name1)
// let name2:boolean= true
// console.log(name2)
    //  operators
// let x=3
// console.log(x/4)
// console.log(x*23)
// let z:number = 2;
// console.log(z=3)
// console.log(z+=1)
// console.log(z/=3)
// let y:number= 6
// console.log(y < 3)
// console.log(y > 4)
// console.log(y <= 1)
// console.log(y >= 3)
// console.log(y == 8)
// console.log(y === 8)
    //    if and else
// let schoolname:string="gulistan"
// let principalname:string="sir asif"
// if(schoolname == "gulistan" && principalname == "sir asif"){
//     console.log("welcome back" schoolname + " " + principalname)
// }
// else{
//     console.log("sorry")
// }
    //  nested (if , else) statement
// let username:string="hamza"
// let pw:string="123"
// let code:string="234"
// if(username== "hamza" && pw== "123"){
//     console.log( "provide user code")
//     if(code=="24"){
//         console.log("welcome back to home" + " " + username)
//     }
//         else{console.log("invalid code")}
// }
// else{
//     console.log("invalid user")
// }
// switch case statement in typescript exp no 01.
// let grade:string="D"
// switch (grade) {
//     case "A":
//         console.log("your grade is excellent")
//         break;
//         case "B":
//         console.log("your grade is good")
//         break;
//         case "C":
//         console.log("you need to work hard")
//         break;
//         case "D":
//         console.log("Failed")
//         break;

//     default:
//         console.log("your grade is invalid")
//         break;
// }
// exp no 02.
// let marks:number=33
// switch(true){
//     case marks>=80 && marks<=100:
//         console.log("your result is grade Aone")
//         break;
//         case marks>=70 && marks<=79:
//         console.log("your result is grade A")
//         break;
//         case marks>=60 && marks<=69:
//         console.log("your result is grade B")
//         break;
//         case marks>=50 && marks<=59:
//         console.log("your result is grade C")
//         break;
//         case marks>=33 && marks<=49:
//         console.log("your result is grade D")
//         break;
//         default{
//             console.log("your result is grade F")
//         }
// }
            //  FUNCTIONS
            // name function
            // function nameFunction(){
            //     let total= 12*2
            //     return total
            // }
            // let name1:number= nameFunction()
            // console.log(name1)
            // function hamza(){
            //     console.log("ameer hamza")
            // }
            // hamza();
//             function hamza():string{
//     let total:string="ameer hamza"
//     return total;
// }
// let data:string=hamza();
// console.log(data)
                // Arrow function
// let arrowFunction:()=>string = ():string => {
//     let data:string="ameer hamza"
//     return data;
// }
// let name1:string=arrowFunction();
// console.log(name1)
// let funcArrow= () => {
//     let total=23+9
//     return total;
// }
// let name1=funcArrow()
// console.log(name1)

    //  shortcut arrow function

// let funcArrow= () => true;
// let name1=funcArrow()
// console.log(name1)

// let arrowfunc=()=>{
//     console.log("ameer hamza")
// }
// let hamza=()=>{
//     arrowfunc()
// }
// hamza()

// let sum=():number =>{
//     return 2+2
// }
// let total=sum();
// console.log(total)

    // Parameters & arguments

    // let sum =(val1:number,val2:number,val3:string="ameer hamza")=>{
    //     console.log(val1*val2)
    //     console.log(val3)
    // }
    // sum(12,24,)

    // union types

    // let mobile: string | number | boolean =" ameer hamza"
    // mobile= "hamza"
    // mobile=123
    // mobile=true

    //  module

    // export let func= () => {
    //     console.log("hello word")
    // }
    // export let namefunc= (val:string) => {
    //     console.log("hello", val)
    // }
//  export let arr:string[] =["hamza,khan , ameer"]
//  Array
//  let arreys:string[] =["hammad, hamza, ameer"]
//  console.log(arreys)
// let arr:(string | number)[] =["hamza, khan, kiran" , 4]
// console.log(arr)
//   Array methods
// normal method
// let arrays=["ameer hamza"]
// console.log(arrays)

// construction method
// let arrays1 = new Array ("summer" , "jann")
// console.log(arrays1)

// by Array method
// let array2 = Array.of ("kiran","jannnnn")
// console.log(array2)
// let username:string="ameer hamza"
// let pw:number=123344
// let code:number=1234
// if(username=="ameer hamza" && pw == 123344){
//     console.log("provide user code")
//     if(code== 1234){
//         console.log("welcome back"," ", username, code)
//     }
//     else{
//         console.log("invalid code")
//     }
// }
// else{
//     console.log("invalid user")
//     }

// let marks:number= 12
// switch (true) {
//     case marks>=80 && marks<=100:
//         console.log("your result is Aone grade")

//         break;
//         case marks>=70 && marks<=79:
//         console.log("your result is A garde")

//         break;
//         case marks>=60 && marks<=69:
//         console.log("your result is B garde")

//         break;
//         case marks>=50 && marks<=59:
//         console.log("your result is C grade")

//         break;
//         case marks>=33 && marks<=49:
//         console.log("your result is D grade")

//         break;

//     default:{
//         console.log("your result is failed")
//     }
//         break;
// }
// function namefunc(){
//     let total:number=4*4
//     return total;
// }
// let hamza= namefunc()
// console.log(hamza)
// let arrowfunc=()=>{
 
//  console.log("fasiha")
// }
// let user =()=>{
//     arrowfunc()
// }
// user()
// export let user=(val:number)=>{
//     console.log(34 , val)
// }
// let array:(string| number)[]=["hamza", "23", "april"]
// console.log(array)
//  nested Arrays
// let arr= ['hamza','khan','jaan',['hero','hero']]
// console.log(arr)
// console.log('index 0', arr[0])
// console.log('index 1', arr[1])
// console.log('index 2', arr[2])
// console.log('index 3', arr[3])
// console.log('nested index 0', arr[3][0])
// console.log('nested index 1', arr[3][1])
// let nestedarr=[arr[3]]
// console.log(nestedarr)

// Array method
// ( 1=push , 2=pop 3=shift 4=unshift )
//  let arr:string[] = ["hamza", "fasiha" , "kiran" , "naaz"]
//  console.log(arr)
// console.log(arr.push("shamshad", "hamza"))
//  console.log(arr)

// let arr:string[]=["hamza", "kiran" , "naaz"]
// console.log(arr)
// // arr.pop()
// console.log(arr.pop())
// console.log(arr)

// let arr:string[]=["hamza", "kiran" , "naaz"]
// console.log(arr)
// // arr.shift()
// console.log(arr.shift())
// console.log(arr)

// let arr:string[]=["hamza", "kiran" , "naaz"]
// console.log(arr)
// // arr.unshift("shamshad")
// console.log(arr.unshift ("shamshad"))
// // console.log(arr)
// let arr:string[]=["hamza", "kiran" , "naaz"]
// let newarr:string[]=arr.slice(0,2)
// console.log(newarr)

// let arr:string[]=["hamza", "kiran" , "naaz"]
// let deletedarr:string[]= arr.splice(0,2, "hamzaaaa", "ahmad")
// console.log(deletedarr)
// console.log(arr)
// export let hamza =(val:string)=>{
// console.log("hello", val)
// }
// let arrey:(string | string[])[] =["hamza", "kiran","naaz" , "fasiha",["hero" ,"heroin" ]]
// console.log(arrey)
// console.log("index 0" , arrey[0])
// console.log("index 1" , arrey[1])
// console.log("index 2" , arrey[2])
// console.log("index 3" , arrey[3])
// console.log("nested index 0" , arrey[4][0])
// console.log("nested index 1" , arrey[4][1])

// let name1:(string | number | number)[]=["hamza","Shamsahd", 20,"baldia town", 2323892327]
// console.log("name",":", name1[0])
// console.log("F Name",":", name1[1])
// console.log("Age",":" ,name1[2])
// console.log("Address",":", name1[3])
// console.log("Phone no",":" ,name1[4])

// let name2:string[]=["hamza", "kiren","naaz"]
// let deletedarrarr:string[]=name2.splice(0,1 ,"shamshad")
// console.log(deletedarrarr)
// console.log(name2)
 
// Make mini Calculator
 
// var prompt = require('prompt-sync')();
// //
// // get input from the user.
// //
// let n1 =parseInt (prompt('enter your first number?  '));
// let n2 =parseInt (prompt('enter your second number?  '));
// let operators=prompt('select your operator (+, -, *, /, ):  ');
// if (operators == "+"){
//     console.log(`the Anwser of ${n1} ${operators} ${n2} = ${n1 + n2}:  `);
// }
// else if (operators == "-"){
//     console.log(`the Anwser of ${n1} ${operators} ${n2} = ${n1 - n2}:  ` );
// }
// else if (operators == "*"){
//     console.log(`the Anwser of ${n1} ${operators} ${n2} = ${n1 * n2}:  ` );
// }
// else if (operators == "/"){
//     console.log(`the Anwser of ${n1} ${operators} ${n2} = ${n1 / n2}:  `);
// }
// else{
//     console.log("plese select your correct operator")
// }
// export{}
// var prompt= require('prompt-sync')();
// //
// // get input from the user.
// //
// let n1 = parseInt(prompt("enter your first number:    "));
// let n2 = parseInt(prompt("enter your second number:    "));
// let operators = prompt("select operator (+, -, *, /, %);    ")
// if(operators == "+"){
//     console.log(`The Answer of ${n1} ${operators} ${n2} = ${n1 + n2}:   `);
// }
// else if(operators == "-"){
//     console.log(`The Answer of ${n1} ${operators} ${n2} = ${n1 - n2}:   `);
// }
// else if(operators == "*"){
//     console.log(`The Answer of ${n1} ${operators} ${n2} = ${n1 * n2}:   `);
// // }
// // else if(operators == "/"){
// //     console.log(`The Answer of ${n1} ${operators} ${n2} = ${n1 / n2}:   `);
// // }
// // else if(operators == "%"){
// //     console.log(`The Answer of ${n1} ${operators} ${n2} = ${n1 % n2}:   `);
// // }
// // else{
// //     console.log("please select your operator in this list (+, -, *, /, %):  ")
// // }
// // export{}
// // var prompt=require("prompt-sync")();
// // //
// // // //get input from the user
// // // //
// // // let n1=parseInt(prompt("enter your first number:   "));
// // // let n2=parseInt(prompt("enter your second number:   "));
// // // let operators=prompt("select your operator (+, -, *, /):   ")
// // // if(operators == "+"){
// // //     console.log(`The Answer Of ${n1} ${operators} ${n2} = ${n1 + n2}.`);
// // // }
// // // else if(operators == "-"){
// // //     console.log(`The Answer Of ${n1} ${operators} ${n2} = ${n1 - n2}.`);
// // // }
// // // else if(operators == "*"){
// // //     console.log(`The Answer Of ${n1} ${operators} ${n2} = ${n1 * n2}.`);
// // // }
// // // else if(operators == "/"){
// // //     console.log(`The Answer Of ${n1} ${operators} ${n2} = ${n1 / n2}.`);
// // // }
// // // else{
// // //     console.log("please select your correct operator in this options (+, -, *, /):")
// // // }
// // // export{};
// // // let username:string="hamza"
// // // let pw:number=1234
// // // let code:number=2124
// // // if(username=="amza" && pw== 1234){
// // // console.log("provide your enter code")
// // // if(code==124){
// // //     console.log("welcome to back", username)
  
// // // }
// // // else{
// // //     console.log("invalid code")
// // // }

// // // }
// // // else{
// // //     console.log("invalid user")
// // // }
// // let marks:number=60
// // switch (true) {
// //     case marks>=80 && marks<=100:
// //     console.log("your result is Aone Grade")
        
// //         break;
// //         case marks>=70 && marks<=79:
// //             console.log("your result is A Grade")
                
// //                 break;
// //                 case marks>=60 && marks<=69:
// //                     console.log("your result is B Grade")
                        
// //                         break;
// //                         case marks>=50 && marks<=59:
// //                             console.log("your result is C Grade")
                                
// //                                 break;
// //                                 case marks>=33 && marks<=49:
// //                                     console.log("your result is D Grade")
                                        
// //                                         break;

// //     default:{
// //         console.log("your result is F grade")
// //     }
// //         break;
// // }
// let grade:string="F"
// switch (grade) {
//     case "A":
//         console.log("your result is excellent")
        
//         break;
//         case "B":
//             console.log("your result is good")
            
//             break;
//             case "C":
//                 console.log("your result is Poor")
                
//                 break;
//                 case "D":
//                     console.log("your result is very poor")
                    
//                     break;
//                     case "F":
//                         console.log("your result is Failed")
                        
//                         break;

//     default:{
//         console.log("this key is not record in my data")
//     }
        
//         break;
// }
// for loop make table 
// for (let i=1; i<=10; i++){
//     let n1= 12
//     let answer= n1*i
// console.log(n1 +" x "+ i + " = " + answer)
// }
// let prompt=require("prompt-sync")();
// let n1 = parseInt(prompt("please enter lines numbers:   "))
// let a:string="";
// for(let i=1; i<=n1; i++){
//     for(let j:number=1; j<=i; j++){
// a += "hamza"
//     }
// a += "\n"
// }
// console.log(a)
// export{};
// let prompt= require('prompt-sync')(0);
// let n:number=parseInt(prompt("please enter number of rows:    "));
// let a:string="";
// for(let i:number=1; i<=n; i++){
//     for(let j:number=1; j<=i; j++){
//         a +="*"
//     }
//     a += "\n"
// }
// console.log(a)
// export{}
// let obj={
//     name:"hamza",
//     fatherName: "Shamshad",
//     Age: 18,
//     Class: 13,
//     salary:()=> 20222,

// }
// for(let key in obj){
//     console.log(key)
// // // }
// // let math=Math.sqrt(100);
// //     console.log(math)
// // let arr=[" hamza", 34, "baldia town"];
// // let [name1,age,Address ]=arr
// // console.log(arr)
// // console.log(age)
// interface objtype{
//     name1:string,
//     age:number,
//     address:string,
//     town:string,
//     khan:string[]
//     city:string,
//     social:{
//         s1:string,
//         s2:string,
//     },
//     func:()=>void
// }
// let obj:objtype={
//     name1:"hamza",
//     age:12,
//     address:"baldia town",
//     town:"baldia",
//     khan:["hamza", "show"],
//     city:"karachi",
//     social:{
//         s1:"tiktok",
//         s2:"youtube",
//     },
//     func:()=>{
//         console.log("hello word")
//     }

// }
// // console.log(obj)
// let prompt=require("prompt-sync")()
// let n1=parseInt(prompt("select your first number:   "));
// let n2=parseInt(prompt("select your second number:   "));
// let operators=prompt("+, -, /, *,");
// if(operators=="+"){
// console.log(`the answer of ${n1} ${operators} ${n2} = ${n1 + n2}`)
// }
// else if(operators=="-"){
//     console.log(`the answer of ${n1} ${operators} ${n2} = ${n1 - n2}`)
//     }
//   else  if(operators=="/"){
//         console.log(`the answer of ${n1} ${operators} ${n2} = ${n1 / n2}`)
//         }
//       else  if(operators=="*"){
//             console.log(`the answer of ${n1} ${operators} ${n2} = ${n1 * n2}`)
//             }
//             else{
//                 console.log("please select operator in this option (+, -, /, *)")
//             }
// export{}
// for(let i=1; i<=10; i++){
//     let n1=2
//     let result=n1*i
//     console.log(n1 + " x " + i + " = " + result)
// }
// let prompt=require("prompt-sync")()
// let n=parseInt(prompt("please put your number of rows;  "))
// let a="";
// for(let i=1; i<=n; i++){
//     for(let j:number=1; j<=i; j++){
//         a+= "*"
//     }
// a += "\n"
// }
// console.log(a)
// export{}
// type idtype=number | string
// type nametype=string
// type agetype=number

// type employtype={
//     emid:idtype
//     emname:nametype
//     emage:agetype
// }

// let id:idtype= 123
// let name1:nametype="ameer hamza"
// let age:agetype=23

// let employ={
//     emid:id,
//     emname:name1,
//     emage:age,

// }
// let employ2:employtype={
//     emid:"123",
//     emname:"hamza",
//     emage:12,

// }
// console.log(employ2)
// interface employtype{
// name1:string,
// age:number,
// color:string,
// }
// interface employ2 extends employtype{
// //     father:string
// //     }
// //     interface employ3 extends employ2{
// //     height:number
// //         }
// interface employtype{
//     name1:string,
// }
// interface employtype{
//     age:number,
//     color:string
// }

// let employ:employtype={
//     name1:"hamza",
//     age: 12,
//     color:"white",
// }
// let employ2:employ2={
//     name1:"hamza",
//     age: 12,
//     color:"white",
//     father:"shamshad",
// }
// let employ3:employ3={
//     name1:"hamza",
//     age: 12,
//     color:"white",
//     father:"shamshad",
//     height: 12
// }
// console.log(employ)
// console.log(employ2)
// console.log(employ3)

// ternary operator
// syntex
// condition or conditions ? code 1 : code 2
//
// let username="hamza"
// let pw= 123
//  username == "hamza" && pw==123
//   ? console.log("you are logged in")
//   : console.log("invalid username or passward")
//   if( username == "hamza" && pw==23){
//     console.log("you are logged in")
//   }
//   else{
//     console.log("invalid username or passward") 
//   }
// let uniontype: string | number
// let literaltype: "hamza" | 123
// literaltype="hamza"
// literaltype=123
// type world="world"
// type gretting=`hello ${world}`;
// let a: gretting;
// a="hello world"

// intersection typescript

// type personaldetails={
//     name:string,
//     father:string,
//     age:number,
// }
// type officialdetails={
//     salary:number,
//     cast:string,
//     color:number

// }
// type person= personaldetails&officialdetails
// let personobj:person={
//     name:"hamza",
//     father:"shamshad",
//     age:23,
//     salary:20000,
//     cast:"mughal",
//     color:131243,

// }
// call back 
// function hello(callback: (name: string) => void, name:string){
// callback(name)
// }
// let arrowfunc = (name:string)=> {
// console.log(`hello ${name}`)
// }


// hello(arrowfunc, "farid")
// enums
// enum students{
//     marcidies=12,farrai,lambourgini,oddi
// }
// const student:string=students[13]
// console.log(student)

// let arr=['hamza','hina']
// let arr2=['kiran']
// let arr3=['shaan']
// let res=arr.join ('  hira  ')
// console.log(res)
// let a = 4
// let b= 3
// let func=()=> console.log("hello world") 
// a==4 && b==3 && func();
// let arr:[string , number, boolean, {name:string}?]=["hamza",4, true]
// arr.push({name:""})
// console.log(arr);
// 
let func=async()=>{
    let datafetch= await fetch("https://jsonplaceholder.typicode.com/posts")
    let res=await datafetch.json();
    console.log(res)
}
func()
