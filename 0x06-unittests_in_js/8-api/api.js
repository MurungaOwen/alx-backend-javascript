const express = require('express');
const app = express();

app.set('port', 7865);

app.listen(app.get('port'), () => {
    console.log('API available on localhost port 7865');
});

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

module.exports = app
