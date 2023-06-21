const fs = require("fs");
const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleError");
const { storageModel } = require("../models");

const PUBLIC_URL = process.env.PUBLIC_URL;
//const PUBLIC_URL = process.env.URL_PUBLIC || null;
const MEDIA_PATH = `${__dirname}/../storage`;
/**
 * Obtener lista  de la base de datos!
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  try {
    const data = await storageModel.find({});
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_LIST_ITEMS");
  }
  //const data = await storageModel.find({});
  //res.send({data:data}) // lo mismo
  //res.send({ data });
};

/**
 * Obtener un detalle!
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await storageModel.findById(id);
    res.send({ data });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_DETAIL_ITEMS");
  }
};

/**
 * Insertar un registro!
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  try {
    const { file } = req;
    const fileData = {
      url: `${PUBLIC_URL}/${file.filename}`,
      filename: file.filename,
    };
    const data = await storageModel.create(fileData);
    res.send({ data });
  } catch (e){
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};

/**
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updateItem = (req, res) => {};

/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const dataFile = await storageModel.findById(id);
    console.log(dataFile);
    const { filename } = dataFile;
    const filePath = `${MEDIA_PATH}/${filename}`; //TODO C:/miproyecto/file-1234.png
    console.log(`error verificado ${filePath}`);
    fs.unlinkSync(filePath);

    const data = { filePath, deleted: 1 };

    res.send({ data });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_DELETE_ITEMS");
  }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
