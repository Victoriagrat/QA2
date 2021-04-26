const expect = require("chai").expect;
import {babels} from "../../anotherexpected";
import otherTextBox from "../../newtextbox";
describe("testPracticeForm", () => {
  
  it("testLabels", () => {
    browser.url("https://demoqa.com/automation-practice-form");
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
   
  });