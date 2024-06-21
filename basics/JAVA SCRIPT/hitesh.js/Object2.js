function multiplyby5(num){
    return num*5;
}
multiplyby5.power=2;
console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);

function createuser(name,score){
    this.user=user;
    this.score=score;
}
createuser.prototype.increment=function(){
    this.score++;
}
createuser.prototype.printMe=function(){
    console.log(`score is${this.score}`);
}
const me= new createuser("me",25);
const you=createuser("you",250);
me.printMe();