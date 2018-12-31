const express = require('express');
const app = express();
const path = require('path');
const homepage = require('./js/homepage');


app.get('/users/:name', (req, res) => {
  //res.send(`Hello ${req.params.name}` )
  const user = req.params.name;

  res.json(require(`${ path.join(__dirname) }/json/${ user }.json`));

})
app.get('/:name', homepage);




app.listen(3000, () =>  {
  console.log('My app listening on port 3000!')
})