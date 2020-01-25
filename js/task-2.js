const total = 100;
let ordered = 20;
const messageApproved = 'Заказ оформлен, с вами свяжется менеджер';
const messageRegect = 'На складе недостаточно товаров!';

console.log(
  ordered > 0 && ordered <= total
? messageApproved : messageRegect)

ordered = 80;
console.log(
  ordered > 0 && ordered <= total
? messageApproved : messageRegect)

ordered = 130;
console.log(
  ordered > 0 && ordered <= total
? messageApproved : messageRegect)