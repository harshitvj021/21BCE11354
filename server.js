const express = require('express');
const bfhlRoutes = require('./bfhlRoutes');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.use('/', bfhlRoutes);

const PORT =  3000
app.listen(PORT, ()=>{
    console.log("Server is running on 3000");
});
