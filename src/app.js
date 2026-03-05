// src/app.js
const express = require("express");
const app = express();

// Middleware para ler JSON no body das requisições
app.use(express.json());

// Importando as rotas de eventos
const eventoRoutes = require("./routes/eventoRoutes");

// Usar rotas com prefixo
app.use("/eventos", eventoRoutes);

// Rota raiz (informativa)
app.get("/", (req, res) => {
    res.json({
        mensagem: "API de Notificações",
        rotas: {
            eventos: "/eventos",
        },
    });
});
module.exports = app;