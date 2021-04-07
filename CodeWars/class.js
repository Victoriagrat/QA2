class Numbers{
  constructor(a){
    this.x = a;
  }
  set value(a){
    this.x = a;
  }
  get abs(){
    return Math.abs(this.x);
  }
  get reverse(){
    return -this.x;
  }
  get round(){
    return Math.round(this.x);
  }
  get floor(){
    return Math.floor(this.x);
  }
  get ceil(){
    return Math.ceil(this.x);
  }
  pow(a){
    return Math.pow(this.x, a);
  }
  toFixed(a){
    return +this.x.toFixed(a);
  }
  toNumber(){
    this.x = Number(this.x);
  }
  get nan(){
    return isNan(this.x);
  }
  get sqrt(){
    return Math.sqrt(this.x);
  }
}
let num = new Numbers('12345.4563456');
console.log(num);
num.toNumber();
console.log(num.x);
console.log(num.reverse);
console.log(num.round);
console.log(num.floor);
console.log(num.ceil);
console.log(num.pow(2));
console.log(num.toFixed(2));
num.value = 5;
console.log(num.x);
let arr = [233.34, 332.44, '4325.5', '-43545'];
let mynum = new Numbers();
for(el of arr){
  mynum.value = el;
  mynum.toNumber();
  console.log(mynum.floor);