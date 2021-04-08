class Strings{
    constructor(a){
      this.x = a;
     }
   get secondInd(){
      return this.x[1];
     }
   get incl(){
     return  this.x.includes('happy');
   }
   get ind(){
     return this.x.indexOf('h');
    }
   get sl(){
        return this.x.slice(3,5);
      }
   get repl(){
        return this.x.replace('What','Her');
      }
   get double(){
        return this.x.repeat(2);
      }
   get leng(){
      return this.x.length;
      }
   get newword(){
        return this.x.startsWith('What');
      }
   get lowCase(){
        return this.x.toLowerCase();
      }
    }
  
   let myString = new Strings('What a happy day');
  
  console.log(myString.ind);
  console.log(myString.newword);
  console.log(myString.leng);
  console.log(myString.lowCase);
  console.log(myString.sl);
  console.log(myString.repl);
  console.log(myString.double);
  console.log(myString.secondInd);
  console.log(myString.incl);
  