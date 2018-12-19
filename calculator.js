/*At any time, pressing the clear button clears the input and output values, and returns the calculator
 to its initialized state; 0 should be shown in the element with the id of display.*/

var display = document.getElementById("display");
var acBtn = document.getElementById("clear");
var ceBtn = document.getElementById("clearCE");

var zeroBtn = document.getElementById("zero");
var oneBtn = document.getElementById("one");
var twoBtn = document.getElementById("two");
var threeBtn = document.getElementById("three");
var fourBtn = document.getElementById("four");
var fiveBtn = document.getElementById("five");
var sixBtn = document.getElementById("six");
var sevenBtn = document.getElementById("seven");
var eightBtn = document.getElementById("eight");
var nineBtn = document.getElementById("nine");
var decimalBtn = document.getElementById("decimal");

var addBtn = document.getElementById("add");
var subBtn = document.getElementById("substract");
var multiplyBtn = document.getElementById("multiply");
var divideBtn = document.getElementById("divide");*/


var displayValue;
var InputValue;
var operationArray = [];

var updateDisplay = (clickObj) => {
    var btnText = clickObj.target.innerText;
    displayValue += btnText;
    display.innerText = displayValue;

}


acBtn.addEventListener('click',clearDisplayValue);
ceBtn.addEventListener('click',clearInputValue)

zeroBtn.addEventListener('click',updateDisplay)
oneBtn.addEventListener('click',updateDisplay);
twoBtn.addEventListener('click',updateDisplay);
threeBtn.addEventListener('click',updateDisplay);
fourBtn.addEventListener('click',updateDisplay);
fiveBtn.addEventListener('click',updateDisplay);
sixBtn.addEventListener('click',updateDisplay);
sevenBtn.addEventListener('click',updateDisplay);
eightBtn.addEventListener('click',updateDisplay);
nineBtn.addEventListener('click',updateDisplay);
decimalBtn.addEventListener('click',updateDisplay);

