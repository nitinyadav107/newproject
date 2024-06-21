const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task is completed');
        resolve();
    }, 1000);
});

promise.then(function () {
    console.log('Promise consumed');
});
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function () {
    console.log("promise consumed");
})
const promisethree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ name: "nitin", email: "nitin@gmail.com" });
    }, 1000);
})
promisethree.then(function (user) {
    console.log(user);
});
const promisefour=new promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
              resolve({username:"hitesh",password:123});
        }
        else{
            reject("error : something went wrong");
        }
    },1000);
})
promisefour.then((user) =>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(error){
      console.log(error);
}).finally(()=>{
    console.log("resolve or rejected");
})
const promisefive=new promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
              resolve({username:"hitesh",password:123});
        }
        else{
            reject("error :  js  went wrong");
        }
    },1000); 
})
async function promiseconsumed(){
    try{
        const response=await promisefive
        console.log(response);

    }
    catch{
        console.log(error);
    }

}
promiseconsumed();