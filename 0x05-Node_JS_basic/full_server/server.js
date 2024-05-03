const express = require('express');
const routes = require('./routes');

const app = express();

app.use('/', routes);

const PORT = 1245;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
