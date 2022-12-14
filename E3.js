// // Задание 1.
const arr1 = [2, 67, 89, 23, 91, 12, 67, 23, 7, 11, 786, 1987656, 0, '', 0, 0, true, false, 7]
const arr2 = [-7, -2, 0, 2, 7, NaN, Infinity, '12', '', true, false]

function getCountEvenOdd(arr = []) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;
    for (i = 0; i < arr.length; i++) {
        if (Number.isFinite(arr[i])) {
            if (arr[i] === 0) {
                zeroCount++
            } else if (arr[i] % 2 === 0 || arr[i] % 2 === -0) {
                evenCount++
            } else if (arr[i] % 2 === 1 || arr[i] % 2 === -1) {
                oddCount++
            }
            ;
        }
    }

    console.log(`Количетво четных чисел в массиве равно = ${evenCount}`)
    console.log(`Количетво нечетных чисел в массиве равно = ${oddCount}`)
    if (zeroCount) {
        console.log(`Количетво нулей в массиве равно = ${zeroCount}`)
    }
}

getCountEvenOdd(arr2);


// Задание 2.
// Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым,
// и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны.
// Обратите внимание на числа 0 и 1.

let primeNumber = 17;

function findPrimeNumber(n) {
    i = n - 1
    while (i > 1) {
        if (n % i === 0) {
            break;
        } else {
            i--
        }
    }
    if (i > 1) {
        return `${n} не является простым числом!`;
    } else {
        return `${n} является простым числом!`;
    }
}


if (isFinite(primeNumber)) {
    if (primeNumber === 0 || primeNumber === 1) {
        console.log(`${primeNumber} не является простым числом!`)
    } else if (primeNumber > 1000) {
        console.log('Данные не верны. Вы ввели число больше 1000.')
    } else if (primeNumber === 2) {
        console.log(`${primeNumber} является простым числом!`)
    } else if (primeNumber > 3 && primeNumber < 1000) {
        console.log(findPrimeNumber(primeNumber).toString())
    } else {
        console.log('Данные не верны. Вы ввели не верное число.')
    }
} else {
    console.log('Данные не верны. Вы ввели не число.')
}


// Задание 3.
// Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент
// и возвращает сумму этих двух чисел. Выведите в консоль результат.

function fr(a) {
    return function (b) {
        return `${a + b}`
    }
}

sec = fr(4);
console.log(sec(86))


// Задание 4.
// Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и
// заканчивая вторым. Используйте setInterval.
// Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, начиная с 5 и
// заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).

function logNumbers(begin, end) {
    let current = begin;

    let timerId = setInterval(function() {
        console.log(current);
        if (current == end) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

logNumbers(5, 15);



// Задание 5.
// Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n.
// Иначе говоря, умножает x на себя n раз и возвращает результат.
// Используйте Arrow Function синтаксис.
// Протестируйте функцию на любых значениях и выведите результат в консоль.

const funcXN = (x, n) => {
    return  (x ** n)
}

console.log(funcXN(2, 111))