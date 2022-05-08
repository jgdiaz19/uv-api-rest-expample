const { matchedData } = require("express-validator");
const { tracksModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { systemMessages } = require("../config/systemMessages");

const getItems = async (req, res) => {
  try {
    const data = await tracksModel.find({});
    res.send({ data });
  } catch (e) {
    handleHttpError(res, {
      userError: systemMessages.genericError,
      systemError: e.toString(),
    });
  }
};

const getItem = async (req, res) => {
  try {
  } catch (error) {}
};

const createItems = async (req, res) => {
  try {
    const body  = matchedData(req); //--> Realiza una limiieza del body de la peticion
    const data = await tracksModel.create(body);
    res.send({data});
  } catch (e) {
    handleHttpError(res, {
      userError: systemMessages.genericError,
      systemError: e.toString(),
    });
  }
};

const updateItems = (req, res) => {};

const deleteItems = (req, res) => {};

module.exports = {
  getItems,
  getItem,
  createItems,
  updateItems,
  deleteItems,
};
