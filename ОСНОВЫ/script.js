'use strict';

// // Первая программа на JavaScript
// console.log('Hello World!');

// // ===== Использование переменных =====
// let num;
// num = 123;
// console.log(num);

// // ===== Объявление нескольких переменных в JavaScript =====
// let a = 1;
// let b = 2;
// let c = 3;

// let d = 1, e = 2, f = 3;

// let x, y, z; // объявляем 3 переменные

// // Присваиваем каждой переменной значение
// x = 1;
// y = 2;
// z = 3;

// // ===== Изменения значений переменных =====
// let a1; // объявляем переменную

// a1 = 10; // записываем в нее значение 10
// console.log(a1); // выводим значение переменной а1 в консоль

// a1 = 20; // меняем значение переменной а1 на 20
// console.log(a1); // выводим значение переменной а1 в консоль

// // ===== Несколько let для одной переменной =====

// //нельзя объявить несколько раз через let

// // Можно просто ввести две разных переменных
// let a2 = 1;
// console.log(a2);

// let b2 = 2;
// console.log(b2);

// // можно вначале объявить переменную a, а затем делать операции с нею:
// let a3;

// a3 = 1;
// console.log(a3);

// a3 = 2;
// console.log(a3);

// // ===== Математические операции с числами =====
// let a4;

// a4 = 1 + 2; // сложение
// console.log(a4);

// a4 = 2 - 1; // вычитание

// a4 = 2 * 3; // умножение
// console.log(a4);

// a4 = 10 / 2; // деление
// console.log(a4);

// // ===== Математические операции с переменными =====
// // №1
// let x1 = 1;
// let y1 = 2;
// console.log(x1 + y1);

// // №2
// let c1 = 10;
// let d1 = 5;
// let result = c1 + d1;
// console.log(result);

// // №3
// let a = 1;
// let b = 2;
// let c = 3;
// console.log(a + b + c); // 6

// // №4
// let a = 10;
// let b = 5;
// let c = a + b;
// let d = 7;
// let result = c + d;
// console.log(result); // 22

// ===== Приоритет математических операций =====

// в начале выполняется умножение и деление, а потом уже сложение и вычитание.

// №1
// let a = 5 + 5 * 3;
// console.log(a); // 20

// №2
// let a = 5 + 5 * 3 + 3;
// console.log(a); // 23

// №3
// let a = 8 / 2 + 2;
// console.log(a); // 6

// №4
// let a = 8 + 2 / 2;
// console.log(a); // 9

// ===== Равный приоритет математических операций =====

// Умножение и деление имеют равный приоритет и выполняются по очереди слева направо.

// №1
// let a = 8 / 2 * 2;
// console.log(a); // 8

// №2
// let a = 8 * 4 / 2 / 2;
// console.log(a); // 8

// ===== Группирующие скобки =====

// приоритет операций с помощью круглых скобок

// №1
// let a = (2 + 3) * (2 + 3)
// console.log(a); // 25

// №2
// let a = (2 + 3) * 2 + 3;
// console.log(a); // 13

// №3
// let a = 2 * (2 + 4 * (3 + 1));
// console.log(a); // 36

// №4
// let a = 2 * 8 / 4;
// console.log(a); // 4

// №5
// let a = (2 * 8) / 4;
// console.log(a); // 4

// №6
// let a = 2 * (8 / 4);
// console.log(a); // 4

// ===== Дроби в JavaScript =====

// №1
// let a = 1.5;
// let b = 0.75;
// console.log(a + b); // 2.25

// ===== Отрицательные числа в JavaScript =====

// №1
// let a = -100;
// console.log(a); // -100

// №2
// let a  = 10;
// console.log(-a); // -10
// let b = -10;
// console.log(b); // -10

// ===== Плюс перед числами в JavaScript =====
// let a = +1;
// console.log(a); // выведет 1

// ===== Остаток от деления % =====

// №1
// let a = 13;
// let b = 5;
// console.log(a % b); // 3

// ===== Возведение в степень ** =====

// №1
// console.log(2 ** 10); // 1024

// ===== Приоритет возведения в степень =====

// №1
// let a = 3 * 2 ** 3;
// console.log(a); // 24

// №2
// let a = (3 * 2) ** 3;
// console.log(a); // 216

// №3
// let a = 3 * 2 ** (3 + 1);
// console.log(a); // 48

// №4
// let a = 2 ** 3 * 3;
// console.log(a); // 24

// №5
// let a = 3 * 2 ** 3 * 3;
// console.log(a); // 72

// ===== Строки в JavaScript =====

// №1
// let name1 = 'Aleksey';
// let surname = 'Borozdkin';
// console.log(name1, surname); // Aleksey Borozdkin

// ===== Сложение строк =====

// №1
// let str = '!!!';
// console.log(str); // !!!

// №2
// let str1 = 'java';
// let str2 = 'script';
// console.log(str1 + str2); // javascript

// №3
// let str1 = 'hello';
// let str2 = 'world';
// console.log(str1 + ' ' + str2); // hello world

// ===== Длина строки в JavaScript =====

// №1
// let str = 'конституция';
// console.log(str.length); // 11

// ===== Шаблонные строки =====

// №1
// let str1 = 'xxx';
// let str2 = 'yyy';
// let txt = `aaa ${str1} bbb ${str2} ccc`;
// console.log(txt); // aaa xxx bbb yyy ccc

// ===== Многострочность =====

// №1
// let str = `
// a,
// b,
// c
// `;
// console.log(str);

// ===== Специальные значения в JavaScript =====

// undefined, null, true, false, NaN, Infinity, -Infinity

// ===== Значение undefined =====

// №1
// let a;
// console.log(a); // undefined

// ==== Значение null =====

// №1
// let a = null;
// console.log(a); // null

// ===== Значения true и false =====

// №1
// let a = true;
// console.log(a); // true

// let b = false;
// console.log(false); // false

// ===== Значение NaN =====

// №1
// let a = 'xxx';
// let b = 'yyy';
// console.log(a * b); // NaN (не число)

// ===== Infinity и -Infinity в JavaScript =====

// №1
// let a = 10 / 0;
// console.log(a); // Infinity

// let b = -10 / 0;
// console.log(b); // -Infinity

// ===== Работа с консолью =====

// №1
// let a = 123;
// console.log(a); // 123

// let num1 = 1;
// let num2 = 2;
// let num3 = 3;
// console.log(num1, num2, num3); // 1 2 3

// ===== Автоматическое преобразование типов данных =====

// №1
// let a = '5' + '2';
// console.log(a); // 52

// №2
// let a = '5' + 2;
// console.log(a); // 52

// №3
// let a = 5 + '2';
// console.log(a); // 52

// №4
// let a = 5 + 2;
// console.log(a); // 7

// №5
// let a = '5' * '2';
// console.log(a); // 10

// №6
// let a = '5' - '2';
// console.log(a); // 3

// №7
// let a = '5' / '2';
// console.log(a); // 2.5

// №8
// let a = '5' % '2';
// console.log(a); // 1

// №9
// let a = '5s' * '2';
// console.log(a); // NaN, потому что '5s'- не число

// №10
// let a = '5s' + '2';
// console.log(a); // 5s2

// №11
// let a = ('-5') + ('-2');
// console.log(a); // -5-2

// №12
// let a = '5' * 1 + '2' * 1; // в случае умножения строки преобразуются в цифры и числа
// console.log(a); // 7

// №13
// let a = '5' * '1' + '2' * '1';
// console.log(a); // 7

// №14
// let a = '' + 3 + 2; // в случае сложения цифры преобразуются в строки
// console.log(a); // 32

// ===== Преобразование к числу с помощью функции Number =====
// функция Number работает только со строками из цифр и чисел

// №1
// let a = '10';
// let b = '20';
// console.log(Number(a) + Number(b)); // 30

// // №2
// console.log(Number('3') + Number('2')); // 5

// // №3
// console.log(2 + Number('3')); // 5

// // №4
// console.log('2' + Number('3')); // 23

// ===== Сокращенное преобразование к числу =====

// для сокращения кода вместо Number перед строкой можно ставить знак +

// №1
// let a = +'2';
// let b = +'3';
// console.log(a + b); // 5

// №2
// let a = '2';
// let b = '3'
// console.log(+a + +b); // 5 // Работает, но лучше с функцией Number

// ==== Преобразование некорректных чисел =====

// let a = '2s'; // цифры вместе с буквами
// console.log(Number(a)); // вернет NaN, так как 2s это не число

// console.log(+'2s'); // вернет тоже NaN

// ===== Выделение чисел с помощью parseInt  и parseFloat =====
// - parseInt для строк типа '12px' убирает px
// - parseFloat для строк типа '2.5em' убирает em

// №1
// let a = '5px';
// let b = '6px';
// console.log(parseInt(a) + parseInt(b)); // 11

// №2
// let a = '5.5px';
// let b = '6.25px';
// console.log(parseFloat(a) + parseFloat(b)); // 11.75

// №3
// let a = '5.5px';
// let b = '6.25';
// console.log(parseFloat(a) + parseFloat(b) + 'px'); // 11.75px

// ===== Преобразование к строке с помощью функции String =====
// String преобразует цифры и числа в строки

// №1
// let a = 12;
// let b = 6;
// console.log(String(a) + String(b)); // 126

// ===== Применение преобразования к строкам =====

// №1 - Найдите количество цифр в числе.
// let num = 123456789;
// console.log(String(num).length); // 9

// №2 - Найдите количество цифр в одном и во втором числе, результаты сложить
// let a = 12345;
// let b = 67890;
// console.log(String(a).length + String(b).length); // 10

// let a = 12345;
// let b = 67890;
// let c = String(a);
// let d = String(b);
// console.log(c.length + d.length); // 10

// ===== Преобразование логического типа =====
// Number(true) = 1; Number(false) = 0;
// String(true) = 'true'; String(false) = 'false';

// №1
// console.log(true + 3); // 4 (true = 1; 1 + 3 = 4)

// №2
// console.log(true + true); // 2

// №3
// console.log(true - true); // 0

// №4
// console.log(true + false); // 1

// №5
// console.log('1' + true); // 1true

// №6
// console.log(String(true) + 1); // true1

// №7
// console.log(String(true) + Number(true)); // true1

// ===== Преобразование к логическому типу с помощью Boolean() =====

// значения, которые при приведению к логическому типу дают false:
// console.log(Boolean(0)); // false
// console.log(Boolean(+0)); // false
// console.log(Boolean(-0)); // false
// console.log(Boolean(false)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean('')); // false

// значения, приводящиеся к true
// console.log(Boolean(-1)); // true
// console.log(Boolean(1)); // true
// console.log(Boolean(Infinity)); // true
// console.log(Boolean(-Infinity)); // true

// значения являются строками, также приводятся к true
// console.log(Boolean('0')); // true
// console.log(Boolean('false')); // true
// console.log(Boolean('NaN')); // true
// console.log(Boolean('null')); // true
// console.log(Boolean('undefined')); // true

// №1
// let test = Boolean(3);
// console.log(test); // true

// №2
// let test = Boolean(0);
// console.log(test); // false

// №3
// let test = Boolean(-1);
// console.log(test); // true

// №4
// let test = Boolean(-0);
// console.log(test); // false

// №5
// let test = Boolean(+0);
// console.log(test); // false

// №6
// let test = Boolean('abc');
// console.log(test); // true

// №7
// let test = Boolean('');
// console.log(test); // false

// №8
// let test = Boolean('0');
// console.log(test); // true

// №9
// let test = Boolean(true);
// console.log(test); // true

// №10
// let test = Boolean(false);
// console.log(test); // false

// №11
// let test = Boolean('true');
// console.log(test); // true

// №12
// let test = Boolean('false');
// console.log(test); // true

// №13
// let test = Boolean(null);
// console.log(test); // false

// №14
// let test = Boolean('null');
// console.log(test); // true

// №15
// let test = Boolean(undefined);
// console.log(test); // false

// №16
// let test = Boolean('undefined');
// console.log(test); // true

// №17
// let test = Boolean(NaN);
// console.log(test); // false

// №18
// let test = Boolean('NaN');
// console.log(test); // true

// №19
// let test = Boolean(3 * 'abc'); // 3 * 'abc' - NaN
// console.log(test); // false

// №20
// let test = Boolean(Infinity);
// console.log(test); // true

// №21
// let test = Boolean(1 / 0);
// console.log(test); // true

// ===== Получение символов строки =====

// №1
// let str = 'abcde';
// console.log(str[0]); // a
// console.log(str[2]); // c
// console.log(str[4]); // e

// №2
// let str = 'abcde';
// console.log(str[4] + str[3] + str[2] + str[1] + str[0]); // edcba

// №3
// let str = 'abcde';
// let num = str[2];
// console.log(num); // c

// ===== Неизменяемость строк =====
// Символы строк можно читать, но нельзя изменять.

// let str = 'abcde';
// str[0] = '!';
// console.log(str); // Uncaught TypeError: Cannot assign to read
// only property '0' of string 'abcde'

// ===== Последний символ строки =====

// №1
// let str = 'abcde';
// let last = str.length - 1;
// console.log(last); // 4

// let str = 'abcde';
// let last = str.length - 1;
// console.log(str[last]); // e

// let str = 'abcde';
// console.log(str[str.length - 1]); // e