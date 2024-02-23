const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 5001
const db = require('./db')


const { Pns } = require('./models')
const { Handyman } = require('./models')
const { Tool } = require('./models')

const app = express()

app.use(cors())
app.use(express.json())

//declare constants for pns controller
const controller1 = require('./controllers/controller1');

//declare constants for tools controller
const controller2 = require('./controllers/controller2');

//declare constants for handyman controller
const controller3 = require('./controllers/controller3');

//these are regular page views
app.get('/', (req, res) => {
  res.send('Welcome to handymanpro.com!')
})

app.get('/problemandsolution', async (req, res) => {
    const pnss = await Pns.find({})
    res.json(pnss)
  })

app.get('/tools', async (req, res) => {
    const tools = await Tool.find({})
    res.json(tools)
})

app.get('/handyman', async (req, res) => {
  const handyman = await Handyman.find({})
  res.json(handyman)
})

//these are controllers for problems and solution specifically

app.get('/problemandsolution', controller1.getAllPns);
app.get('/problemandsolution/:id', controller1.getPnsById);
app.post('/problemandsolution', controller1.createPns);
app.put('/problemandsolution/:id',controller1.updatePns);
app.delete('/problemandsolution/:id',controller1.deletePns);

//these are controllers for tools specifically

app.get('/tools', controller2.getAllTools);
app.get('/tools/:id', controller2.getToolsById);
app.post('/tools', controller2.createTools);
app.put('/tools/:id',controller2.updateTools);
app.delete('/tools/:id',controller2.deleteTools);

//these are controllers for handyman specifically

app.get('/handyman', controller3.getAllHandyman);
app.get('/handyman/:id', controller3.getHandymanById);
app.post('/handyman', controller3.createHandyman);
app.put('/handyman/:id',controller3.updateHandyman);
app.delete('/handyman/:id',controller3.deleteHandyman);

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

