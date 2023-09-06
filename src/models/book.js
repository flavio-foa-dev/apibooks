import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  title: {type: String, required: true},
  publishing: {type: String},
  price: {type: Number},
  pages: {type: Number},
});

const Book = mongoose.model('books', bookSchema);

export default Book;