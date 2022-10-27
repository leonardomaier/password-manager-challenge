const express = require('express')
var cors = require('cors')
const { v4: uuid } = require('uuid')
const { passwordCardSchema } = require('./validators/password-card')

const app = express()
const port = 3000

const passwordCardList = []

app.use(express.json())
app.use(cors())

app.get('/password-cards', (req, res) => {

  const { term } = req.query;

  if (term) {
    const matches = passwordCardList.filter(password => 
      password.name.toLowerCase().includes(term.toLowerCase())
    )
    
    res.send(matches).status(200)
    return;
  }

  res.send(passwordCardList).status(200);
})

app.post('/password-cards', (req, res) => {
  
  const data = req.body;

  const { error: validationError } = passwordCardSchema.validate(data);

  if (validationError) {
    res.status(400).json({ error: 'Invalid fields' });
    return;
  }

  const newPassword = { id: uuid(), ...data }

  passwordCardList.push(newPassword);

  res.status(201).json(newPassword)
})

app.put('/password-cards/:id', (req, res) => {
  
  const { id } = req.params;

  const data = req.body;

  const { error: validationError } = passwordCardSchema.validate(data)

  if (validationError) {
    res.status(400).json({ error: 'Invalid fields' });
    return;
  }

  const passwordCardIndex = passwordCardList.findIndex(passwordCard => passwordCard.id === id)

  if (!id || passwordCardIndex === -1) {
    res.status(404).json({ error: "Password card not found" });
    return;
  }

  const updatedProduct = { id, ...data };

  passwordCardList[passwordCardIndex] = updatedProduct

  res.status(200).json(updatedProduct);
})

app.delete('/password-cards/:id', (req, res) => {
  
  const { id } = req.params;

  const passwordCardIndex = passwordCardList.findIndex(p => p.id === id)

  passwordCardList.splice(passwordCardIndex, 1);

  if (!id || passwordCardIndex === -1) {
    res.status(404).json({ error: "Password card not found" });
    return;
  }

  res.status(204).json(`Resource ${id} deleted successfully`);
})

app.listen(port, () => {
  console.log(`Password manager API listening on port ${port}`)
})
