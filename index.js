const express = require('express');
const app = express();
var path = require('path');
app.use('/public', express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
