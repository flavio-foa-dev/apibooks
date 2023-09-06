import Book from '../models/book.js';

export class BookController {

  static async getBooks(req, res) {
    const books = await Book.find({});
    res.status(200).json(books);
  }
}