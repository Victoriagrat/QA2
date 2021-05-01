const expect = require("chai").expect;
import {URLs,babels} from "../../pajeobjects/anotherexpected";
import otherTextBox from "../../pajeobjects/newtextbox";
import {inputTextBoxPracticeForm} from "../../pajeobjects/input";
describe("testPracticeForm", () => {
   it("testLabels of gender and clickBox", () => {
 browser.url(URLs.practiceForm);
 const selection = Math.round(Math.random()*2);
        otherTextBox.genderButtons[selection].click();
         expect(otherTextBox.textSuccess).to.eql(['Male', 'Female', 'Other']);
         expect(otherTextBox.allChecked).to.eql(otherTextBox.genderButtons[selection].getText());
       });
 it('Practice Form labels name check', () => {
     expect(otherTextBox.practiceHead).to.equal(babels.textBoxBabels.practiceHead); 
     expect(otherTextBox.babelUserName).to.equal(babels.textBoxBabels.fullName);
     expect(otherTextBox.labelEmail).to.equal(babels.textBoxBabels.email);
     expect(otherTextBox.userNumber).to.equal(babels.textBoxBabels.userNumber);
     expect(otherTextBox.dateOfBirth).to.equal(babels.textBoxBabels.dateOfBirth);
     expect(otherTextBox.subjects).to.equal(babels.textBoxBabels.subjects);
     expect(otherTextBox.Subjects).to.equal(babels.textBoxBabels.Subjects);
     expect(otherTextBox.pictures).to.equal(babels.textBoxBabels.pictures);
     expect(otherTextBox.currAddress).to.equal(babels.textBoxBabels.currAddress);
     expect(otherTextBox.stateCitylabel).to.equal(babels.textBoxBabels.stateCitylabel);
     expect(otherTextBox.genter).to.equal(babels.textBoxBabels.genter);
  });
 it('Make clicks on checkboxes -> Sports/Reading/Music and validate the clicks', () => {
  browser.url(URLs.practiceForm);
  otherTextBox.checkMusic.click();
  otherTextBox.checkReading.click();
  otherTextBox.checkSports.click();
  expect(otherTextBox.allChecked1).to.eql(['Sports', 'Reading', 'Music']);
});
  it('Validate placeholder texts of inputs', () => {

  expect(otherTextBox.inputFirstNamePlaceholder).to.equal(babels.textBoxPlaceholders.firstName);
  expect(otherTextBox.inputLastNamePlaceholder).to.equal(babels.textBoxPlaceholders.lastName);
  expect(otherTextBox.inputEmailsPlaceholder).to.equal(babels.textBoxPlaceholders.email);
  expect(otherTextBox.inputUserNumberPlaceholder).to.equal(babels.textBoxPlaceholders.userNumber);
  expect(otherTextBox.inputCurrentAddressPlaceholder1).to.equal(babels.textBoxPlaceholders.curentAddress);
});
it('Fill the form', () => {
 otherTextBox.fillForm(inputTextBoxPracticeForm);

});
});
