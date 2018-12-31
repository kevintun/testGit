const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');



module.exports = function homepage(req,res) {
  const layoutfilename = `${ path.join(__dirname) }/../html/index.html`;

  const layout = fs.readFileSync(layoutfilename,'utf8');
  
  const user = req.params.name;

  fetch(`http://localhost:3000/users/${user}`)
      .then((x) => {
      	return x.json();
      }).then(({name,age})=>{
         return {
           name,
           age: age - 10
         }
      }).then(({name,age}) => {
         const date = new Date();
         const currentDate = date.getMonth() + '-' + date.getDate() + '-' + date.getFullYear();
         const html = `<p>Hello ${user}! <br>Today is ${currentDate}. <br>Happy ${age}th birthday</p>`;
         const content = layout.replace('{html}',html);
          res.send(content);
      });

};

