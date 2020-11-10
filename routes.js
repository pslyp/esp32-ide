module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('index', {
            pageTitle: 'esp32 IDE'
        })
    })
    
    app.get('/about', (req, res) => {
        res.render('about', {
            message: 'EiEi'
        })
    })
}