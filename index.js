const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const ComponentModel = require('./models/Components')

const app = express()
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:4173",
     "https://pr5front.onrender.com"]
}))

app.use(express.json())

mongoose.connect('mongodb+srv://pavel:12345qwert@cluster0.4yzizhy.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp')

app.get('/', (req, res) => {
    ComponentModel.find({})
        .then(components => res.json(components))
        .catch(err => res.json(err))
})

app.get('/getComponent/:id', (req, res) => {
    const id = req.params.id
    ComponentModel.findById({ _id: id })
        .then(components => res.json(components))
        .catch(err => res.json(err))
})

app.post('/createComponent', (req, res) => {
    ComponentModel.create(req.body)
        .then(components => res.json(components))
        .catch(err => res.json(err))
})

app.put('/updateComponent/:id', (req, res) => {
    const id = req.params.id
    ComponentModel.findByIdAndUpdate({ _id: id },
        {
            name: req.body.name,
            price: req.body.price,
            quantity: req.body.quantity
        })
        .then(components => res.json(components))
        .catch(err => res.json(err))
})

app.delete('/deleteComponent/:id', (req, res) => {
    const id = req.params.id
    ComponentModel.findByIdAndDelete({ _id: id })
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log('Server is up')
})
