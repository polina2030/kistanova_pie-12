//Задание 1
//функция для проверки условия «Хотя бы одно из чисел A и B нечетное».
function showParity(){
    let num1 = document.getElementById("task1_1");
    num1 = parseInt(num1.value);
    
    let num2 = document.getElementById("task1_2");
    num2 = parseInt(num2.value);
    
    let text = document.getElementById("btn_input");
    //проверка на пустое значение и значение которое является не цифрой
    if (isNaN(num1) || isNaN(num2)) {
        let resultErrorZnach = "Ответ: Числа введены не корректно. Повторите еще раз";
        text.innerHTML = resultErrorZnach;
        return;
    }
    //проверка на отрицательное число
    if (num1 < 0 || num2 < 0) {
        let resultErrorOtric = "Ответ: Введено отрицательное число. Введите положительное число.";
        text.innerHTML = resultErrorOtric;
        return;
    }
    //проверка условия по заданию
    if (num1 % 2 != 0 || num2 % 2 != 0) {
        let resultTrue = "Ответ: Исходные значения: а = " + num1 + ", b = " + num2 + ". TRUE - хотя бы одно из введенных чисел является нечетным";
        text.innerHTML = resultTrue;
    }
    else{
        let resultFalse = "Ответ: Исходные значения: а = " + num1 + ", b = " + num2 + ". FALSE - числа четные";
        text.innerHTML = resultFalse;
    }
    //очищение полей
    document.getElementById("task1_1").value = "";
    document.getElementById("task1_2").value = "";
}

//Задание 2
//функция для сотрировки значений. В а меньшее, в b большее
function showSorting(){
    let num3 = document.getElementById("task2_1").value.replace(',', '.');
    num3 = parseFloat(num3);
    
    let num4 = document.getElementById("task2_2").value.replace(',', '.');
    num4 = parseFloat(num4);
    
    let text = document.getElementById("btn_input2");
    
    //проверка на пустое значение и значение которое является не цифрой
    if (isNaN(num3) || isNaN(num4)) {
        let resultErrorZnach = "Ответ: Числа введены не корректно. Повторите еще раз";
        text.innerHTML = resultErrorZnach;
        return;
    }
    //значения для вывода
    let i = num4;
    let j = num3;
    
    //проверка условия по заданию
    if (num4 < num3) {
        num4 = num3;
        num3 = i;
    }
    
    let result = "Ответ: Исходные значения: а = " + j + ", b = " + i + ". Вывод: число a = " + num3 + ", " + "число b = " + num4;
    text.innerHTML = result;
    document.getElementById("task2_1").value = "";
    document.getElementById("task2_2").value = "";
}



//Задание 3
//функция для нахождения значения функции
function calculating_func(){
    let x = document.getElementById("task3_1").value.replace(',', '.');
    x = parseFloat(x);
    let a = 1.8;
    let b = 3.3;
    
    let text = document.getElementById("btn_input3");
    
    //проверка на пустое значение и значение которое является не цифрой
    if (isNaN(x)) {
        let resultErrorZnach = "Ответ: Число введено некорректно. Повторите еще раз";
        text.innerHTML = resultErrorZnach;
        return;
    }
    //проверка условия по заданию
    if (x<=3) {
        let func = Math.pow((a * x) + 1, 4);
        let result = "Ответ: При значении x = " + x + ", " + "функция равна = " + func;
        text.innerHTML = result;
    }
    else if (x > 3 && x <= 5){
        let func2 = 1 / (2 * Math.pow(x, 2) + b * Math.log(x));
        let result2 = "Ответ: При значении x = " + x + ", " + "функция равна = " + func2;
        text.innerHTML = result2;
    }
    else{
        let func3 = a * Math.pow(Math.cos(b + x), 2);
        let result3 = "Ответ: При значении x = " + x + ", " + "функция равна = " + func3;
        text.innerHTML = result3;
    }
    document.getElementById("task3_1").value = "";
}

//Задание 4
//функция для нахождения значения функции (switch)
function calculating_func_switch(){
    let x = document.getElementById("task4_1").value.replace(',', '.');
    x = parseFloat(x);
    let a = 1.8;
    let b = 3.3;
    
    let text = document.getElementById("btn_input4");
    //проверка на пустое значение и значение которое является не цифрой
    if (isNaN(x)) {
        let resultErrorZnach = "Ответ: Число введено некорректно. Повторите еще раз";
        text.innerHTML = resultErrorZnach;
        return;
    }
    //проверка условия по заданию
    switch (x) {
        case 3:
            let func = Math.pow((a * x) + 1, 4);
            let result = "Ответ: При значении x = " + x + ", " + "функция равна = " + func;
            text.innerHTML = result;
            break;
        case 4:
            let func2 = 1 / (2 * Math.pow(x, 2) + b * Math.log(x));
            let result2 = "Ответ: При значении x = " + x + ", " + "функция равна = " + func2;
            text.innerHTML = result2;
            break;
        case 6:
            let func3 = a * Math.pow(Math.cos(b + x), 2);
            let result3 = "Ответ: При значении x = " + x + ", " + "функция равна = " + func3;
            text.innerHTML = result3;
            break;
        default:
            let result4 = "Ответ: При значении x = " + x + ", " + "введены неверные значения функции.";
            text.innerHTML = result4;
    }
    document.getElementById("task4_1").value = "";
}

