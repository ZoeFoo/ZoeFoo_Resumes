const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    secret: 'cv',
    resave: true,
    saveUninitialized: true,
}))

//app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/index.html'));
});

app.post('/submit-data', (req, res) => {
    const name = req.body.firstName + '' + req.body.lastName;
    res.send(name + 'submit successfully!');
})

app.listen(port, () => {
    console.log(`Example app listening on port: http://locathost:${port}`)
});