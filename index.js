// function sync(){
//     console.log('first');
// }
// sync();
// console.log('second');

// async function abcd(){
//     return "kya hua ";
// }

// abcd();


// async function utility(){
     
// let delhiMausam = new Promise((resolve,reject)=> {
//     setTimeout( ()=>{
//     resolve("Delhi m bhot garmi h");
// },1000);
// });


// let hydMausam = new Promise((resolve,reject)=> {
//     setTimeout( ()=>{
//     resolve("Hyderabad is cool");
// },5000);
// });

// let dM=await delhiMausam;
// let hM =await hydMausam;

// return [dM,hM];
// }




// let meraPromise1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('I am inside promise');
//     },5000);
//     // resolve(234234324);
//     // resolve(2233);
//     reject('Bhaisahab error aaya h');
// });


// meraPromise1.then((value) => {console.log(value)});

// meraPromise1.catch((error) => {console.log("Receive an erroe")});

  
// // let meraPromise2 = new Promise(function(resolve, reject){
// //     setTimeout(function(){
// //         console.log('I am inside promise');
// //     },5000);
// //     // resolve(2233);
// //     // reject('new error aaya  h');
// // });

// console.log('pehla');



// let waadaa1 = new Promise(function(resolve, reject){
//     setTimeout(()=> {
//         console.log('setimeout1 started');
//     },2000);
//     resolve(true);
// })

// let output =waadaa1.then(()=> {
//     let waadaa2 = new Promise(function(resolve,reject){
//        setTimeout(()=> {
//         console.log('setimeout2 started');
//     },3000);
//         resolve('waadaa 2 resolved');
    
// })
// return waadaa2;

// })
// output.then((value) => console.log(value));


// Async function 
// async function abcd(){
//     return 7;
// }


async function utility(){
let delhiMausam = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Delhi m grmi h");
    },5000);
});

let hydiMausam = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hyd is cool");
    },10000);
});

let dM=await delhiMausam;
let hM=await hydiMausam;
return [dM,hM];

}