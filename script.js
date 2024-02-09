// Задание 1
// Создайте функцию которая возводит переданное число в куб,
// необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

// const cube = x => Math.pow(x,3);

// console.log(cube(2,3));
// console.log(cube(3,3));

// ------------------------------------------------------------------------


// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст,
// необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от
// данного числа и выводит в консоль текст
// "Размер заработной платы за вычетом налогов равен значение"

// let grossSalary = Number(prompt("Введите размер зар.платы GROSS"));
// let netSalary = value => value*0.87;

// if(typeof grossSalary === "number" && !isNaN(grossSalary)){
//     console.log(`Размер заработной платы за вычетом налогов равен ${netSalary(grossSalary)}`);
// } else {
//     console.log("Ошибка! Введите число")
// }


// ------------------------------------------------------------------------


// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию,
// которая определяет максимальное значение среди этих чисел

// let num1 = Number(prompt("Введите первое число"));
// let num2 = Number(prompt("Введите второе число"));
// let num3 = Number(prompt("Введите третье число"));

// const numMax = function maxValue(num1, num2, num3){
//     let max = null;
//     if (num1 > num2 && num1 > num3 && num1 != num2 && num1 != num3){
//         max = num1;
//     } else if(num2 > num1 && num2 > num3 && num2 != num1 && num2 != num3){
//         max = num2;
//     } else if(num3 > num1 && num3 > num2 && num3 != num1 && num3 != num2){
//         max = num3;
//     } else if(num2 === num3 && num1 > num2 && num1 > num3){
//         max = num1;
//     } else if (num1 === num3 && num2 > num1 && num2 > num3){
//         max = num2;
//     } else if(num1 === num2 && num3 > num1 && num3 > num2){
//         max = num3;
//     } else if(num1 === num2 && num1 > num3 && num2 > num3){
//         max = num1;
//     } else if(num2 === num3 && num2 > num1 && num3 > num1){
//         max = num2;
//     } else if(num1 === num3 && num3 > num2 && num1 > num2){
//         max = num3;
//     } else {
//         max = num1;
//         console.log(`все значения равны и равно ${num1}`)}
    
//     return max;
// }

// console.log(`Первое число ${num1}, второе число ${num2}, третье число ${num3} - максимальное число ${numMax(num1, num2, num3)}`);


// ----------------------------------------------------------------------------------------------------------------------------------------------------



// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа 
// и выполнять одну из операций (каждая функция выполняет одну из них):
// 
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); 
// должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). 
// Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, 
// функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, 
// проверки на NaN, Infinity делать не нужно.

let sum = function valueSam(num1, num2){
    let res = num1 + num2;
    return res;
}

let subtraction = function valueSam(num1, num2){
    let res = null;
    if(num1 > num2){
        res = num1 - num2;        
    } else if(num2 > num1){
        res = num2 - num1;
    } else return 0;
    return res;
}


let multiplication = function mult(num1, num2){
    let res = num1 * num2;
    return res;
}


let division = function div(num1, num2){
    let res = null;
    if(num2 === 0){
        console.log("На ноль делить нельзя");
    } else res = num1 / num2;
    return res;
}


console.log(`результат сложения: ${sum(2,3)}`);
console.log(`результат разности: ${subtraction(5,5)}`);
console.log(`результат уножения: ${multiplication(2,3)}`);
console.log(`результат  деления: ${division(9,2)}`);