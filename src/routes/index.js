import express from 'express';
import {bookRoutes} from './booksRoutes.js';
import {authorRoutes} from './authorsRoutes.js';


const routes = (app) => {
  app.route('/').get((_req, res) => {
    res.status(200).send('Flavio API');
  });

  app.use(express.json(), bookRoutes, authorRoutes);
};

export default routes;