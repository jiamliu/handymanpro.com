const { Schema } = require('mongoose')

const handymanSchema = new Schema(
  {
    name: {type: String, required: true},
    address: {type: String,required: true},
    contact: {type: String,required: true},
    rating: {type: String,required: true},
    pns: { type: Schema.Types.ObjectId, ref: 'Pns' }

  },
  { timestamps: true }
)

module.exports = handymanSchema