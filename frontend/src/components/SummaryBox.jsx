import React from "react";

export default function SummaryBox({ summary }) {
  if (!summary) return null;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-xl font-bold text-green-600 mb-3">📝 Summary</h2>
      <p className="text-gray-800 whitespace-pre-line">{summary}</p>
    </div>
  );
}
