//Задание 1
//функция для нахождения в наборе чисел отрицательных чисел.
function checksNegative(){
    let num1 = document.getElementById("task4_1_1");
    num1 = parseInt(num1.value);
    
    let num2 = document.getElementById("task4_1_2");
    num2 = parseInt(num2.value);
    
    let text = document.getElementById("btn_input");
    //проверка на пустое значение и значение которое является не цифрой
    if (isNaN(num1) || isNaN(num2)) {
        let resultErrorZnach = "Числа введены не корректно. Повторите еще раз";
        text.innerHTML = resultErrorZnach;
        return;
    }
    //проверка на то что A меньше И (по условию)
    if (num1 > num2) {
        let resultError = "Неверно. Значение А должно быть меньше B";
        text.innerHTML = resultError;
        return;
    }
    
    //цикл для нахождения отрицательных чисел
    for (num1; num1<=num2;num1++) {
        if (num1 < 0) {
            let resultO = "Результат: False.Есть отрицательные числа";
            text.innerHTML = resultO;
            return;
        }
    }
    let resultP = "Результат: True. Числа положительные";
    text.innerHTML = resultP;
}



//Задание 2
//функция для нахождения суммы квадратов чисел в наборе от А до B.
function showSquare(){
    let num1 = document.getElementById("task4_2_1");
    num1 = parseInt(num1.value);
    
    let num2 = document.getElementById("task4_2_2");
    num2 = parseInt(num2.value);
    
    let text = document.getElementById("btn_input2");
    
    //проверка на пустое значение и значение которое является не цифрой
    if (isNaN(num1) || isNaN(num2)) {
        let resultErrorZnach = "Числа введены не корректно. Повторите еще раз";
        text.innerHTML = resultErrorZnach;
        return;
    }
    
    //проверка на то что A меньше И (по условию)
    if (num1 > num2) {
        let resultError = "Неверно. Значение А должно быть меньше B";
        text.innerHTML = resultError;
        return;
    }
    //цикл для суммы квадратов чисел
    let sum = 0;
    let A = num1;
    for (num1; num1<=num2;num1++) {
        sum = Math.pow(num1, 2) + sum;
    }
    
    text.innerHTML = 'Результат: сумма квадратов всех целых чисел от ' + A + ' до ' + num2 + ' = ' + sum;
}

