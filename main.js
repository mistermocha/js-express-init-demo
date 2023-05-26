const express = require("express")
const app = express()
const port = 3000

app.use(express.static('public'))
app.get("/fruit", function (req,res){
    fruit = {
        apple: {border: "red", bg: "lightcoral"}
    }
    res.json(fruit)
})
    

// app.get("/", function (req,res){
//     let html = htmlGen()
//     res.send(html)
 
// })


// app.listen(port, function(){
//     console.log("App listening on port ${port}!")
// })
