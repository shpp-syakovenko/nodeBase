const path = require('path');

// Имя файла в котором находимся
console.log("path.basename: ", path.basename(__filename));

// Название папки в которой находиться данный файл
console.log("path.dirname: ", path.dirname(__filename));

// Узнать расширение файла
console.log("path.extname: ", path.extname(__filename));

// Работать с путями как с обьектом
console.log("path.parse: ", path.parse(__filename));

// Сгенирировать путь
console.log("path.join(): ", path.join(__dirname, 'test', 'app.js'));

// Сгенирировать путь, / используется как указатель начала абсолютного пути
console.log("path.resolve(): ", path.resolve(__dirname, 'test', '/app.js'));