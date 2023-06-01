const express = require('express')

const productionrRoute = require('./routes/ProductionRoutes')
// const bodyParser = require('body-parser');

require('dotenv').config({path:'./config/.env'})
const morgan=require('morgan')
const PORT= process.env.PORT || 3000
const connectdb =require('./config/connectdb')
const importdata = require('./DataImport')
const productionRoute = require('./routes/ProductionRoutes')
const notFound =require('./Middleware/Error')
const errorHandler = require('./Middleware/Error')
const postRoute=require('./routes/Posts')
const userRouter = require('./routes/UserRoutes')
connectdb()

const app =express()
app.use(morgan("dev"))
app.use(express.json())
app.use('/api/import',importdata)
app.use('/api/users',userRouter)
app.use('/api/productions',productionRoute)
app.use('/api/post',postRoute)
// //ERROR HANDELR
// app.use(notFound)
// app.use(errorHandler)






app.listen(3000 ,console.log(`is running in ${PORT}`))
