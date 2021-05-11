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
  get DDcity1(){
    return $('div=Delhi');
  }
  get DDcity2(){
    return $('div=Gurgaon');
  }
  get DDcity3(){
    return $('div=Noida');
  }
  get DDcitylist1(){
    return [this.DDcity1, this.DDcity2, this.DDcity3]
  }
   get ddState1(){
   return $("div=NCR");
   //
   //$("#react-select-3-option-0")[0].getText();
  }
  get ddState2(){
    return $('div=Uttar Pradesh');
  }
   get ddState3(){
    return $('div=Haryana');
   }
   get ddState4(){
    return $("div=Rajastan");
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
