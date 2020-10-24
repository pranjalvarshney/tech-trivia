const mongoose = require('mongoose')

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  level: {
    type: Number,
  },
})
