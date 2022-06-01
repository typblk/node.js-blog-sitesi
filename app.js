const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.status(200).render('index', {
        title: "Home"
    })
})

const port = 3000
app.listen(port, () => {
    console.log('App started on port 3000')
})