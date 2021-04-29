class otherTextBox {
  get babelUserName() {
    return $("#userName-label").getText();
  }
  get labelEmail() {
    return $("#userEmail-label").getText();
  }
  get userNumber() {
    return $("#userNumber-label").getText();
  }
  get dateOfBirth() {
    return $("#dateOfBirth-label").getText();
  }
  get subjects() {
    return $$("#subjects-label")[0].getText();
  }
  get Subjects() {
    return $$("#subjects-label")[1].getText();
  }
  get pictures() {
    return $$("#subjects-label")[2].getText();
  }
  get currAddress() {
    return $("#currentAddress-label").getText();
  }
  get  stateCitylabel() {
    return $("#stateCity-label").getText();    
  }
  get  genter() {
    return $$("#genterWrapper > div.col-md-3.col-sm-12")[0].getText();  
  }
  get practiceHead() {
    return $$("#app > div > div > div.pattern-backgound.playgound-header > div")[0].getText();
  }
  get checkSports(){
    return $('#hobbies-checkbox-1 + label');
  }
  get checkReading(){
    return $('#hobbies-checkbox-2 + label');
  }
  get checkMusic(){
    return $('#hobbies-checkbox-3 + label');
  }
  get allChecked(){
    return $$(':checked + label').map(el => el.getText()).toString();
  }
  get checkBoxMale(){
   return $("label[for = 'gender-radio-1']");
   }
  get checkBoxFemale(){
   return $("label[for = 'gender-radio-2']");
  }
  get checkBoxOther(){
  return $("label[for = 'gender-radio-3']");
  }
  get genderButtons(){
    return [this.checkBoxMale, this.checkBoxFemale, this.checkBoxOther];
}
get textSuccess(){
  return (this.genderButtons).map(el => el.getText());
}
get allChecked1(){
  return $$(':checked + label').map(el => el.getText());
}
//  get ueu(){
//  return (this.textSuccess).split('').join('');
// }
  // get inputEmail() {
  //   return $("#userEmail");
  // }
  // get inputEmailPlaceholder() {
  //   return this.inputEmail.getAttribute("placeholder");
  // }
  // get inputEmail() {
  //   return $("#userEmail");
  // }
  // get inputEmailPlaceholder() {
  //   return this.inputEmail.getAttribute("placeholder");
  // }
  // get inputCurrentAddress() {
  //   return $("textarea#currentAddress");
  // }
  // get inputCurrentAddressPlaceholder() {
  //   return this.inputCurrentAddress.getAttribute("placeholder");
  // }
  // get inputPermanentAddress() {
  //   return $("textarea#permanentAddress");
  // }
  // fillForm(obj) {
  //   this.inputFullName.setValue(obj.fullName);
  //   this.inputEmail.setValue(obj.email);
  //   this.inputCurrentAddress.setValue(obj.currentAddress);
  //   this.inputPermanentAddress.setValue(obj.permanentAddress);
  // }
  // get resultuserName() {
  //   return $("#name");
  // }
  // get resultEmail() {
  //   return $("#email");
  // }
  // get resultCurrentAddress() {
  //   return $("p#currentAddress");
  // }
  // get resultPermanentAddress() {
  //   return $("p#permanentAddress");
  // }
  // get btnSubmit() {
  //   return $("#submit");
  // }
}

export default new otherTextBox();
