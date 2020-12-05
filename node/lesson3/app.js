
const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(process.cwd(), 'views')));

app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({
    defaultLayout: false
}));
app.set('views', path.join(process.cwd(), 'views'));

const {userRouter, prodRouter, authRouter} = require('./routes');

app.use('/users', userRouter);

app.get('/', (req, res) => {
    res.render('main', { isOk: false, userName: 'Ivan' });
});
app.get('/', (req, res) => {
    res.render('users');
});

app.post('/login', (req, res) => {
    // const { name, age } = req.body;

    // usersArr.push({ name, age });
    res.redirect('/user');
});

app.listen(5000, () => {
    console.log('App listen 500');
});
