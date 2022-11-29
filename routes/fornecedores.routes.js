import express from "express";
import fornecedoresController from "../controllers/fornecedores.controller.js";

const router = express.Router();

router.post("/", fornecedoresController.createFornecedores);

router.get("/:idFornecedores", fornecedoresController.getFornecedor);

router.get("/", fornecedoresController.getFornecedores);

router.delete("/:idFornecedores", fornecedoresController.deleteFornecedor);

router.put("/", fornecedoresController.updateFornecedor);

export default router;
