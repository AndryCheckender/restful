import express from 'express';

const app = express();
const PORT = 4554;

app.get('/', (req, res) => {
    return res.status(200).send('<h1>Hello, world!</h1>');
});

app.listen(PORT, (error) => {
    if(error) {
        console.error('Server Error: ', error);
    }
    console.log(`Server started on ${PORT} port`);
});