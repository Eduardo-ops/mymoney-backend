const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/db.json'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/db.json');
})

app.listen(PORT, () => {
    console.log('serivdor iniciado na porta' + PORT);
})