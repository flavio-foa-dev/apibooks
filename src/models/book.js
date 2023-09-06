import mongoose from 'mongoose';
import { AuthorSchema } from './author';

const bookSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  title: {type: String, required: true},
  publishing: {type: String},
  price: {type: Number},
  pages: {type: Number},
  editora: AuthorSchema,
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'authors', required: true}

});

const Book = mongoose.model('books', bookSchema);

export default Book;