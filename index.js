import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

//JSON - Javascript Object Notation
app.use(bodyParser.json());    //bodyParser-middleware

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    console.log("Test case");

    res.send("Testing");
})

app.listen(PORT, () => {console.log(`Server running on port: http://localhost:${PORT}`)});