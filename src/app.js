const express = require('express');

const teams = [
    {
      id: 1,
      name: 'São Paulo Futebol Clube',
      initials: 'SPF',
    },
    {
      id: 2,
      name: 'Clube Atlético Mineiro',
      initials: 'CAM',
    },
  ];

const app = express();

app.get('/teams', (req, res) => res.status(200).json({ teams }));
// app.get('/teams', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));
module.exports = app;
