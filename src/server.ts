import App from './app'

const port = 3333

App.app.listen(port, () => {
    console.log(`App listening on the http://localhost:${port}`)
})

