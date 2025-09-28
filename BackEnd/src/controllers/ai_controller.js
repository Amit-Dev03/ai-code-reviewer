const aiService = require("../services/ai_service");

module.exports.getAIReview = async (req, res) => {
  const code = req.body.code;

  if (!code) {
    return res.status(400).send("code is Required!");
  }

  const response = await aiService(code);
  res.send(response);
};
