'use strict';

let money = +prompt('Ваш бюджет на месяц?');
console.log(money);
let time = prompt('Введите дату в формате YYYY-MM-DD');
console.log(time);




let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};




for (let i = 0; i < 2; i++) {
    let sale = prompt('Введите обязательную статью расходов в этом месяце');
    let howMuch = prompt('Во сколько обойдется?');
    if (typeof(sale) === 'string' && (typeof(sale)) != null && (typeof(howMuch)) != null && sale != '' && howMuch != '' && sale.length < 50) {
        console.log("done");
        appData.expenses[sale] = howMuch;
    } else {
        console.log("not donee");
        i--;
    }

}
// let i = 0;
// do {
//     i++;
//     let sale = prompt('Введите обязательную статью расходов в этом месяце');
//     let howMuch = prompt('Во сколько обойдется?');
//     appData.expenses[sale] = howMuch;
// }
// while (i < 2);

// let i = 0;
// while (i < 2) {
//     i++;
//     let sale = prompt('Введите обязательную статью расходов в этом месяце');
//     let howMuch = prompt('Во сколько обойдется?');
//     appData.expenses[sale] = howMuch;
// }


appData.moneyPerDay = appData.budget / 30;


alert("Ежедневный бюджет:" + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}