const promise1 = new Promise ((resolve,reject)=> reject("Reject"));
const promise2 = new Promise ((resolve,reject)=> resolve("R2"));
const promise3 = new Promise ((resolve,reject)=> resolve("R3"));

Promise.any([promise1,promise2,promise3])
    .then(response => console.log(response));