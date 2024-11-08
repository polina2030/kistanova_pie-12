
function showChetnost(){
    let num1 = document.getElementById("zadanie1_1");
    num1 = parseInt(num1.value);
    
    let num2 = document.getElementById("zadanie1_2");
    num2 = parseInt(num2.value);
    
    let text = document.getElementById("btn_input");
    
    if (isNaN(num1) || isNaN(num2)) {
        let resultErrorZnach = "Числа введены не корректно. Повторите еще раз";
        text.innerHTML = resultErrorZnach;
        return;
    }
    if (num1 < 0 || num2 < 0) {
        let resultErrorOtric = "Введено отрицательное число. Введите положительное число.";
        text.innerHTML = resultErrorOtric;
        return;
    }
    if (num1 % 2 != 0 || num2 % 2 != 0) {
        let resultTrue = "TRUE - хотя бы одно из введенных чисел является нечетным";
        text.innerHTML = resultTrue;
        return;
    }
    let resultFalse = "FALSE - числа четные";
    text.innerHTML = resultFalse;
}


function showSortirovka() {
    let num1 = document.getElementById("zadanie2_1").replace(',', '.');
    num1 = parseFloat(num1.value);
    
    let num2 = document.getElementById("zadanie2_2").replace(',', '.');
    num2 = parseFloat(num2.value);
    
    let text = document.getElementById("btn_input2");
    
    if (isNaN(num1) || isNaN(num2)) {
        let resultErrorZnach = "Числа введены не корректно. Повторите еще раз";
        text.innerHTML = resultErrorZnach;
        return;
    }
    if (num1 < 0 || num2 < 0) {
        let resultErrorOtric = "Введено отрицательное число. Введите положительное число.";
        text.innerHTML = resultErrorOtric;
        return;
    }
    
    //if (num2 < num1) {
    //let i = num2;
    //num2 = num1;
    //num1 = i;
    //}
    
    let result = "Число a = " + num1 + ", Число b = " + num2;
    text.innerHTML = result;
}

