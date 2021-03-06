/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }
e
Проверить, чтобы все работало без ошибок в консоли */

'use strict';

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    let lastFilm = prompt(" Один из последних просмотренных фильмов?", '');
    let grad = +prompt("На сколько оценишь его?", '');
    if (lastFilm != null && grad != null && lastFilm != '' && grad != '') {
        personalMovieDB.movies[lastFilm] = grad;
        console.log("done");
    } else {
        console.log('eror');
        i--;
    }







}
// let i = 0;
// while (i < 2) {
//     i++;
//     let lastFilm = prompt(" Один из последних просмотренных фильмов?", '');
//     let grad = +prompt("На сколько оценишь его?", '');
//     if (lastFilm != null && grad != null && lastFilm != '' && grad != '') {
//         personalMovieDB.movies[lastFilm] = grad;
//         console.log("done");
//     } else {
//         console.log('eror');
//         i--;
//     }
// }

// let i = 0;
// do {
//     i++;
//     let lastFilm = prompt(" Один из последних просмотренных фильмов?", '');
//     let grad = +prompt("На сколько оценишь его?", '');
//     if (lastFilm != null && grad != null && lastFilm != '' && grad != '') {
//         personalMovieDB.movies[lastFilm] = grad;
//         console.log("done");
//     } else {
//         console.log('eror');
//         i--;
//     }
// } while (i < 2);

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов!");
} else
if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классный зритель!");
} else
if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("eror");
}

console.log(personalMovieDB);