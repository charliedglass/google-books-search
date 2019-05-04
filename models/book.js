const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  googleId: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: String,
  link: String,
  authors: { type: Array, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;