let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
let rollback = 5;
let allServicePrices = function getAllServicePrices() {
  return servicePrice1 + servicePrice2;
};
let fullPrice = getFullPrice();
let servicePercentPrice = getServicePercentPrices();
function getServicePercentPrices() {
  return fullPrice - (fullPrice * rollback / 100);
}
function getFullPrice() {
  return screenPrice + allServicePrices();
}
function getTitle(title) {
  title = title.trim(); // Убираем пробелы
  if (title.length === 0) return ""; // Если пустая строка, то возвращаем пустую строку
  return title[0].toUpperCase() + title.slice(1).toLowerCase(); // Первый символ в верхний регистр, остальные в нижний
}
const getRollbackMessage = function(price) {
  if (price > 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && price <= 30000) {
    return "Даем скидку в 5%";
  } else if (price >= 0 && price < 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что-то пошло не так";
  }
};
const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);
console.log('Типы экранов:', ' ', screens);
console.log('Стоимость за вычетом процента отката посреднику:', ' ', Math.ceil(getServicePercentPrices()));
console.log(getRollbackMessage(fullPrice));
// console.log(title = getTitle(title));
// console.log(screenPrice);
// console.log(adaptive);
// console.log('Сумма:', fullPrice);
// console.log(allServicePrices());
// console.log(typeof title);
// console.log(typeof fullPrice);
// console.log(typeof adaptive);
// console.log(screens.length);
// console.log(screenPrice + "$");
// console.log(fullPrice + "$");
// console.log(screens.toLowerCase().split(","));
// console.log(fullPrice * (rollback / 100));