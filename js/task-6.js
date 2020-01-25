let total = 0;
do {
  let inputData = prompt('Введите число');

  if (inputData === null) {
    break;
  }

  inputData = Number(inputData);

  const notANumber = Number.isNaN(inputData);

  if (notANumber) {
    continue;
  }

  total += inputData;
} while (true);
alert(`Общая сумма чисел равна ${total}`);
