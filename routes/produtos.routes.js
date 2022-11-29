import express from "express";
import produtosController from "../controllers/produtos.controller.js";

const router = express.Router();

router.post("/", produtosController.createProdutos);

router.get("/", produtosController.getProduto);

router.get("/:idProdutos", produtosController.getProdutos);

router.delete("/:idProdutos", produtosController.deleteProduto);

router.put("/", produtosController.updateProduto);

export default router;
