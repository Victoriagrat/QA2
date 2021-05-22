const expect = require("chai").expect;
import {URLs,babels} from "../../pajeobjects/anotherexpected";
//import {URLs} from "../../pajeobjects/anotherexpected";
//import practiceForm from "../../pajeobjects/practiceForm";
import PracticeForm from "../../pajeobjects/practiceForm";
import otherTextBox from "../../pajeobjects/newtextbox";
//import {inputTextBoxPracticeForm} from "../../pajeobjects/input";    //this is hand write data
import {inputTextBoxPracticeForm2} from "../../pajeobjects/input";
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
// it('Fill the form', () => {
//  otherTextBox.fillForm(inputTextBoxPracticeForm);    // this is hand write data

// });
// it('Fill the form using generate-random-data', () => {
//   //const myData = ininputTextBoxPracticeForm2();
//   otherTextBox.fillForm(inputTextBoxPracticeForm2);
//   otherTextBox.subjects1.click();
//   otherTextBox.inputCurrentAddress1.scrollIntoView()


 //browser.pause(10000);
//});

it('Make a selection and check states name', () => {
      browser.maximizeWindow();
      //browser.url(URLs.practiceForm);
      if (!PracticeForm.ddState.isDisplayedInViewport()) PracticeForm.ddState.scrollIntoView();
      PracticeForm.ddState.click();
      PracticeForm.ddStateList[0].waitForExist({ timeout: 10000 });
      expect(PracticeForm.result).to.eql([ 'NCR', 'Uttar Pradesh', 'Haryana', 'Rajasthan' ]);
  });
  it('Get the list of cities per state new', () => {
      browser.maximizeWindow();
       browser.url(URLs.practiceForm);
        PracticeForm.ddState.scrollIntoView();
        PracticeForm.ddState.click();
        PracticeForm.ddStateList[0].waitForExist({ timeout: 10000 });
        PracticeForm.ddState1.click();
        PracticeForm.ddCity.click();
        PracticeForm.ddCityList[0].waitForExist({ timeout: 10000 });
        PracticeForm.DDcity1.click();
        PracticeForm.DDcity1.waitForExist({ timeout: 10000 });
        let b = PracticeForm.DDcity1.getText();
        // PracticeForm.ddCityList.map(el => el.getText());
     expect(b).to.equal('Delhi');
        PracticeForm.ddCity.click();
        PracticeForm.ddCityList[0].waitForExist({ timeout: 10000 });
        PracticeForm.DDcity2.click();
        PracticeForm.DDcity2.waitForExist({ timeout: 10000 });
        let c = PracticeForm.DDcity2.getText();
     expect(c).to.equal('Gurgaon');
    
        PracticeForm.ddCity.click();
        PracticeForm.ddCityList[0].waitForExist({ timeout: 10000 });
        PracticeForm.DDcity3.click();
        PracticeForm.DDcity3.waitForExist({ timeout: 10000 });
        let d = PracticeForm.DDcity3.getText();
     expect(d).to.equal('Noida');
     PracticeForm.DDcity3.click();
     
    });
     it('Fill the form using generate-random-data', () => {
      //const myData = ininputTextBoxPracticeForm2();
      otherTextBox.fillForm(inputTextBoxPracticeForm2);
      otherTextBox.subjects1.click();
      otherTextBox.inputCurrentAddress1.scrollIntoView()
      otherTextBox.inputdateOfBirth.click();
      browser.keys(['Control', 'a']);
      browser.keys('Space');
      PracticeForm.inputDate.setValue("03 Apr 2021");
      browser.keys("Enter");
      browser.pause(5000);
      const selection = Math.round(Math.random()*2);
        otherTextBox.genderButtons[selection].click();
        PracticeForm.btnSubmit.click(); 
     browser.pause(10000);
   
     try{
        PracticeForm.thanksModal.waitForExist(10)
      
     }
     catch(err){
        console.log(err.message);
     }
     expect(PracticeForm.thanksModal.isExisting()).to.be.true;
     const a = PracticeForm.thanksModalData[7][0];
   let g = +a;
     console.log(g);
     const b = inputTextBoxPracticeForm2;

     
    // let c = Object.keys(b);
     let d = Object.values(b);
    
  
     console.log((d)[3]);
    expect(PracticeForm.thanksModalData[1][0]).to.be.eql((d)[0]);
    expect(PracticeForm.thanksModalData[1][1]).to.be.eql((d)[1]);
    expect(PracticeForm.thanksModalData[3][0]).to.be.eql((d)[2]);
    expect(g).to.be.eql((d)[3]);
    expect(PracticeForm.thanksModalData[17][0]).to.be.eql((d)[5]);
    expect(PracticeForm.thanksModalData[9][0]).to.be.eql("03");
    expect(PracticeForm.thanksModalData[9][1]).to.be.eql("April,2021");
    expect(otherTextBox.genderButtons[selection].getText()).to.be.eql(PracticeForm.thanksModalData[5][0]);// create array of object and compare arrays
    expect(PracticeForm.thanksModalData[1][0]).to.be.eql(inputTextBoxPracticeForm2.firstName);// compare array to class object



   });
});