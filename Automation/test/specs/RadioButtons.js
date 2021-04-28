const expect = require("chai").expect;
//import {URLs} from "../../pageobjects/expected";
import RadioButton from "../../pajeobjects/radiobuttons";

describe('Validate Radio Button page', () => {
    it('Randomly select a radio button and validate the selection', () => {
        browser.url('https://demoqa.com/radio-button');
        const selection = Math.round(Math.random());
        RadioButton.radioButtons[selection].click();
        expect(RadioButton.textSuccess).to.equal(RadioButton.radioButtons[selection].getText());
    });
    // it('', () => {
        
    // });
    // it('', () => {
        
    // });
});
