const express = require("express");
const router = express.Router();

const aiContoller = require("../controllers/ai_controller");

router.post("/get-review", aiContoller.getAIReview);

module.exports = router;
