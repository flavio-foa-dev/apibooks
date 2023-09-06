import express from 'express';
import { AuthorController } from '../controllers/authorController.js';

export const authorRoutes = express.Router();

authorRoutes
  .get('/api/authors', AuthorController.getBooks)
  .get('/api/authors/:id', AuthorController.getBookById)
  .post('/api/authors', AuthorController.save)
  .put('/api/authors/:id', AuthorController.updateBook)
  .delete('/api/authors/:id', AuthorController.deleteBook);

