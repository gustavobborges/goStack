const express = require ('express')

const app = express()

app.get('/projects', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2'
  ]);
})

app.post('/projects', (resquest, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ])
})

app.put('/projects/:id', (resquest, response) => {
  return response.json([
    'Projeto 4',
    'Projeto 2',
    'Projeto 3',
  ])
})

app.delete('/projects/:id', (resquest, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ])
})

app.listen(3333, () => {
  console.log('🌅 backend start.. ')
})