import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypePrism from 'rehype-prism-plus'; // Import the plugin
import 'prismjs/themes/prism-tomorrow.css'; // Import a theme for styling

// Receive review and isLoading state as props
const Right = ({ review, isLoading }) => {
  // Conditional rendering based on loading and review state
  const renderContent = ()=> {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      );
    }

    if (!review) {
      return <p>Your AI-generated code review will appear here...</p>;
    }

    // FIX: Added the rehypePlugins prop to enable syntax highlighting
    return (
      <div className="prose prose-invert max-w-none">
        <ReactMarkdown rehypePlugins={[rehypePrism]}>{review}</ReactMarkdown>
      </div>
    );
  };

  return (
    <div className="flex-1 p-4 bg-zinc-800 border border-zinc-700 rounded-md overflow-y-auto">
      <h2 className="text-xl font-bold mb-4 text-gray-200 border-b border-zinc-700 pb-2">
        Code Review Analysis 📝
      </h2>
      <div className="review-content h-full">
        {renderContent()}
      </div>
    </div>
  );
};

export default Right;

