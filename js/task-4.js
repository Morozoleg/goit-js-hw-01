const credits = 23580;
const pricePerDroid = 3000;
let message;
const enteredData = prompt ('Введите количество дроидов, которое желаете купить');
if (enteredData === null) {
    message = 'Отменено пользователем!';
} else {
    const totalPrice = pricePerDroid * enteredData;
message =
totalPrice > credits
? 'Недостаточно средств на счету!'
: `Вы купили ${enteredData} дроидов, на счету осталось ${credits - totalPrice} кредитов.`
}
console.log(message);
