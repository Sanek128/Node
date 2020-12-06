const express = require('express');
const path = require('path');

const app = express();
const port = 5000;

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'pages')));

const { userRouter } = require('./routes');

app.use('/users', userRouter);

app.listen(port, () => console.log(`Express server started, enjoy. localhost:${port}`));