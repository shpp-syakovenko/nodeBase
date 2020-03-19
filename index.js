const http = require('http');
const fs = require('fs');
const path = require('path');

// Создаем сервер
// req - обьект отвечает за запрос на сервер
// res - обьект отвечает за ответ сервера
const server = http.createServer((req, res) => {
    if (req.method === "GET") {
        // res.writeHead - статус и заголовки записываем
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })

        if (req.url === '/') {
            fs.readFile(
                path.join(__dirname, 'views', 'index.html'),
                'utf-8',
                (err, data) => {
                    if (err) throw err;

                    res.end(data);
                }
            )

        } else if (req.url === '/about') {
            fs.readFile(
                path.join(__dirname, 'views', 'about.html'),
                'utf-8',
                (err, data) => {
                    if (err) throw err;

                    res.end(data);
                }
            )

        }else if(req.url === '/api/users'){
            res.writeHead(200, {
                'Content-Type': 'text/json'
            });

            const users = [
                {name: 'Sergey', age: 31},
                {name: 'Dima', age: 35}
            ]

            res.end(JSON.stringify(users));

        }

    } else if (req.method === "POST") {

        const body = [];

        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })

        req.on('data', data => {
            body.push(Buffer.from(data));
        })

        req.on('end', () => {
            const message = body.toString().split('=')[1];

            res.end(`
            <h1>Ваше сообщение: ${message}</h1>
       `);
        })


    }

});

server.listen(3000, () => {
    console.log('Server is start on port 3000...');
})