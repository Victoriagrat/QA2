const expect = require("chai").expect;
import {babels} from "../../anotherexpected";
import otherTextBox from "../../newtextbox";
describe("test", () => {
  
  it("new twst", () => {
    browser.url("https://demoqa.com/automation-practice-form");
     expect(otherTextBox.babelUserName).to.equal(babels.textBoxBabels.fullName);
     expect(otherTextBox.labelEmail).to.equal(babels.textBoxBabels.email);
    //  expect(otherTextBox.labelCurrentAddress).to.equal(babels.textBoxBabels.currentAddress);$$("#genterWrapper > div.col-md-3.col-sm-12")
    //  [div.col-md-3.col-sm-12]
     expect(otherTextBox.userNumber).to.equal(babels.textBoxBabels.userNumber);
    //  expect(newerTextBox.labelCurrentAddress).to.equal(labels.textBoxLabels.currentAddress);
    //  expect(newerTextBox.labelPermAddress).to.equal(labels.textBoxLabels.permAddress);
  });
    // const actualTitle = browser.getTitle();
    // expect(actualTitle).to.equal(labels.title);
  });