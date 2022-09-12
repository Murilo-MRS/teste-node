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

// CADASTRAR REQUISITAR COM METODO GET
// app.get('/teams', (req, res) => res.status(200).json({ teams }));
// CADASTRAR NOVOS TIMES COPM METODO POST
app.post('/teams', (req, res) => {
    const newTeam = {...req.body};
    teams.push(newTeam);
    res.status(201).json({ team: newTeam });
});
// app.get('/teams', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));
module.exports = app;
