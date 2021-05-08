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
   return $$("#state > div > div.css-1hwfws3 > div.css-1uccc91-singleValue").getText();
   //
   //$("#react-select-3-option-0")[0].getText();
  }
  get ddState2(){
    return $("#react-select-3-option-0")[1].getText();
  }
   get ddState3(){
    return $("#react-select-3-option-0")[2].getText();
   }
   get ddState4(){
    return $("#react-select-3-option-0")[3].getText();
  }
  get ddStatesList1(){
   return [this.ddState1, this.ddState2, this.ddState3,this.ddState4];

 }
 get result(){
 return $$("#state > div:nth-of-type(2) > div > div").map(el => el.getText());

 }
get inputDate(){
      return $('#dateOfBirthInput');
  
}
}

export default new PracticeForm();
