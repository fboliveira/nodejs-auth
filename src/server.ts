import express, { response } from 'express';
import 'dotenv/config';

require('dotenv').config()

const app = express();

app.get('/', (request, response) => {
    return response.json({message: 'NodeJS Auth Project'});
});

app.get('/login', (request, response) => {
    return response.json({message: 'Login'});
});

app.listen(process.env.PORT, () =>{
    console.log(`[server] Server is running on port ${process.env.PORT}`);
});
