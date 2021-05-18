const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlanetaSchema = new Schema({
  nome: {
  type: String,
  required: true
  },
  clima: {
  type: String,
  required: true
  },
  terreno: {
  type: String, 
  required: true
  }
});
const Planeta = mongoose.model('Planets', PlanetaSchema);
module.exports = Planeta;