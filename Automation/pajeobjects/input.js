const random = require('generate-random-data');

export const inputTextBox = {
    fullName : "IT START",
    email: "info@itstart.us",
    currentAddress: "USA Florida",
    permanentAddress: "USA Florida, Jax"
}
export const inputTextBoxPracticeForm = {
    firstName : "Vika",
    lastName : "Grat",
    email: "vicabellaru@gmail.com",
   // dateofbirth: '20 May 2021',
    userNumber: "6176399204",
    currentAddress: "17  Hadley Ln"
    

}
export const inputTextBoxPracticeForm2 = {
    firstName : random.maleFirstName(),
    lastName :  random.lastName(),
    email:      random.email('gmail.com'),
    userNumber: random.int(1000000000,9990000000),
    dateOfBirth: "03 Apr 2021",
    currentAddress1: random.word(5, 10)
    
}

    export function webTableData () {
        return {
            firstName : random.maleFirstName(),
            lastName : random.lastName(),
            userEmail: random.email('gmail.com'),
            age: random.int(20,50),
            salary : random.int(20000,500000),
            department: random.word(10, 15)
        }
// function inputTextBoxPracticeForm3 () {   \\function for regeneration of new data every time
//     return{
//     firstName : random.maleFirstName(),
//     lastName :  random.lastName(),
//     email:      random.email('gmail.com'),
//     userNumber: random.mobile(),
//     dateOfBirth: ' ',
//     currentAddress1:random.word(3, 10)
    }