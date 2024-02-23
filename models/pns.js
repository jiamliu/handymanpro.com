const { Schema } = require('mongoose')

const pnsSchema = new Schema(
  {
    image: {type: String, required: true},
    name: {type: String, required: true},
    steps: {type: Array, required: true},
    video_tutorial: {type: String, required: true},
  },
  { timestamps: true }
)


module.exports = pnsSchema