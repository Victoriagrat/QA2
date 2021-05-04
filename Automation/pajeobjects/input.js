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
    userNumber: "6176399204",
    currentAddress: "17  Hadley Ln"
    

}
export const inputTextBoxPracticeForm2 = {
    firstName : random.maleFirstName(),
    lastName :  random.lastName(),
    email:      random.email('gmail.com'),
    userNumber: random.mobile(),
    dateOfBirth: ' ',
    currentAddress: "17  Hadley Ln"
    
}
// function inputTextBoxPracticeForm3 () {   \\function for regeneration of new data every time
//     return{
//     firstName : random.maleFirstName(),
//     lastName :  random.lastName(),
//     email:      random.email('gmail.com'),
//     userNumber: random.mobile(),
//     dateOfBirth: ' ',
//     currentAddress1:random.word(3, 10)
//     }
//}
    

