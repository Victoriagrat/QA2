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
  get inputFullNamePlaceholder() {
    return this.inputFullName.getAttribute("placeholder");
  }
  get inputEmail() {
    return $("#userEmail");
  }
  get inputEmailPlaceholder() {
    return this.inputEmail.getAttribute("placeholder");
  }
  get inputEmail() {
    return $("#userEmail");
  }
  get inputEmailPlaceholder() {
    return this.inputEmail.getAttribute("placeholder");
  }
  get inputCurrentAddress() {
    return $("textarea#currentAddress");
  }
  get inputCurrentAddressPlaceholder() {
    return this.inputCurrentAddress.getAttribute("placeholder");
  }
  get inputPermanentAddress() {
    return $("textarea#permanentAddress");
  }
  fillForm(obj) {
    this.inputFullName.setValue(obj.fullName);
    this.inputEmail.setValue(obj.email);
    this.inputCurrentAddress.setValue(obj.currentAddress);
    this.inputPermanentAddress.setValue(obj.permanentAddress);
  }
  get resultuserName() {
    return $("#name");
  }
  get resultEmail() {
    return $("#email");
  }
  get resultCurrentAddress() {
    return $("p#currentAddress");
  }
  get resultPermanentAddress() {
    return $("p#permanentAddress");
  }
  get btnSubmit() {
    return $("#submit");
  }
}

export default new otherTextBox();
