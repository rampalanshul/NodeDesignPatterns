// Working with scope and this binding

// function delayedGreeter(msg){
//     this.msg = msg;
// }

// delayedGreeter.prototype.greet = function(){
//     setTimeout(()=>{
//         console.log('Hello'+this.msg)
//     },500);
// };

// var greet = new delayedGreeter('World!');
// greet.greet();

// Working with classic fucntion prototype based approach
// function Person(name,surname,age){
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
// }

// Person.prototype.fullName = function(){
//     return this.name+" "+this.surname;
// };

// Person.older = function(Person1,Person2){
//     return (Person1.age>=Person2)?Person1:Person2;
// };

// p1 = new Person("Deep","Amar",22);
// p2 = new Person("Pissed","Off",23);

// console.log(p1.fullName());
// console.log(p2.fullName());

// console.log(Person.older(p1,p2));

// class Approach

// class Person{

//     constructor(name,surname,age){
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//     }
//     fullName(){
//         return this.name+" "+this.surname;
//     }

//     static older(Person1,Person2){
//         return (Person1.age>=Person2)?Person1:Person2;
//     }
// }



// Inheritance

// class personWithFullName extends Person{
    
//     constructor(name,middle,surname,age){
//          super(name,surname,age);
//          this.middlename = middle;
         
//     }

//     fullName(){
//       return this.name+" "+this.middlename+" "+this.surname;  
//     }
// }

// p1 = new personWithFullName("Sakait","singh","Bhandari",22);
// p2 = new personWithFullName("Arpit",'',"Arora",23);

// console.log(p1.fullName());
// console.log(p2.fullName());

// console.log(personWithFullName.older(p1,p2));

//New ways to define object literals

// const person = {
//     name:'George',
//     surname:'Boole',
//     get fullName(){
//         return this.name+" "+this.surname;
//     },
//     set fullName(fullName){
//      let parts = fullName.split(" ");
//      this.name = parts[0];
//      this.surname = parts[1];
//     }
// }

// console.log(person.fullName);
// console.log(person.fullName = "Sakait Bhandari");
// console.log(person.fullName);


// Map and Set collections

// const profiles = new Map();

// profiles.set('facebook','sakaitBhandari');
// profiles.set('twitter','@sb');
// profiles.set('codeforces','nodeStar');
// profiles.set('codechef','sourav_12345');

// console.log(profiles);
// for(entry of profiles){
//     console.log(entry);
// }

// const tests = new Map();

// tests.set(()=>2*2,4);
// tests.set(()=>2+2,4);
// tests.set(()=>2/2,1);

// for(cases of tests){
//     console.log(cases[0]()===cases[1]?'PASS':"FAIL");
// }


// sets in ES2015

// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// console.log(numbers.size);
// numbers.delete(2);
// numbers.add(2);
// numbers.add(()=>2*2);
// console.log(numbers.size);

// for(entry of numbers){
//     if (typeof(entry) === 'function'){
//         // var a = entry;
//         console.log(entry());
//     }
// }

// weakMap prototype- allows only object as keys
// WeakSet prototype- 

// let obj = {key:'some value'};

// const map = new WeakMap();
// map.set(obj,{key:'some_values'});

// console.log(obj);
// console.log(map.get(obj));
// obj = undefined;

// console.log(map.has(obj));
// console.log(map.size);
// console.log(obj);


// const set = new WeakSet();
// set.add(obj);
// set.add({key1:'value1'});
// // set.add(2);

// console.log(set.has(obj),set.size);
// obj = undefined;
// console.log(set.has(obj));



// template literals

// back ticks = "`"
// const name = 'LOVELY';
// const interest = ['music','coding','party','Tech','Girls'];
// const birth = {year:'1996',place:'Dallas'};


// const text = `${name} was an italian polymath interested in many topics such as ${interest.join(',')}.He was born in ${birth.year} in ${birth.place}.`;

// console.log(text);


// Lets do the closure....

// function greet(name){

//     function me(){return 'Hello'+" "+name;}
//     return me;
// }

// var x = greet('World');


// console.log(x());

// callbacks in javascript

// function add(a,b,callback){
//    callback(a+b);
// }
// 
// Asynchronous passing style code
// function add(a,b,callback){
//   setTimeout(()=>callback(a+b),500);
// }
// console.log('before');
// add(11,2,result=>console.log(result));
// console.log('after');

// Some Examples of asynchrony
// const fs = require('fs');
// const cache = {};

// function inconsistentRead(filename,callback){
//  if(cache[filename]){
//      console.log('caching in action');
//      process.nextTick(()=>callback(cache[filename]));
//  }
//  else{
//      fs.readFile(filename,'utf-8',(err,data)=>{
//         cache[filename]=data;
//         console.log('without caching in action');
//         callback(data);
//      });
//  } 
// }

// function createFileReader(filename){
//     const listeners = [];
//     inconsistentRead(filename,value=>listeners.forEach(listener=>{listener(value)}))
//     return {onDataReady:listener=>listeners.push(listener)};    
// }

// const file1 = createFileReader('../index.html');
// file1.onDataReady(data=>{
//     console.log(data);
//     const reader2 = createFileReader('../index.html');
//     reader2.onDataReady(data=>console.log(data));
// });
const bucketName = 'nature-images';
const filename = './public/images/IMG_20180616_075340.jpg';

const Bucket = require('./Bucket/uploadImage');

// create Bucket
// Bucket.createBucket(bucketName);

// upload image.
Bucket.uploadImage(bucketName,filename);