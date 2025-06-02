const express = require('express');
const cors = require('cors');
require('dotenv').config();

const esimRoutes = require('./routes/esimRoutes');
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');
const publicRoutes = require('./routes/publicRoutes');


const errorHandler = require('./middlewares/errorHandler');


const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', esimRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);
app.use('/api/routes', publicRoutes);

app.use(errorHandler);

module.exports = app;
