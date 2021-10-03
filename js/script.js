function reversePolish(newCalc) {
  let calc = newCalc.split("");
  let stack = [];
  if (calc === "") {
    return 0;
  }

  // Looping through expression and pushing number to stack array
  for (let i = 0; i < calc.length; i++) {
    if (!isNaN(calc[i]) && isFinite(calc[i])) {
      stack.push(calc[i]);
    } else {
      let valOne = stack.pop();
      let valTwo = stack.pop();
      if (calc[i] === "+") {
        stack.push(parseInt(valOne) + parseInt(valTwo));
      } else if (calc[i] === "-") {
        stack.push(parseInt(valTwo) - parseInt(valOne));
      } else if (calc[i] === "*") {
        stack.push(parseInt(valOne) * parseInt(valTwo));
      } else if (calc[i] === "/") {
        stack.push(parseInt(valTwo) / parseInt(valOne));
      } else if (calc[i] === "^") {
        stack.push(Math.pow(parseInt(valTwo), parseInt(valOne)));
      }
    }
  }

  //out of operators and more than one operand
  if (stack.length > 1) {
    return "ERROR";
  } else {
    return stack[0];
  }
}
function getHistory() {
  return document.getElementById("history-value").innerText;
}
function printHistory(num) {
  document.getElementById("history-value").innerText = num;
}
function getOutput() {
  return document.getElementById("output-value").innerText;
}
function printOutput(num) {
  if (num == "") {
    document.getElementById("output-value").innerText = num;
  } else {
    document.getElementById("output-value").innerText = getFormattedNumber(num);
  }
}
function getFormattedNumber(num) {
  if (num == "-") {
    return "";
  }
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}
function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ""));
}

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    if (this.id == "clear") {
      printHistory("");
      printOutput("");
    }
    if (this.id == "clear") {
      printHistory("");
      printOutput("");
    } else if (this.id == "backspace") {
      var ouput = reversePolish(getOutput).tostring();
      if (output) {
        // if output has a value
        output = output.substr(0, output.length - 1);
        printOutput(ouput);
      }
    } else {
      var output = getOutput();
      var history = getHistory();
      if (output == "" && history != "") {
        if ((isNaN = history[history.length - 1])) {
          history = history.substr(0, history.length - 1);
        }
      }
      if (output != "" || history != "") {
        //condition?true:false
        output = output == "" ? output : reverseNumberFormat(output);
        history = history + output;
        if (this.id == "=") {
          var result = eval(history);
          printOutput(result);
          printHistory("");
        } else {
          history = history + this.id;
          printHistory(history);
          printOutput("");
        }
      }
    }
  });
}

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    var output = reverseNumberFormat(getOutput());
    if (output != NaN) {
      // if output is a number
      output = output + this.id;
      printOutput(output);
    }
  });
}
console.log(reversePolish("3533243+++-*/"));
