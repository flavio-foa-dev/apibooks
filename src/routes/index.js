import express from 'express';
import {bookRoutes} from './booksRoutes.js';

const routes = (app) => {
  app.route('/').get((_req, res) => {
    res.status(200).send('Flavio API');
  });

  app.use(express.json(), bookRoutes);
};

export default routes;