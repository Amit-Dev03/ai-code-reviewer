import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";
import axios from "axios"; // Import axios

// Receive props from the App component, including state setters
const Left = ({ code, setCode, setReview, setIsLoading, isLoading }) => {
  // API call logic is now inside the Left component
  const handleReviewRequest = async () => {
    setIsLoading(true);
    setReview(""); // Clear previous review
    try {
      // Use axios for the POST request
      const response = await axios.post("http://localhost:3000/ai/get-review", {
        code, // The data payload
      });

      // With axios, the response data is in the `data` property
      setReview(response.data);
    } catch (error) {
      console.error("Failed to fetch code review:", error);
      // Handle different types of axios errors for better user feedback
      if (error.response) {
        // The request was made and the server responded with a status code
        setReview(
          `Error: The server responded with status ${error.response.status}. Please check the console.`
        );
      } else if (error.request) {
        // The request was made but no response was received
        setReview(
          "Error: No response from the server. Please ensure the backend is running."
        );
      } else {
        // Something happened in setting up the request that triggered an Error
        setReview(
          "Error: Could not get a review. An unexpected error occurred."
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      <h2 className="text-xl font-bold mb-2 text-gray-200">
        Write code for review 🧑‍💻💻:
      </h2>

      <div className="editor-container relative bg-zinc-800 border border-zinc-700 rounded-md flex-grow">
        <Editor
          value={code}
          onValueChange={(code) => setCode(code)}
          highlight={(code) => highlight(code, languages.js)}
          padding={12}
          className="font-mono text-zinc-300"
          style={{
            minHeight: "100%",
          }}
          disabled={isLoading} // Disable editor while loading
        />
      </div>

      <button
        onClick={handleReviewRequest}
        disabled={isLoading} // Disable button while loading
        className="w-full mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-zinc-900 transition-colors duration-200 disabled:bg-gray-500 disabled:cursor-not-allowed"
      >
        {isLoading ? "Reviewing..." : "Review Code"}
      </button>
    </div>
  );
};

export default Left;
