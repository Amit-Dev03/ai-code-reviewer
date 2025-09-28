const { GoogleGenerativeAI } = require("@google/generative-ai");
const systemInstruction = require("../SystemInstruction/systemInstruction");

// Access your API key from environment variables
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function reviewCode(code) {
  try {
    // Get the generative model
    // Note: "gemini-1.5-flash" is used here as "2.5" is not a public model name.
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: systemInstruction,
    });

    const result = await model.generateContent(code);
    const response = result.response.text(); //res is in nested format => result.response.text()

    return response;
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

module.exports = reviewCode;
