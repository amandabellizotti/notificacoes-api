const express = require("express");
const router = express.Router();
const ParticipanteController = require("../controllers/ParticipanteController");
router.get("/", ParticipanteController.index); // GET /eventos
router.get("/:id", ParticipanteController.show); // GET /eventos/:id
router.post("/", ParticipanteController.store); // POST /eventos
router.put("/:id", ParticipanteController.update); // PUT /eventos/:id
router.delete("/:id", ParticipanteController.destroy); // DELETE /eventos/:id
module.exports = router;

/* Usamos express.Router() para criar um "mini-app" de rotas. Depois, conectamos ele no app
principal com um prefixo ( /eventos ). */