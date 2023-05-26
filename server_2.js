const express = require("express")
const app = express()
const port = 3000 

app.use(express.static('public/test_folder'))





app.listen(port, function(){
console.log('Example app listening on port ${port}!')

})