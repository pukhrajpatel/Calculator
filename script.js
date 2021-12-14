const display1El = document.querySelector(".display-1");
const display2El = document.querySelector(".display-2");
const tempResultEl = document.querySelector(".temp-result");
const numbersEl = document.querySelectorAll(".number");
const operationEl = document.querySelectorAll(".operator");
const equalEl = document.querySelector(".equal");
const clearAllEl = document.querySelector(".clear");
const clearLastEl = document.querySelector(".last-clear");
let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;
let operation_present = false;


numbersEl.forEach((number) => {
  number.addEventListener("click", (e) => {
    operation_present = false;
    
     if (e.target.innerText === "." && haveDot) {
      return;
    }
    else if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    }
    dis2Num += e.target.innerText;
    display2El.innerText = dis2Num;
    // console.log();
  });
});

operationEl.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    const operationName = e.target.innerText;
    if(operation_present){
      dis1Num = dis1Num.slice(0, dis1Num.length - 2) + operationName + ' ';
      display1El.innerText = dis1Num;
      lastOperation = operationName;
    }
    else{
      if (!dis2Num) return;
    haveDot = false;
    if (dis1Num && dis2Num && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(dis2Num);
    }
    clearVar(operationName);
    lastOperation = operationName;
    console.log(result);
    operation_present = true;
    }
  });
});
function clearVar(name = "") {
  dis1Num += dis2Num + " " + name + " ";
  display1El.innerText = dis1Num;
  display2El.innerText = "";
  dis2Num = "";
  tempResultEl.innerText = result;
}

function mathOperation() {
  if (lastOperation === "x") {
    result = parseFloat(result) * parseFloat(dis2Num);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(dis2Num);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(dis2Num);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(dis2Num);
  } else if (lastOperation === "%") {
    result = (parseFloat(result)/100) * parseFloat(dis2Num);
  }
}
// operation();

equalEl.addEventListener("click", () => {
  operation_present = false;
  if (!dis2Num || !dis1Num) return;
  haveDot = false;
  mathOperation();
  clearVar();
  if(result.length<=11){
    display2El.innerText = '= ' + result;
  }
  else {
    display2El.innerText = '= ' + result.toString().slice(0, 11);
  }
  tempResultEl.innerText = "";
  dis2Num = result.toString().slice(0,11);
  /*haveDot = dis2Num.includes(".");
  /*if(dis2Num.includes(".")){
    haveDot = true;
  }
  /*for(i = 0; i<dis2Num.length; i++){
    if(dis2Num[i] === "."){
      haveDot = true;
    }
  }*/
  dis1Num = "";
  haveDot = dis2Num.toString().includes(".")
});

clearAllEl.addEventListener("click", () => {
  operation_present = false;
  dis1Num = "";
  dis2Num = "";
  display1El.innerText = "";
  display2El.innerText = "";
  result = "";
  tempResultEl.innerText = "";
  haveDot = false;
});

clearLastEl.addEventListener("click", () => {
  haveDot = !dis2Num.toString().includes(".");
  /*if(dis2Num.includes(".")){
    haveDot = false;
  }
  /*if(dis2Num[dis2Num.length - 1] === "."){
    haveDot = false;
  }*/
  operation_present = false;
  display2El.innerText = dis2Num.slice(0, dis2Num.length-1);
  dis2Num = dis2Num.slice(0, dis2Num.length-1);
});

window.addEventListener("keydown", (e) => {
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "."
  ) {
    clickButtonEl(e.key);
    // console.log(e.key)
  } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
    clickOperation(e.key);
  } else if (e.key === "*") {
    clickOperation("x");
    // console.log(e.key)
  } else if (e.key == "Enter" || e.key === "=") {
    clickEqual();
  }
  else if(e.key == "Backspace"){
    clearLastEl.click();
  }
  // console.log(e.key)
});
function clickButtonEl(key) {
  numbersEl.forEach((button) => {
    if (button.innerText === key) {
      button.click();
    }
  });
}
function clickOperation(key) {
  operationEl.forEach((operation) => {
    if (operation.innerText === key) {
      operation.click();
    }
  });
}
function clickEqual() {
  equalEl.click();
}

const equalEl1 = document.querySelector(".equal1");
const clearAllEl1 = document.querySelector(".clear1");
const clearLastEl1 = document.querySelector(".last-clear1");

equalEl1.addEventListener("click", () =>{
  equalEl.click();
})
clearAllEl1.addEventListener("click", () =>{
  clearAllEl.click();
})
clearLastEl1.addEventListener("click", () =>{
  clearLastEl.click();
})


/* Toggle button */

const div_c2 = document.getElementById("toggle");
const div_c1 = document.getElementById("keyboard");
const expandEl = document.getElementById('expand');
const shrinkEl = document.getElementById('shrink');
const lineEl = document.getElementById('line');
const disp1 = document.getElementById('disp1');
const disp2 = document.getElementById('disp2');
const temp1 = document.getElementById('temp');


if(expandEl){
  expandEl.addEventListener('click', () =>{
      div_c2.classList.add('show-menu');
      div_c1.classList.add('show-menu1');
      lineEl.classList.add('trans');
      disp1.classList.add('trans');
      disp2.classList.add('trans');
      temp1.classList.add('trans');
  })
}
if(shrinkEl){
  shrinkEl.addEventListener('click', () =>{
      div_c2.classList.remove('show-menu');
      div_c1.classList.remove('show-menu1');
      lineEl.classList.remove('trans');
      disp1.classList.remove('trans');
      disp2.classList.remove('trans');
      temp1.classList.remove('trans');
  })
}

/* operators 1*/

function clearVar1(name = "") {
  dis1Num += dis2Num + " " + name + "(";
  display1El.innerText = dis1Num;
  display2El.innerText = "";
  dis2Num = "";
  tempResultEl.innerText = result;
}

const operator1El = document.querySelectorAll(".operator1");
operator1El.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    const operationName = e.target.innerText;
    if(!dis2Num){
      dis2Num = operationName + "(";
    }
    else{
      dis2Num += "x" + operationName + "(";
    }
    display2El.innerText = dis2Num;
    /*if(operation_present){
      dis1Num = dis1Num.slice(0, dis1Num.length - 2) + operationName + ' ';
      display1El.innerText = dis1Num;
      lastOperation = operationName;
    }*/
    
    /*haveDot = false;
    if (dis1Num && dis2Num && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(dis2Num);
    }
    clearVar1(operationName);
    lastOperation = operationName;
    console.log(result);*/
  });
});


/*function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(num){
    document.getElementById("history-value").innerText=num;
}
function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
    if(num==""){
        document.getElementById("output-value").innerText=num;
    }
    else{
        document.getElementById("output-value").innerText=getFormattedNumber(num);
    }
}
function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="clear"){
            printHistory("");
            printOutput("");
        }
        else if(this.id=="backspace"){
            var output=reverseNumberFormat(getOutput()).toString();
            if(output){//if output has a value
                output= output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else{
            var output=getOutput();
            var history=getHistory();
            if(output==""&&history!=""){
                if(isNaN(history[history.length-1])){
                    history= history.substr(0,history.length-1);
                }
            }
            if(output!="" || history!=""){
                output= output==""?output:reverseNumberFormat(output);
                history=history+output;
                if(this.id=="="){
                    var result=eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history=history+this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }

    });
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output=reverseNumberFormat(getOutput());
        if(output!=NaN){ //if output is a number
            output=output+this.id;
            printOutput(output);
        }
    });
}

const getValueAsStr = () => getOutput().textContent.split(',').join('');

/*const getValueAsNum = () => {
    return parseFloat(getValueAsStr());
};

const setStrAsValue = (valueStr) => {
    if (valueStr[valueStr.length - 1] === '.') {
        valueEl.textContent += '.';
        return;
    }

    const [wholeNumStr, decimalStr] = valueStr.split('.');
    if (decimalStr) {
        valueEl.textContent =
            parseFloat(wholeNumStr).toLocaleString() + '.' + decimalStr;
    } else {
        valueEl.textContent = parseFloat(wholeNumStr).toLocaleString();
    }
};
const decimalEl = document.getElementById("decimal");

decimalEl.addEventListener('click', () => {
    var output=reverseNumberFormat(getOutput());
    output = output + '.';
    printOutput(output);
    /*if (!output.includes('.')) {
        output= output + '.';
        printOutput(output);
    }
    else{
        printOutput(output) ;
    } 
})*/