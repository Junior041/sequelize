import express from "express";
import usuarioController from "../controllers/usuario.controller.js";

const router = express.Router();

router.post("/", usuarioController.createUsuario);

router.get("/", usuarioController.getUsuarios);

router.get("/:idUsuario", usuarioController.getUsuario);

router.delete("/:idUsuario", usuarioController.deleteUsuario);

router.put("/", usuarioController.updateUsuario);

export default router;
