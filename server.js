const { db } = require('./utils/database')
const { app } = require('./apps')


db.authenticate()
    .then(() => console.log('database authenticated'))
    .catch(err => console.log(err))

db.sync().
    then(() => console.log('database synced'))
    .catch(err => console.log(err))

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`express runnig on port ${PORT}`)
})