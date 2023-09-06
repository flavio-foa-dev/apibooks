import express from 'express';
import { BookController } from '../controllers/bookController.js';

export const bookRoutes = express.Router();

bookRoutes
  .get('/api/books', BookController.getBooks)
  .get('/api/books/:id', BookController.getBookById)
  .post('/api/books', BookController.save)
  .put('/api/books/:id', BookController.updateBook)
  .delete('/api/books/:id', BookController.deleteBook);

