import express from "express";
import vendasController from "../controllers/vendas.controller.js";

const router = express.Router();

router.post("/", vendasController.createVendas);

router.get("/", vendasController.getVenda);

router.get("/:idVendas", vendasController.getVendas);

router.delete("/:idVendas", vendasController.deleteVenda);

router.put("/", vendasController.updateVenda);

export default router;
