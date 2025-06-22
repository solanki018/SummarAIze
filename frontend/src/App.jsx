import React, { useState } from "react";
import TextInput from "./components/TextInput";
import PDFUploader from "./components/PDFUploader";
import ImageUploader from "./components/ImageUploader";
import SummaryBox from "./components/SummaryBox";

export default function App() {
  const [summary, setSummary] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">SummarAIze</h1>
          <p className="text-gray-500">Summarize text, PDFs, and images with AI</p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          <TextInput setSummary={setSummary} />
          <PDFUploader setSummary={setSummary} />
          <ImageUploader setSummary={setSummary} />
        </div>

        <SummaryBox summary={summary} />
      </div>
    </div>
  );
}
