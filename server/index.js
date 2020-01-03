require("dotenv").config();
const express = require("express");
const massive = require("massive");
const app = express();
const controller = require('./controller')

let { SERVER_PORT, DB_STRING} = process.env

app.use(express.json())

massive(DB_STRING).then(db => 
    { app.set('db', db)
    console.log("Database tryna live its best life")
})

//ENDPOINTS BELOW

app.get('/api/houses', controller.getHouses)
app.post('/api/houses', controller.addHouse)
app.delete('/api/houses/:id', controller.deleteHouse)




app.listen(SERVER_PORT, () => {
    console.log(`Server up and trying its best on port ${SERVER_PORT}.`);
  });
