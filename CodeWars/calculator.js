<<<<<<< HEAD
class Calculator{
    constructor(x, y){
    this.x = x;
    this.y = y;
    }
    get plus(){
        return this.x + this.y;
    }
      get minus(){
       return this.x - this.y;
        
     }
     get multiply(){
        return this.x * this.y;
       }
      get divide(){
      return this.x / this.y;
      }
    }
    
    
    let myCalculator = new Calculator(5,5);
    
    console.log(myCalculator);
    
     console.log(myCalculator.plus);
    
    console.log(myCalculator.minus);
    
     console.log(myCalculator.multiply);
    
    console.log(myCalculator.divide);

