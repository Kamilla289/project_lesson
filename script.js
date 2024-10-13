let title = 'AVOC'; 
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 221;
let rollback = 5;
let fullPrice = 600000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log(screenPrice + "$");
console.log(fullPrice + "$");

console.log(screens.toLocaleLowerCase().split(","));
console.log(fullPrice*(rollback/100));