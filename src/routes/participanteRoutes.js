const express = require("express");
const router = express.Router();
const ParticipanteController = require("../controllers/ParticipanteController");

/**
 * @swagger
 * components:
 *   schemas:
 *     Participante:
 *       type: object
 *       required:
 *         - nome
 *         - email
 *       properties:
 *         id:
 *           type: integer
 *           description: ID gerado automaticamente
 *         nome:
 *           type: string
 *           description: Nome do participante
 *         email:
 *           type: string
 *           description: E-mail do participante
 *       example:
 *         id: 1
 *         nome: Ana Silva
 *         email: ana@email.com
 */




/**
 * @swagger
 * /participantes:
 *   get:
 *     summary: Listar todos os participantes
 *     tags: [Participantes]
 *     responses:
 *       200:
 *         description: Lista de participantes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Participante'
*/
router.get("/", ParticipanteController.index); // GET /eventos
/**
 * @swagger
 * /participantes/{id}:
 *   get:
 *     summary: Buscar participante por ID
 *     tags: [Participantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do participante
 *     responses:
 *       200:
 *         description: Participante encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Participante'
 *       404:
 *         description: Participante não encontrado
 */
router.get("/:id", ParticipanteController.show); // GET /eventos/:id
/**
 * @swagger
 * /participantes:
 *   post:
 *     summary: Criar um novo participante
 *     tags: [Participantes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - data
 *             properties:
 *               nome:
 *                 type: string
 *               descricao:
 *                 type: string
 *               data:
 *                 type: string
 *               local:
 *                 type: string
 *               capacidade:
 *                 type: integer
 *           example:
 *             nome: "Palestra sobre APIs"
 *             descricao: "Como construir APIs profissionais"
 *             data: "2025-10-10"
 *             local: "SENAI - Sala 5"
 *             capacidade: 50
 *     responses:
 *       201:
 *         description: Participante criado com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post("/", ParticipanteController.store); // POST /eventos

/**
 * @swagger
 * /participantes/{id}:
 *   put:
 *     summary: Atualizar um participante
 *     tags: [Participantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               descricao:
 *                 type: string
 *               data:
 *                 type: string
 *               local:
 *                 type: string
 *               capacidade:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Participante atualizado
 *       404:
 *         description: Participante não encontrado
 */
router.put("/:id", ParticipanteController.update); // PUT /eventos/:id
/**
 * @swagger
 * /participantes/{id}:
 *   delete:
 *     summary: Deletar um participante
 *     tags: [Participantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Participante deletado
 *       404:
 *         description: Participante não encontrado
 */
router.delete("/:id", ParticipanteController.destroy); // DELETE /eventos/:id

module.exports = router;

/* Usamos express.Router() para criar um "mini-app" de rotas. Depois, conectamos ele no app
principal com um prefixo ( /eventos ). */