const mongoose = require("mongoose");
require("mongoose-type-url");

const articleSchema = new mongoose.Schema({
  source: Object,
  properties: {
    id: String,
    name: String,
  },
  author: String,
  title: { type: String, required: true, unique: true},
  description: { type: String },
  url: { type: String, unique: true },
  urlToImage: String,
  newsGenre: {
    type: String,
    required: true,
  },
  publishedAt: String,
  content: String,
  expire_at: { type: Date, default: Date.now, expires: 21600 },
});

module.exports = mongoose.model("Articles", articleSchema);
