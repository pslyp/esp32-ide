const express = require('./configs/express')
const app = express()

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 3000

require('./routes')(app)

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`)
})