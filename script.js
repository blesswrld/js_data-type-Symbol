'use strict';

// const obj = {
//     'name': 'Test',
//     [Symbol("id")]: 1,
//     getId: function() {
//         return this[id];
//     }
// }

// // let id = Symbol("id");

// // obj[id] = 1;

// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

// for (let value in obj) console.log(value);

// Создаём объект с двумя массивами и символом в качестве ключа свойства
const myAwesomeDB = {
    movies: [], // Массив фильмов
    actors: [], // Массив актёров
    [Symbol.for("id")]: 123 // Уникальный ключ с символом
}

// Сторонний код библиотеки

myAwesomeDB.id = '32323232'; // Добавляем обычное свойство id, не влияющее на Symbol

console.log(myAwesomeDB[Symbol.for('id')]); // Получаем значение символического свойства (123)
console.log(myAwesomeDB); // Показываем весь объект, включая обычное свойство id и символ

