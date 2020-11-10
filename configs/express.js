const express = require('express')

module.exports = () => {
    const app = express()

    app.set('views', process.cwd() + '/views')
    app.set('view engine', 'pug')
    app.use(express.static(process.cwd() + '/public'))

    return app
}