const express = require('express')
const app = express()

const port = 3000

const user = [
    {
        'id': '1',
        'name': 'Aziz',
        'email': 'axix@gmail.com',
    },
    {
        'id': '2',
        'name': 'axix',
        'email': 'aziz@gmail.com',
    },
    {
        'id': '3',
        'name': 'younas',
        'email': 'younas@gmail.com',
    }
]
const userlist = [
    {
        'id': '1',
        'name': 'Aziz',
        'email': 'axix@gmail.com',
    },
    {
        'id': '2',
        'name': 'axix',
        'email': 'aziz@gmail.com',
    },
    {
        'id': '3',
        'name': 'younas',
        'email': 'younas@gmail.com',
    },
    {
        'id': '4',
        'name': 'Abbas',
        'email': 'abbas@gmail.com',
    }
]

app.get('/userlist', (req, res) => {
    res.status(200).send(userlist)
})


app.listen(port, () => {
    console.log('server is running on port ', port)
})