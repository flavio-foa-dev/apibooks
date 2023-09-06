import 'dotenv/config';
import app from './src/app.js';
import connectiondb from './src/db/config/connect.js';
import Book from './src/models/book.js';
const port = process.env.PORT || 3000;



const connection = await connectiondb();

connection.on('error', (error) => {
  console.log('Error Conexao',error.message);
});

connection.once('open', () => {
  console.log('Conexao feita com o banco de dados');
});





app.get('/', (req, res) => {
  res.status(200).send('Curso de Node.js');
});

app.get('/books', async(req, res) => {
  const books = await Book.find({});
  res.status(200).json(books);
});

app.get('/livros/:id', (req, res) => {
  const index = buscaLivro(req.params.id);
  res.status(200).json(livros[index]);
});

app.post('/livros', (req, res) => {
  livros.push(req.body);
  res.status(201).send('livro cadastrado com sucesso');
});

app.put('/livros/:id', (req, res) => {
  const index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(200).json(livros);
});

app.delete('/livros/:id', (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).send('livro removido com sucesso');
});


app.listen(port, ()=>console.log('listening on port', port));