import express from 'express'
import userRouter from './routers/userRouter.js'
//import router from './routers/router.js'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
//import path from 'path'
//import ejs from 'ejs'

const PORT = 8081

const app = express()

app.use(morgan('combined'))
app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(express.static('static'))
//app.use('/api/router', router)
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

function startServer() {
    try {
        app.listen(PORT, () => console.log('server working on port: ' + PORT))
    } catch(e) {
        concole.log(e)
    }
}

startServer()

