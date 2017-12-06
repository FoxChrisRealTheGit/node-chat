const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const controller = require('./controllers/message_controller');
const port = 3000;
app.use(bodyParser.json());
app.use(express.static('E:/DevMountain/Cohort/Week_2/Day_3/node-chat/public/build'));

app.get('/api/messages', controller.read);

app.put('/api/messages/:id', controller.update);

app.post('/api/messages', controller.create);

app.delete('/api/message/:id', controller.delete);




app.listen(port, ()=>{
    console.log(`This server is UNDER 9000 because its on port ${port}`)
})