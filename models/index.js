const mongoose = require('mongoose');
const handymanSchema = require('./handyman');
const toolSchema = require('./tools');
const pnsSchema = require('./pns');

const Handyman = mongoose.model('Handyman', handymanSchema);
const Pns = mongoose.model('Pns', pnsSchema);
const Tool = mongoose.model('Tool', toolSchema);

module.exports = {
  Pns,  
  Handyman,
  Tool
};
