var express = require('express');
var router = express.Router();
const xlsx = require('xlsx')
const axios = require('axios')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/excel', function(req,res,next){
  // const rawFile = fs.readFileSync(__dirname + '/response_30000.json')
  // const raw = JSON.parse('https://jsonplaceholder.typicode.com/comments')
  const raw = axios.get('https://jsonplaceholder.typicode.com/comments')
                      .then(e => { return e })



  // const obj = raw.map(e => {
  //   return e
  // })

  // const newB = xlsx.utils.book_new()
  // const newS = xlsx.utils.json_to_sheet(obj)
  // xlsx.utils.book_append_sheet(newB, newS, "name")
  // xlsx.writeFile(newB, "sample.xlsx")

  res.send(raw)
})

module.exports = router;
