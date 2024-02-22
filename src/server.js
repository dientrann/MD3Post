import express from 'express';
import api from './routers/index.js';
import bodyParser from 'body-parser';

const server = express();

server.use(bodyParser.json());

server.use('/api', api)

server.listen(3333, () => console.log('Server is running at port 3333'))