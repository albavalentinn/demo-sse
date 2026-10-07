const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/api/stream', (req,res) => {
res.setHeader('Content-Type', 'text/event-stream');
res.setHeader('Cache-Control', 'no-cache');
res.setHeader('Connection','keep-alive');

const texto = "Hola, soy una IA";
const palabras = texto.split(" ");
let index = 0;

const interval = setInterval(() => {
    if (index < palabras.length){

    res.write(`data: ${palabras[index]}\n\n`);
    index++;
}else{
    res.write(`data:[DONE]\n\n`);
    clearInterval(interval);
    res.end();
     }
} , 300);
});
app.listen(3000,() => console.log ('Servidor en el puerto 3000'));