class PracticeForm {
  get ddState() {
    return $("#state > div > div:nth-of-type(1)");
  }
  get ddStateList() {
    return $$("#state > div:nth-of-type(2) > div > div");
  }
  get ddCity() {
    return $("#city > div > div:nth-of-type(1)");
  }
  get ddCityList() {
    return $$("#city > div:nth-of-type(2) > div > div");
  }
   get ddState1(){
   return $$("#react-select-3-option-0");
   //
   //$("#react-select-3-option-0")[0].getText();
  }
  get ddState2(){
    return $$("#react-select-3-option-1");
  }
   get ddState3(){
    return $$("#react-select-3-option-2");
   }
   get ddState4(){
    return $$("#react-select-3-option-3");
  }
  get ddStatesList1(){
   return [this.ddState1, this.ddState2, this.ddState3,this.ddState4];

}
get textSuccess(){
return (this.ddStatesList1).map(el => el.getText());
}
 get result(){
 return $$("#state > div:nth-of-type(2) > div > div").map(el => el.getText());

 }
get inputDate(){
      return $('#dateOfBirthInput');
  
}
}

export default new PracticeForm();
