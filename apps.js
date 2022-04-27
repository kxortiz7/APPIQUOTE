const express = require('express')


//Routers
const { userRouter } = require('./routes/users.routes')
const { repairRouter } = require('./routes/repairs.routes')


const app = express()

app.use(express.json())

//Endpoints

app.use('/api/v1/users', userRouter)
app.use('/api/v1/repairs', repairRouter)

module.exports = { app }