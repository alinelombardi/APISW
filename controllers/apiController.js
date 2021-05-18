  const Planeta = require('../models/planetaModel.js');
  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;

  exports.adicionarPlanetas = function (req, res) {
    Planeta.create(req.body).then(function (planeta) {
      res.send(planeta);
    })
  };

  exports.buscarId = function (req, res) {
    Planeta.findById(req.params.id, (err, planeta) => {
      if (planeta) {
        res.status(200).send(planeta)
      } else {
        res.status(404).send('Inválido')
      }
    })
  };

  exports.buscarNome = function (req, res) {
    Planeta.findOne({
      nome: req.params.name
    }, (err, planeta) => {
      if (planeta) {
        res.status(200).send(planeta)
      } else {
        res.status(404).send('Inválido')
      }
    })
  };

  exports.deletePlaneta = function (req, res, next) {
    Planeta.findByIdAndRemove({
      _id: req.params.id
    }).then(function (planeta) {
      res.send('Informação Excluída');
    }).catch(next);
  };

  exports.mostrarPlanetas = function (req, res) {
    Planeta.find({}).then(function (planeta) {
      res.send(planeta);
    });
  };