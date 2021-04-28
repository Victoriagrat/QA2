const expect = require("chai").expect;
import {URLs,babels} from "../../anotherexpected";
import otherTextBox from "../../newtextbox";
describe("testPracticeForm", () => {
  
  // it("testLabels and clickBox", () => {
  //   browser.url(URLs.practiceForm);
  //   const itemMale = otherTextBox.checkbox;
  //   const itemfemale = otherTextBox.checkboxFemale;
  //   const itemOther = otherTextBox.checkboxOther;
  //   itemMale.click();
  //   itemfemale.click();
  //   itemOther.click();
  //    expect(otherTextBox.practiceHead).to.equal(babels.textBoxBabels.practiceHead); 
  //    expect(otherTextBox.babelUserName).to.equal(babels.textBoxBabels.fullName);
  //    expect(otherTextBox.labelEmail).to.equal(babels.textBoxBabels.email);
  //    expect(otherTextBox.userNumber).to.equal(babels.textBoxBabels.userNumber);
  //    expect(otherTextBox.dateOfBirth).to.equal(babels.textBoxBabels.dateOfBirth);
  //    expect(otherTextBox.subjects).to.equal(babels.textBoxBabels.subjects);
  //    expect(otherTextBox.Subjects).to.equal(babels.textBoxBabels.Subjects);
  //    expect(otherTextBox.pictures).to.equal(babels.textBoxBabels.pictures);
  //    expect(otherTextBox.currAddress).to.equal(babels.textBoxBabels.currAddress);
  //    expect(otherTextBox.stateCitylabel).to.equal(babels.textBoxBabels.stateCitylabel);
  //    expect(otherTextBox.genter).to.equal(babels.textBoxBabels.genter);
  // });
//   it('Practice form checkbox click', () => {
// const item =  $$("#genterWrapper > div.col-md-9.col-sm-12 > div:nth-child(1) > label");
// item.click();
it('Make clicks on checkboxes -> Sports/Reading/Music and validate the clicks', () => {
  browser.url(URLs.practiceForm);
  otherTextBox.checkMusic.click();
  otherTextBox.checkReading.click();
  otherTextBox.checkSports.click();
  expect(otherTextBox.allChecked).to.eql(['Sports', 'Reading', 'Music']);
});
    
   
  });