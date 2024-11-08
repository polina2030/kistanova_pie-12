function SredGeom() {
    let num1 = parseFloat(prompt("Введите первое число:").replace(',', '.'));
    let num2 = parseFloat(prompt("Введите второе число:").replace(',', '.'));
    if (isNaN(num1) || isNaN(num2)) {
        alert("Числа введены не корректно. Повторите еще раз");
        return;
    }
    if (num1 < 0 || num2 < 0) {
        alert("Введено отрицательное число. Введите положительное число.");
        return;
    }
    
    let sred_geom = Math.sqrt(num1 * num2);
    alert("Среднее геометрическое: " + sred_geom);
}


function Delen() {
    let num3 = parseInt(prompt("Введите трехзначное число"));
    if (isNaN(num3)) {
        alert("Числа введены неккоректно. Повторите еще раз");
        return;
    }
    if (num3 < 100 || num3 > 999) {
        alert("Число введено неверно. Введите трехзначное число");
        return; 
    }
    let delen = Math.floor(num3 / 100);
    alert("Первая цифра (сотни): " + delen);
}






