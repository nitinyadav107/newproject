let myHeroes=["thor","spiderman"]
let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all objects`);

}
Array.prototype.heyhitesh=function(){
    console.log(`hello hitesh`);
}
heroPower.hitesh();
myHeroes.hitesh();
myHeroes.heyhitesh();
heroPower.heyhitesh();

