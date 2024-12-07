const express = require ("express")
const mongoose = require ("mongoose")
const TodoRoutes = require("./routes/routers")
const app = express()
const PORT = 2000

mongoose.connect("mongodb://localhost:27017/TODO-APP",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then((console.log("Connected")))
.catch(e => console.log(e.message))



app.use(express.json())

app.use("/api",TodoRoutes)



// give listen port
app.listen(PORT,()=>{
    console.log(`Connected in http://localhost:${PORT}/api/todos`)
})