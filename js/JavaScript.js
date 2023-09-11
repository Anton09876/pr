'use strict'


function GetFibonacciNumber() {
    const FibonacciMemberNumber = document.getElementById("FibonacciMemberNumber").value; // получил значение из поля input

    return Number(FibonacciMemberNumber);
}

function CalculateFibonacciNumber() {
    Clear('result');
    Clear('sumOfNumberSeries');
    let number = GetFibonacciNumber();
    //случаи где не нужны расчеты
    if (number < 1) return NaN;
    //случаи где нужно высчитывать
    {
        // начальные значения для 0 и 1 члена
        let f0 = 0;
        let f1 = 1;
        // 
        let result = 0;
        let sum = 0;
        for (let i = 1; i <= number; i++) {
            if (i == 1) result = f0;
            else if (i == 2) {
                result = f1;
                sum += f1;
            }
            else {
                result = f0 + f1 // n-ый член
                f0 = f1;
                f1 = result;
                sum += result;
            }
            if (i == number) {
                WriteBoldNumber(result, 'result');
                WriteBoldNumber(sum, 'sumOfNumberSeries');
                return;
            }
            
            WriteNumber(result, 'result');
        }
    }
}
function WriteNumber(result, destination) {
    // чтобы увидеть результат, сначала откройте консоль
    //let result = CalculateFibonacciNumber(GetFibonacciNumber());
    let resultElement = document.getElementById(destination);
    resultElement.innerHTML += result + ", ";
}

function Clear(what) {
    let resultElement = document.getElementById(what);
    resultElement.innerHTML = "";
}

function WriteBoldNumber(result, destination) {
    let spanElem = document.createElement('span');
    spanElem.style.fontWeight = 'bold';
    spanElem.innerHTML = result;
    // чтобы увидеть результат, сначала откройте консоль
    //let result = CalculateFibonacciNumber(GetFibonacciNumber());
    let resultElement = document.getElementById(destination);
    resultElement.appendChild(spanElem);
}