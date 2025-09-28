import { useState } from "react";
import "./App.css";
import Left from "./components/Left";
import Right from "./components/Right";

function App() {
  // State remains in the parent component
  const [code, setCode] = useState(
`function sum(a, b) {
  // This is a simple function
  return a + b;
}`
  );
  const [review, setReview] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // The handleReviewRequest function has been moved to Left.jsx

  return (
    // Main container using Flexbox
    <div className="flex h-screen bg-zinc-900 text-white gap-4 p-4">
      {/* Pass state and state setters down as props */}
      <Left 
        code={code} 
        setCode={setCode} 
        setReview={setReview} // Pass the setter function
        setIsLoading={setIsLoading} // Pass the setter function
        isLoading={isLoading} 
      />
      <Right review={review} isLoading={isLoading} />
    </div>
  );
}

export default App;

