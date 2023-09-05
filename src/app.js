import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Flavio Foa API BOOks');
});

export default app;