const { chek } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorCreateItem = [
  chek("name").exists().notEmpity(),
  chek("album").exists().notEmpity(),
  chek("cover").exists().notEmpity(),
  chek("artist").exists().notEmpity(),
  chek("artist.name").exists().notEmpity(),
  chek("artist.nickname").exists().notEmpity(),
  chek("artist.nationality").exists().notEmpity(),
  chek("duration").exists().notEmpity(),
  chek("duration.start").exists().notEmpity(),
  chek("duration.end").exists().notEmpity(),
  chek("duration.mediaId").exists().notEmpity().isMongoId(),
  (req, res, next) => validateResults(req, res, next)
];

module.exports = { validatorCreateItem };
