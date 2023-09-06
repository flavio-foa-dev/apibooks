import 'dotenv/config';
import app from './src/app.js';
import connectiondb from './src/db/config/connect.js';
const port = process.env.PORT || 3000;

const connection = await connectiondb();

connection.on('error', (error) => {
  console.log('Error Conexao',error.message);
});

connection.once('open', () => {
  console.log('Conexao feita com o banco de dados');
});

app.listen(port, () => console.log('listening on port', port));
