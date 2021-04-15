const expect = require('chai').
expect; describe('Main page test suite', () => { it('Test 1', () => 
{ browser.url('https://demoqa.com/'); const expectedTitle = 'ToolsQA'; 
const actualTitle = browser.getTitle(); expect(actualTitle).to.equal(expectedTitle); }); 
it('Test 2', () => { const elements = $$('div.category-cards > div');
 expect(elements.length).to.equal(6); }); // it('Test 3', () => { // }); // it
 ('Test 4', () => { // }); // it('Test 5', () => { // }); }); 