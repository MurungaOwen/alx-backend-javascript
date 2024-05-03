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

    if (cartId && cartId.match(intRegex)) {
        res.send(`Payment methods for cart :${cartId}`);
    } else {
        res.status(404);
    }
    
})

module.exports = app
