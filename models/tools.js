const { Schema } = require('mongoose')

const toolSchema = new Schema(
  {
    tools: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true},
    purchase_link: {type: String, required: true},
    pns: { type: Schema.Types.ObjectId, ref: 'Pns' }
  },
  { timestamps: true }
)

module.exports = toolSchema