const expect = require("chai").expect;
import {URLs} from "../../pajeobjects/anotherexpected";
//import practiceForm from "../../pajeobjects/practiceForm";
import PracticeForm from "../../pajeobjects/practiceForm";
describe("Validate Practice Form", () => {
  it('Make a selection and check states the name', () => {
      browser.maximizeWindow();
      browser.url(URLs.practiceForm);
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

       
        // PracticeForm.ddStateList[0].waitForExist({ timeout: 10000 });
        // for(let i = 0; i< PracticeForm.ddStateList.length; i++){
        //     const state = PracticeForm.ddStateList[i].getText();
        //     PracticeForm.ddStateList[i].click();
        //     PracticeForm.ddCity.click();
        //     PracticeForm.ddCityList[0].waitForExist({ timeout: 10000 });
        //     const cityList = PracticeForm.ddCityList.map(el => el.getText());
        //     obj[state] = [...cityList];
        //     PracticeForm.ddState.click();
       //console.log(b);
        // }
        // console.log(obj);
    //});
//  it('Make a selection in State DD', () => {
//         browser.maximizeWindow();
//         browser.url(URLs.practiceForm);
//         if (!PracticeForm.ddState.isDisplayedInViewport()) PracticeForm.ddState.scrollIntoView();
//         PracticeForm.ddState.click();
//         PracticeForm.ddStateList[0].waitForExist({ timeout: 10000 });
//         const stateList = PracticeForm.ddStateList.map(el => el.getText());
//         console.log(stateList);
//         const state = 'Haryana';
//         const index = stateList.indexOf(state);
//         PracticeForm.ddStateList[index].click();
//     });
//   it('Get the list of cities per state', () => {
//       let obj = {};
//       PracticeForm.ddState.click();
//       PracticeForm.ddStateList[0].waitForExist({ timeout: 10000 });
//       for(let i = 0; i< PracticeForm.ddStateList.length; i++){
//           const state = PracticeForm.ddStateList[i].getText();
//           PracticeForm.ddStateList[i].click();
//           PracticeForm.ddCity.click();
//           PracticeForm.ddCityList[0].waitForExist({ timeout: 10000 });
//           const cityList = PracticeForm.ddCityList.map(el => el.getText());
//           obj[state] = [...cityList];
//           PracticeForm.ddState.click();
         
         // expect(cityList).to.eql(['Delhi', 'Gurgaon', 'Noida' ,'Agra', 'Lucknow', 'Merrut', 'Haryana','Karnal', 'Panipat',
         //'Rajasthan', 'Jaipur', 'Jaiselmer']);
          // 'Uttar Pradesh',  'Agra', 'Lucknow', 'Merrut',
          //  'Haryana','Karnal', 'Panipat',
          // 'Rajasthan', 'Jaipur', 'Jaiselmer' );
         // console.log(cityList);
      // }

      // console.log(obj);
      
  //});
  // it('new state by city random click', () => {
  //   browser.maximizeWindow();
  //       browser.url(URLs.practiceForm);
  //   PracticeForm.ddState.click();
  //   PracticeForm.ddStateList[0].waitForExist({ timeout: 10000 });
  //     //const state = PracticeForm.ddStateList.getText();
  //     PracticeForm.ddCityList[0].waitForExist({ timeout: 10000 });
  //         const cityList = PracticeForm.ddCityList.map(el => el.getText());
 // PracticeForm.ddStatesList1[selection].click();
  //const ap = PracticeForm.textSuccess;
  //expect(PracticeForm.textSuccess).to.eql([ 'NCR', 'Uttar Pradesh', 'Haryana', 'Rajasthan' ]);
  //
   // expect(otherTextBox.allChecked).to.eql(otherTextBox.genderButtons[selection].getText());
  //console.log(ap)
  
    

  // it("Set date", () => {
  //   browser.maximizeWindow();
  //   browser.url(URLs.practiceForm);
  //   PracticeForm.inputDate.click();
  //   browser.keys(['Control', 'a']);
  //   browser.keys('Space');
  //   PracticeForm.inputDate.setValue("03 Apr 2021");
  //   browser.keys("Enter");
  //   browser.pause(5000);
  // });

});
});