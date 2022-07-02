const express = require("express");
const router = express.Router();
const store = require("../Model/Store");

router.get("/", async (req, res, next) => {
  res.status(200).json(store.listAllProd());
});
router.get("/:prod", async (req, res, next) => {
    res.status(200).json(store.prodbyId(req.params.prod));
  });
// router.post("/", async(req, res, next) => {
//     var res.body = body
//     res.status(200).json({ping : "pong"});
//   } )
module.exports = router;
//in store req.body


