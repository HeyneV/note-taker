const express = require ("express")
const app = express()

const PORT = process.env.PORT || 3001

app.use(express.static("public"))

app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use(require("./routes/html"))

app.use(require("./routes/api"))

app.listen (PORT, function() {
    console.log("app listening on PORT" +PORT)
})