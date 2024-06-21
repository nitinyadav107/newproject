const sym=Symbol("key1");
const js={
    name:"nitin",
    rollno:80,
    [sym]:"key1",
    "name":"aditi",
    "my name":"nitin"
}
console.log(js.rollno);
console.log(js.name);
console.log(js["name"]);
console.log(js["my name"]);
console.log(js[sym]);
Object.freeze(js);
js.name="Aditya";
console.log(js.name);
js.greeting=function(){
    console.log(`hello ${this.name}`);
}
console.log(js.greeting());