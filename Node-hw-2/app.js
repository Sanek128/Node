const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 5000;
const usersArr = path.join(process.cwd(), 'node-hw-2', 'users', 'users-db.json');
let isLogined = false;

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'pages')));

app.set('view engine', '.hbs');
app.set('views', path.join(process.cwd(), 'node-hw-2', 'pages'));
app.engine('.hbs', expressHbs({
    defaultLayout:'false',
}));

app.get('/', (req, res) => {
    res.render('main', { layout: false });
});

app.get('/login', (req, res) => {
    res.render('login', { layout: false });
});

app.get('/reg', (req, res) => {
    res.render('reg', { layout: false });
});

app.get('/users', (req, res) => {
    
    if (!isLogined) {
        res.redirect('/error');
    }

    fs.readFile(usersArr, (err, data) => {
        if (err) {
            return console.error(err);
        }

        const users = JSON.parse(data.toString());
        res.render('users', { users, layout: false })
    })
});

app.get('/error', (req, res) => {
    res.render('error', { layout: false });
});

app.post('/login', ((req, res) => {
    const { email, password } = req.body;

    fs.readFile(usersArr, (err, data) => {
        if (err) {
            return console.error(err);
        }

        const users = JSON.parse(data.toString());
        const checkEmail = users.find(user => user.email === email && user.password === password);

        if (!checkEmail) {
            res.redirect('/error');
            return;
        }

        isLogined = true;
        res.redirect('/users');
    })
}));

app.post('/reg', ((req, res) => {
    const { name, email, password } = req.body;
    
    fs.readFile(usersArr, ((err, data) => {
        if (err) {
            return console.error(err);
        }
        
        const users = JSON.parse(data.toString());
        const checkEmail = users.find(user => user.email === email);
        
        if (checkEmail) {
            res.redirect('/error');
            return;
        }
        users.push(req.body);
        fs.writeFile(usersArr, JSON.stringify(users), err => {
            if (err) {
                return console.error(err);
            }
        });
        
        isLogged = true;
        res.redirect('/users');
    }));
}));

app.post('/logout', ((req, res) => {
    isLogined = false;
    res.redirect('/');
}));

app.listen(port, () => console.log(`Express server started, enjoy. localhost:${port}`));