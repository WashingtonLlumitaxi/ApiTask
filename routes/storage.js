
const express = require('express');

const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const {validatorGetItem} = require("../validators/storage");
const { getItems, getItem, createItem, deleteItem} = require("../controllers/storage");
//TODO http:localhost:3000/api/storage

/**
 * Listar items
 */
router.get("/", getItems);

/**
 * Detalle de item
 */
router.get("/:id", validatorGetItem, getItem);

/**
 * Eliminar item
 */
router.delete("/:id", validatorGetItem, deleteItem);

/**
 * Craer item
 */
router.post("/",uploadMiddleware.single("myfile"), createItem);

/**
 * Actualizar item
 */


module.exports = router;