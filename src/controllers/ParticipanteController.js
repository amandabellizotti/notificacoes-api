const ParticipanteModel = require("../models/ParticipanteModel.js");

function index(req, res) {
   const participantes = ParticipanteModel.listarTodos();
    res.json(participantes);
}


function show(req, res) {
    const id = parseInt(req.params.id);
    const participante = ParticipanteModel.buscarPorId(id);
    if (!participante) {
        return res.status(404).json({ erro: "Participante não encontrado" });
    }
    res.json(participante); 
}


function store(req, res) {
    const { nome, email } = req.body;
    // Valide: nome e email são obrigatórios
    if (!nome || !email) {
        return res.status(400).json({ erro: "Nome e email são obrigatórios" });
    }

        // 1. Nome não pode ser vazio (só espaços)
        if (!nome || nome.trim() === "") {
            // O que retornar aqui? Qual status e mensagem?
            // _______________________________________________
        }
    
        const novoParticipante = ParticipanteModel.criar({
            nome: nome.trim(),
            email: email
        });
        res.status(201).json(novoParticipante);
}

function update(req, res) {
    const id = parseInt(req.params.id);
        const participanteAtualizado = ParticipanteModel.atualizar(id, req.body);
        if (!participanteAtualizado) {
            return res.status(404).json({ erro: "Participante não encontrado" });
        }
        res.json(participanteAtualizado);
}

function destroy(req, res) {
    const id = parseInt(req.params.id);
        const deletado = ParticipanteModel.deletar(id);
        if (!deletado) {
            return res.status(404).json({ erro: "Participante não encontrado" });
        }
        res.status(204).send();
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy };