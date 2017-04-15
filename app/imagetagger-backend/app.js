const
    express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path');
    
const app = express();

app.use(express.static(path.join(__dirname, '../imagetagger-fortend/build/default')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/imagetagger');
require('./models/Target');

const routes = require('./routes');
app.use('/', routes);

const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('listening on port ' + listener.address().port);
});