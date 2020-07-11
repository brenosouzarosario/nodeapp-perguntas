const express = require("express");
const app = express();

//Dizendo para o express que o ejs é o motor de html
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/:nome/:lang", (req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = true;

    var produtos = [{
            nome: "Doritos",
            preco: 3.14
        },
        {
            nome: "Coca",
            preco: 3.184
        },
        {
            nome: "Leite",
            preco: 3.145
        },
    ]

    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Guia do programador",
        inscritos: 8000,
        msg: exibirMsg,
        produtos: produtos
    });
})

app.listen(3000, () => {
    console.log("App rodando!");
});