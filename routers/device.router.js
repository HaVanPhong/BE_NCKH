const express= require("express");
const router= express.Router();
const multer= require("multer");
const upload = multer({ dest: "./public/" });

const syncMiddleware= require('../middlewares/async.middleware')
const {
  getAllDevice,
  createADevice,
  updateAnDevice,
  deleteAnDevice
} = require("../controllers/device.controller");
const asyncMiddleware = require("../middlewares/async.middleware");

router.route("").get(getAllDevice).post(upload.single("img"), asyncMiddleware(createADevice));
router.route("/:id").delete(deleteAnDevice).patch(updateAnDevice);

module.exports= router;