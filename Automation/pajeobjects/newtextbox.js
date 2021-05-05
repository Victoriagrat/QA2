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

get inputFirstlName() {
  return $("#firstName");
}
get inputLastlName() {
  return $("#lastName");
}

get inputFirstNamePlaceholder() {
  return this.inputFirstlName.getAttribute("placeholder");
}
get inputLastNamePlaceholder() {
  return this.inputLastlName.getAttribute("placeholder");
}
get inputEmails() {
  return $("#userEmail");
}
get inputEmailsPlaceholder() {
  return this.inputEmails.getAttribute("placeholder");
}
get inputUserNumber() {
  return $("#userNumber");
}
get inputUserNumberPlaceholder() {
  return this.inputUserNumber.getAttribute("placeholder");
}
get inputCurrentAddress1() {
  return $("#currentAddress");
}
get inputCurrentAddressPlaceholder1() {
  return this.inputCurrentAddress1.getAttribute("placeholder");
}
get inputPermanentAddress() {
  return $("textarea#permanentAddress");
}
// fillForm(obj) {                                                    //this is hand write data
//   this.inputFirstlName.setValue(obj.firstName);
//   this.inputLastlName.setValue(obj.lastName);
//   this.inputEmails.setValue(obj.email);
//   this.inputUserNumber.setValue(obj.userNumber);
//   this.inputCurrentAddress1.setValue(obj.currentAddress);
//}
get inputdateOfBirth(){
  return $('#dateOfBirthInput');
}
 fillForm(inputTextBoxPracticeForm2) {
  this.inputFirstlName.setValue(inputTextBoxPracticeForm2.firstName);
  this.inputLastlName.setValue(inputTextBoxPracticeForm2.lastName);
  this.inputEmails.setValue(inputTextBoxPracticeForm2.email);
  this.inputUserNumber.setValue(inputTextBoxPracticeForm2.userNumber);
  this.inputdateOfBirth.setValue(inputTextBoxPracticeForm2.dateOfBirth);
  this.inputCurrentAddress1.setValue(inputTextBoxPracticeForm2.currentAddress1);

  }
  get subjects1(){
    return $('#subjects-label');
  }
}


export default new otherTextBox();
