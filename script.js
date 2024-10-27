'use strict'

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;


const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function() {
  title = prompt('Как называется ваш проект?', 'Онлайн-магазин');
  screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
  do {
    screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');
  } while (!isNumber(screenPrice));
  adaptive = confirm('Нужен ли адаптив на сайте?');
};

const getAllServicePrices = function () {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt('Какой дополнительный тип услуги нужен?', 'что-то');
    } else if (i === 1) {
      service2 = prompt('Какой дополнительный тип услуги нужен?', 'что-то');
    };
    while (!isNumber(prompt('Сколько это будет стоить?', '1000'))) {
      sum += +prompt('Сколько это будет стоить?', '1000');
    };
  };
  return sum;
};

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

function getFullPrice() {
  return screenPrice + allServicePrices;
};

const getServicePercentPrices = function () {
  return fullPrice - (fullPrice * rollback / 100);
};

function getTitle(title) {
  title = title.trim(); // Убираем пробелы
  if (title.length === 0) return ""; // Если пустая строка, то возвращаем пустую строку
  return title[0].toUpperCase() + title.slice(1).toLowerCase(); // Первый символ в верхний регистр, остальные в нижний
};

const getRollbackMessage = function(price) {
  if (price > 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && price <= 30000) {
    return "Даем скидку в 5%";
  } else if (price >= 0 && price < 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что-то пошло не так";
  };
};

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle(title);

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