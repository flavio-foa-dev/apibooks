import Author from '../models/author.js';

export class AuthorController {

  static async getBooks(req, res) {
    try {
      const author = await Author.find({});
      res.status(200).json(author);

    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição` });
    }
  }

  static async getBookById(req, res) {
    try {
      const id = req.params.id;
      const author = await Author.findById(id);
      res.status(200).json(author);

    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição` });
    }
  }

  static async save(req, res) {
    try {
      const author = Author.create(req.body);
      res.status(201).json({message: 'ceated', author: author});
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição` });
    }
  }

  static async updateBook (req, res) {
    try {
      const id = req.params.id;
      await Author.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: 'livro atualizado' });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na atualização` });
    }
  }

  static async deleteBook (req, res) {
    try {
      const id = req.params.id;
      await Author.findByIdAndDelete(id);
      res.status(200).json({ message: 'livro excluído com sucesso' });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na exclusão` });
    }
  }
}