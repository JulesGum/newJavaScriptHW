let usersArr = [
    { name: 'Ivan', age: 17 },
    {name:'Olga', age:15},
]

const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(process.cwd(), 'views')));

app.set('view engine', '.hbs');
app.engine('.hbs', espressHbs({
    defaultLayout: false
}));
app.set('view', path.join(process.cwd(), 'view'));

app.get('/user', (req, res) => {
    res.render('users', { users: usersArr });
});

app.get('/', (req, res) => {
    res.render('main', { isOk: false, userName: 'Ivan' });
});

app.post('/login', (req, res) => {
    const { name, age } = req.body;

    usersArr.push({ name, age });
    res.redirect('/user');
});

app.listen(5000, () => {
    console.log('App listen 500');
});
