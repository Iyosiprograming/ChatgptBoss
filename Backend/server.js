const express = require ("express")
const mongoose = require ("mongoose")
const TodoRoutes = require("./routes/routers")
const app = express()
const PORT = 2000

app.use(express.json())

app.use("/api",TodoRoutes)



// give listen port
app.listen(PORT,()=>{
    console.log(`Connected in http://localhost:${PORT}/api/todos`)
})