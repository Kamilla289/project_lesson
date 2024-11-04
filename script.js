'use strict'

const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: '',
  service2: '',
  
  asking() {
    appData.title = prompt('Как называется ваш проект?', 'Онлайн-магазин');
    appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
    do {
      appData.screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');
    } while (!appData.isNumber(appData.screenPrice));
    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
  },


  isNumber(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },


  getAllServicePrices() {
    let sum = 0;
    let price;
    for (let i = 0; i < 2; i++) {
      const service = prompt('Какой дополнительный тип услуги нужен?', 'что-то');
      do {
        price = +prompt('Сколько это будет стоить?', '1000');
      } while (!appData.isNumber(price));
      sum += price;
    }
    appData.allServicePrices = sum;
  },


  getFullPrice() {
    appData.fullPrice = appData.screenPrice + appData.allServicePrices;
  },


  getServicePercentPrices() {
    appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * appData.rollback / 100);
  },


  getTitle() {
    appData.title = appData.title.trim();
    if (appData.title.length === 0) return "";
    appData.title = appData.title[0].toUpperCase() + appData.title.slice(1).toLowerCase();
  },


  getRollbackMessage() {
    if (appData.fullPrice > 30000) {
      return "Даем скидку в 10%";
    } else if (appData.fullPrice >= 15000 && appData.fullPrice <= 30000) {
      return "Даем скидку в 5%";
    } else if (appData.fullPrice >= 0 && appData.fullPrice < 15000) {
      return "Скидка не предусмотрена";
    } else {
      return "Что-то пошло не так";
    }
  },


  start() {
    appData.asking();
    appData.getAllServicePrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();
    appData.logger();
  },

  logger() {
    for (let key in appData) {
      console.log(key + ':', appData[key]);
    }
  }
};

appData.start();


