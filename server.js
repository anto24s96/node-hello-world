require("dotenv").config();
const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";

const title = process.env.TITLE;

const inspirationalQuotes = [
    "La vita inizia dove finisce la tua zona di comfort.",
    "Il successo non è la chiave della felicità. La felicità è la chiave del successo.",
    "Non aspettare il momento perfetto, prendi il momento e rendilo perfetto.",
    "Ogni grande impresa inizia con una piccola decisione.",
    "Il fallimento è solo un'opportunità per ricominciare in modo più intelligente.",
    "La tua unica competizione è la persona che eri ieri.",
];

//Funzione per generare indice random
const getRandomQuote = () => {
    return inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)];
};

const server = require("http").createServer((req, res) => {
    console.log(`${req.method} | ${req.url} effettuata`);
    if (req.url === "/favicon.ico") {
        res.writeHead(404);
        res.end();
        return;
    }
    const randomQuote = getRandomQuote();

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello World</title>
    </head>
    <body>
        <h1>${title}</h1>
        <p>${randomQuote}</p>
    </body>
    </html>`);
});

server.listen(port, host, () => {
    console.log(`Server avviato su http://${host}:${port}`);
});
