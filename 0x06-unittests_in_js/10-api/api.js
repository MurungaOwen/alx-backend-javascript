const express = require('express');
const app = express();

app.set('port', 7865);

const intRegex = /^\d+$/;

app.listen(app.get('port'), () => {
    console.log('API available on localhost port 7865');
});

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
    const cartId = req.params.id;

    if (cartId && intRegex.test(cartId)) {
        res.send(`Payment methods for cart :${cartId}`);
    } else {
        res.status(404).send('Not Found');
    }
  
});

app.get('/available_payments', (req, res) => {
    const modes = {
        credit_cards: true,
        paypal: false
    }
    res.send({payment_methods: modes});
});

app.post('/login', (req, res) => {
    let data = '';

    req.on('data', chunk => {
        data += chunk.toString();
    });
    req.on('end', () => {
        const fdata = JSON.parse(data);
        const username = fdata.userName;
        res.send(`Welcome :${username}`);
    });

});

module.exports = app
