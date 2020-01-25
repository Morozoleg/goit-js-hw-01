const ADMIN_PASSWORD = "jqueryismyjam";
let message;
let enterPass = prompt("Введите пароль");
if (enterPass === null) {
  message = "Отменено пользователем!";
} else {
  message =
    enterPass === ADMIN_PASSWORD
      ? "Добро пожаловать!"
      : "Доступ запрещен, неверный пароль!";
}
alert(message);
