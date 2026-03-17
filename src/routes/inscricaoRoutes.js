const express = require("express");
const router = express.Router();
const InscricaoController = require("../controllers/InscricaoController.js");


/**
 * @swagger
 * components:
 *   schemas:
 *     Evento:
 *       type: object
 *       required:
 *         - nome
 *         - data
 *       properties:
 *         id:
 *           type: integer
 *           description: ID gerado automaticamente
 *         nome:
 *           type: string
 *           description: Nome da inscrição
 *         descricao:
 *           type: string
 *           description: Descrição da inscrição
 *         data:
 *           type: string
 *           description: Data da inscrição
 *         local:
 *           type: string
 *           description: Local da inscrição
 *         capacidade:
 *           type: integer
 *           description: Capacidade máxima
 *       example:
 *         id: 1
 *         nome: Workshop de Node.js
 *         descricao: Aprenda Node.js do zero
 *         data: "2025-08-15"
 *         local: SENAI - Sala 3
 *         capacidade: 30
 */

/**
 * @swagger
 * /inscrições/{id}:
 *   get:
 *     summary: Buscar evento por ID
 *     tags: [Inscrições]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da inscrição
 *     responses:
 *       200:
 *         description: Inscrição encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Inscrição'
 *       404:
 *         description: Inscrição não encontrado
 */

router.get("/", InscricaoController.index);

/**
 * @swagger
 * /inscrições:
 *   post:
 *     summary: Criar um nova inscrição
 *     tags: [Inscrições]
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
 *         description: Inscrição criada com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post("/", InscricaoController.store);

/**
 * @swagger
 * /inscrições:
 *   get:
 *     summary: Listar todas as inscrições
 *     tags: [Inscrições]
 *     responses:
 *       200:
 *         description: Lista de inscrições
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Inscrição'
 */
router.get("/evento/:eventoId", InscricaoController.listarPorEvento);
/**
 * @swagger
 * /inscrições/{id}:
 *   patch:
 *     summary: Cancelar uma inscrição
 *     tags: [Inscrições]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da inscrição
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *           example:
 *             nome: Ana Silva Atualizada
 *             email: ana.atualizada@email.com
 *     responses:
 *       200:
 *         description: Inscrição cancelada
 *       404:
 *         description: Inscrição não foi cancelada
 */
router.patch("/:id/cancelar", InscricaoController.cancelar);

module.exports = router;