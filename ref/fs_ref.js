// File System
const fs = require('fs');
const path = require('path');

// mkdir - создание папки
// fs.mkdir(path.join(__dirname, 'notes'), err => {
//     if(err) throw err
//     console.log("Папка была создана");
// });

// fs.writeFile - создание файла
// fs.writeFile(
//     path.join(__dirname, 'notes', 'mynote.txt'), // адресс
//     "Hello world",                               // данные
//     err => {
//         if (err) throw err;
//         console.log("File create");

//         // fs.appendFile - Вставка данных в конец файла
//         fs.appendFile(
//             path.join(__dirname, 'notes', 'mynote.txt'), // адресс
//             "\nNew string",                               // данные
//             err => {
//                 if (err) throw err;
//                 console.log("File was change.");

//                 // fs.readFile - считать файл
//                 fs.readFile(
//                     path.join(__dirname, 'notes', 'mynote.txt'), // путь
//                     'utf-8',                                     // Кодировка
//                     (err, data) => {
//                         if (err) throw err;
//                         console.log("Data: ", data);
//                     }
//                 );

//             }
//         );
//     });

// fs.rename - переименовать файл
fs.rename(
    path.join(__dirname, 'notes', 'mynote.txt'),
    path.join(__dirname, 'notes', 'note.txt'),
    err => {
        if(err) throw err;
        console.log("Rename file");
    }
);