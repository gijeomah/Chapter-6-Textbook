"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Chapter case

      Order Form Code
      Author: Genesis Ijeomah
      Date:   3/2/2026

      Filename: js06b.js
 */
//button is being created
let subButton = document.getElementById("subButton");
// Validate the payment when the submit button is clicked
subButton.addEventListener("click", validateName);
// Validate event lister with the card
subButton.addEventListener("click", validateCard);
// Validate event listener witrh number
subButton.addEventListener("click", validateNumber);
//Repeated for month and year
subButton.addEventListener("click", validateMonth);
subButton.addEventListener("click", validateYear);
subButton.addEventListener("click", validateCVC);
//Check is the owner's name is entered on the card 
function validateName(){
   let cardName = document.getElementById("cardName");
   if (cardName.validity.valueMissing){
      cardName.setCustomValidity("Enter your name as it appears on the card");
   }else{
      cardName.setCustomValidity("");
   }
};
// Check if credit card has been selceted  
function validateCard(){
   let card = document.forms.payment.elements.credit[0];
   if (card.validity.valueMissing){
      card.setCustomValidity("Select your credit card")
   }else{
      card.setCustomValidity("");
   }
};
function validateNumber(){
   let cNum = document.getElementById("cardNumber");
   if (cNum.validity.valueMissing){
      cNum.setCustomValidity("Eneter your card number");
   } else if (cNum.validity.patternMismatch){
      cNum.setCustomValidity("Enter a valid card number");
   } else if (luhn(cNum.value) === false){
      cNum.setCustomValidity("Enter a legitimate card number");
   }else {
      cNum.setCustomValidity("");
   }

};
function validateMonth(){
   let month = document.getElementById("expMonth");
   if (month.selectedIndex === 0){
      month.setCustomValidity("Select the expiration month");
   }else {
      month.setCustomValidity("");
   }
};
function validateYear(){
   let year = document.getElementById("expYear");
   if (year.selectedIndex === 0){
      year.setCustomValidity("Select the expiration year");
   }else {
      year.setCustomValidity("");
   }
};
function validateCVC(){
   //Determine which card was selcted 
   let card = document.querySelector('input[name="credit"]:checked').value;
   let cvc = document.getElementById("cvc");
   //validate CVC value 
   if (cvc.validity.valueMissing){
      cvc.setCustomValidity("Enter your CVC number");
   }else if ((card == "amex") && !(/^\d{4}$/.test(cvc.value))){
      cvc.setCustomValidity("Enter a 4-digit number");
   } else if ((card !== "amex")&& !(/^\d{3}$/.test(cvc.value))){
      cvc.setCustomValidity("Enter a 3-digit number");
   } else {
      cvc.setCustomValidity("")
   }
}

//document.forms['forms id']
//const idRegex = /^\d{3} \d{3}$/
// ## ## 















/* ------- Luhn Algorithm used for Validating Credit Card Numbers   ----- */

function luhn(idNum) {
   let string1 = "";
   let string2 = "";
   
   // Retrieve the odd-numbered digits starting from the back
   for (let i = idNum.length - 1; i >= 0; i-= 2) {
      string1 += idNum.charAt(i);
   }
   // Retrieve the even-numbered digits starting from the back and double them
   for (let i = idNum.length - 2; i >= 0; i-= 2) {
      string2 += 2*idNum.charAt(i);
   }
   
   // Return whether the sum of the digits is divisible by 10
   return sumDigits(string1 + string2) % 10 === 0;
   
   function sumDigits(numStr) {
      let digitTotal = 0;
      for (let i = 0; i < numStr.length; i++) {
         digitTotal += parseInt(numStr.charAt(i));
      }
      return digitTotal;
   }
}
   

