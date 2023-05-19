const mongoose = require("mongoose");

const ReactFormDataSchema = new mongoose.Schema({
  storename: {
    type: String,
    required: true,
  },
  platformlink: {
    type: String,
    required: true,
  },
  logoimage: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  division: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  bankaccount: {
    type: String,
    required: true,
  },
  idimage: {
    type: String,
    required: true,
  },
});

const demoUser = mongoose.model("demouser", ReactFormDataSchema);
module.exports = {demoUser};
