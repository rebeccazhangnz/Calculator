//create function that shows the input when the button is clicked.
var displayValue = document.getElementById("display");


function updateDisplay(value) {
    var zeroCheck = "";
    var dotCheck = "";

    displayValue.value += value;

    zeroCheck = displayValue.value;
    reduceInitialZero(zeroCheck);
    dotCheck = displayValue.value;
    showDecimal(dotCheck);
    syntaxCheck = displayValue.value;
    checkSyntaxError(syntaxCheck);
} 
// When inputting numbers, my calculator should not allow a number to begin with multiple zeros.
function reduceInitialZero(zeroCheck){

    while(zeroCheck.length > 1 && zeroCheck.charAt(0)==="0"){
        if(zeroCheck.charAt(1) === "."){
               return zeroCheck;
           }else{
              zeroCheck = zeroCheck.substr(1);
           }
        }
        return displayValue.value = zeroCheck;
    }


/*When the decimal element is clicked, a . should append to the currently displayed value; two . 
in one number should not be accepted.*/

function showDecimal(dotCheck){
   if(dotCheck.charAt(0)==="."){
        dotCheck = "0"+ dotCheck;
       }else{
       dotCheck = dotCheck;
  }
  return displayValue.value = dotCheck;
}

function checkSyntaxError(syntaxCheck){
    showDecimal(syntaxCheck);
    //console.log(syntaxCheck);
    var count = 0;
    syntaxCheck = syntaxCheck.toString();
    for (var i=0;i<syntaxCheck.length;i++){
        //console.log(i);
        if(syntaxCheck.charAt(i) === "."){
            count++; }
    }

    if (count>1){
        displayValue.value = "Syntax ERROR";
    }else{
        displayValue.value = syntaxCheck;
    }
return displayValue.value;
}



//create function that clear all the inputs when "AC" button is clicked.
function clearDisplay(){
    displayValue.value = "";
}

// create function that clear current inputs when "CE" button is clicked.


// create function that perform calculations and return the calculated value when the equal button is clicked.
function calculate(){
    var result = 0;
    result = displayValue.value;
    displayValue.value = "";
    displayValue.value = eval(result);
    }
