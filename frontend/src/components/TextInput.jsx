import React, { useState } from "react";
import axios from "axios";

export default function TextInput({ setSummary }) {
  const [text, setText] = useState("");

  const handleSummarize = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:5000/summarize", { text });
      setSummary(res.data.summary);
    } catch (err) {
      console.error("Error summarizing text:", err);
    }
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-200 flex flex-col">
      <h2 className="text-lg font-semibold mb-2 text-gray-700">Text</h2>
      <textarea
        className="flex-1 border rounded-md p-2 text-sm resize-none"
        rows={8}
        placeholder="Paste or type your text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleSummarize}
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Summarize Text
      </button>
    </div>
  );
}
