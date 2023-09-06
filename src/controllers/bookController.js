import Book from '../models/book.js';

export class BookController {

  static async getBooks(req, res) {
    try {
      const books = await Book.find({});
      res.status(200).json(books);

    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição` });
    }
  }

  static async getBookById(req, res) {
    try {
      const id = req.params.id;
      const book = await Book.findById(id);
      res.status(200).json(book);

    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição` });
    }
  }

  static async save(req, res) {
    try {
      const book = Book.create(req.body);
      res.status(201).json({message: 'ceated', book: book});
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição` });
    }
  }

  static async updateBook (req, res) {
    try {
      const id = req.params.id;
      await Book.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: 'livro atualizado' });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na atualização` });
    }
  }

  static async deleteBook (req, res) {
    try {
      const id = req.params.id;
      await Book.findByIdAndDelete(id);
      res.status(200).json({ message: 'livro excluído com sucesso' });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na exclusão` });
    }
  }

  static async listarLivros (req, res) {
    try {
      const listaLivros = await livro.find({}).populate('autor').exec();
      res.status(200).json(listaLivros);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  }
}