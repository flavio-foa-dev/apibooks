import http from 'http';

const port = process.env.PORT || 3000;

const routes = {
  '/' : 'Curso de api',
  '/login' : 'Faca o Login',
  '/books' : 'Livros',
  '/author' : 'Autores'

};

const livros = [
  {
    id: 1,
    titulo: 'O Senhor dos Anéis'
  },
  {
    id: 2,
    titulo: 'O Hobbit'
  }
];

function buscaLivro(id) {
  return livros.findIndex(livro => {
    return livro.id === Number(id);
  });
}

http.get('/', (req, res) => {
  res.status(200).send('Curso de Node.js');
});

http.get('/livros', (req, res) => {
  res.status(200).json(livros);
});

http.get('/livros/:id', (req, res) => {
  const index = buscaLivro(req.params.id);
  res.status(200).json(livros[index]);
});

http.post('/livros', (req, res) => {
  livros.push(req.body);
  res.status(201).send('livro cadastrado com sucesso');
});

http.put('/livros/:id', (req, res) => {
  const index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(200).json(livros);
});

http.delete('/livros/:id', (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).send('livro removido com sucesso');
});

const serve = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(routes[req.url]);
});

serve.listen(port, ()=> console.log('Connected'));
