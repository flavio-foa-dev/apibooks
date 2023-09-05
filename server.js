import http from "http"

const port = process.env.PORT || 3000

const routes = {
  "/" : "Curso de api",
  "/login" : "Faca o Login",
  "/books" : "Livros",
  "/author" : "Autores"

}

const serve = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end(routes[req.url])
})

serve.listen(port, ()=> console.log("Connected"))
