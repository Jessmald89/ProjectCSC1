const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes
app.get('/ProjectCSC', (req, res)=> {

  res.sendFile(__dirname + '/public/index.html');
})

app.post('/ProjectCSCPost',(req,res) =>{
  console.log(req.body);

})


app.listen(8080, function () {
  console.log('Server is listening on port 8080');
});

module.exports = app;