const mongoose = require('mongoose');

const deviceSchema= mongoose.Schema({
  device_name: String,
  img: String,
  status: {
    type: Number,
    default: 0
  }
}, {
  versionKey: false
})

module.exports= mongoose.model("device", deviceSchema);