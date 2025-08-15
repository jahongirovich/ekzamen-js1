
let firstNum = parseFloat(prompt("Введите первую цифру:"));
let operator = prompt("Введите знак (+, -, *, /):");
let secondNum = parseFloat(prompt("Введите вторую цифру:"));


let correctAnswer;
switch (operator) {
  case '+':
    correctAnswer = firstNum + secondNum;
    break;
  case '-':
    correctAnswer = firstNum - secondNum;
    break;
  case '*':
    correctAnswer = firstNum * secondNum;
    break;
  case '/':
    correctAnswer = secondNum !== 0 ? firstNum / secondNum : "Деление на 0!";
    break;
  default:
    correctAnswer = "Неверный оператор";
}


document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.textAlign = "center";
document.body.style.background = "white";


let mathBox = document.createElement("div");
mathBox.style.background = "gold";
mathBox.style.padding = "20px";
mathBox.style.display = "inline-block";
mathBox.style.marginTop = "50px";


function createBox(text) {
  let el = document.createElement("span");
  el.textContent = text;
  el.style.display = "inline-block";
  el.style.padding = "10px 15px";
  el.style.margin = "5px";
  el.style.background = "yellow";
  el.style.border = "2px solid orange";
  el.style.fontSize = "24px";
  el.style.minWidth = "50px";
  el.style.textAlign = "center";
  return el;
}

mathBox.appendChild(createBox(firstNum));
mathBox.appendChild(createBox(operator));
mathBox.appendChild(createBox(secondNum));
document.body.appendChild(mathBox);


let resultDiv = document.createElement("div");
resultDiv.textContent = `Result ${correctAnswer}`;
resultDiv.style.marginTop = "20px";
resultDiv.style.background = "green";
resultDiv.style.color = "white";
resultDiv.style.fontSize = "18px";
resultDiv.style.padding = "10px 20px";
resultDiv.style.display = "inline-block";
document.body.appendChild(document.createElement("br"));
document.body.appendChild(resultDiv);