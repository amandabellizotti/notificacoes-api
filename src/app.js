// src/app.js
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const app = express();

// Middleware para ler JSON no body das requisições
app.use(express.json());

// Documentação Swagger 
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Importando as rotas de eventos
const eventoRoutes = require("./routes/eventoRoutes");
const participanteRoutes = require("./routes/participanteRoutes");
const inscricaoRoutes = require("./routes/inscricaoRoutes");

// Usar rotas com prefixo
app.use("/eventos", eventoRoutes);
app.use("/participantes", participanteRoutes);
app.use("/inscricoes", inscricaoRoutes);

// Rota raiz (informativa)
app.get("/", (req, res) => {
    res.json({
        mensagem: "API de Notificações",
        rotas: {
            eventos: "/eventos",
            participantes: "/participantes",
            inscricoes: '/inscricoes'
        },
    });
});


module.exports = app;