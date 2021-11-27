const http = require('http')
const fs = require('fs')

const PORT = 3000;
const SUCCESS_CODE = 200;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = SUCCESS_CODE
    res.setHeader('Content-Type', 'text/html')
    const paginaIndex = fs.readFileSync('index.html', 'utf-8')
    res.write(paginaIndex)
    res.end()
  }
  else if (req.url === '/cursos') {
    res.statusCode = SUCCESS_CODE
    res.setHeader('Content-Type', 'application/json')
    const paginaCursos = fs.readFileSync('cursos.json', 'utf-8')
    res.write(JSON.stringify(paginaCursos))
    res.end()
  }
  else if (req.url === '/estudantes') {
    res.statusCode = SUCCESS_CODE
    res.setHeader('Content-Type', 'application/json')
    const paginaEstudantes = fs.readFileSync('estudantes.json', 'utf-8')
    res.write(JSON.stringify(paginaEstudantes))
    res.end()
  }
  else {
    res.statusCode = 404
    res.end('Error!')
  }
})


server.listen(PORT, () => {
  console.log('Servidor funcionando! Porta: ', PORT)
})