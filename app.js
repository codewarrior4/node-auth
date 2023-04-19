require('dotenv').config()

const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const mainRouter  = require('./routes/main')
const notFoundMiddleware = require('./middlewares/not-found')
const errorMiddleware = require('./middlewares/error-handler')

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1',mainRouter)

app.use(notFoundMiddleware)
app.use(errorMiddleware)


const port = process.env.PORT || 5001 

const startServer = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch(error){
        console.log(error);
    }
}

startServer()