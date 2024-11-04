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
    this.title = prompt('Как называется ваш проект?', 'Онлайн-магазин');
    this.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
    do {
      this.screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');
    } while (!this.isNumber(this.screenPrice));
    this.adaptive = confirm('Нужен ли адаптив на сайте?');
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
      } while (!this.isNumber(price));
      sum += price;
    }
    this.allServicePrices = sum;
  },


  getFullPrice() {
    this.fullPrice = this.screenPrice + this.allServicePrices;
  },


  getServicePercentPrices() {
    this.servicePercentPrice = this.fullPrice - (this.fullPrice * this.rollback / 100);
  },


  getTitle() {
    this.title = this.title.trim();
    if (this.title.length === 0) return "";
    this.title = this.title[0].toUpperCase() + this.title.slice(1).toLowerCase();
  },


  getRollbackMessage() {
    if (this.fullPrice > 30000) {
      return "Даем скидку в 10%";
    } else if (this.fullPrice >= 15000 && this.fullPrice <= 30000) {
      return "Даем скидку в 5%";
    } else if (this.fullPrice >= 0 && this.fullPrice < 15000) {
      return "Скидка не предусмотрена";
    } else {
      return "Что-то пошло не так";
    }
  },


  start() {
    this.asking();
    this.getAllServicePrices();
    this.getFullPrice();
    this.getServicePercentPrices();
    this.getTitle();
    this.logger();
  },

  logger() {
    console.log("Название проекта:", this.title);
    console.log("Типы экранов:", this.screens);
    console.log("Стоимость экранов:", this.screenPrice);
    console.log("Нужен адаптив:", this.adaptive);
    console.log("Стоимость дополнительных услуг:", this.allServicePrices);
    console.log("Полная стоимость проекта:", this.fullPrice);
    console.log("Стоимость проекта с учетом отката:", this.servicePercentPrice);
    console.log(this.getRollbackMessage());
  }
};

appData.start();