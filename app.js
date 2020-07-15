const express = require('express');
const app = express();

const port = 4000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/ejs'));

app.get('/', (req, res) => {
  res.render('time');
});

app.listen(port, () =>
  console.log(`Time scheduler is listening on port ${port}`)
);
