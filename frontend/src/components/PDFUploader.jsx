import React from "react";
import axios from "axios";

export default function PDFUploader({ setSummary }) {
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file); // match Flask's expected field name

    try {
      const res = await axios.post("http://127.0.0.1:5000/summarize-pdf", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSummary(res.data.summary);
    } catch (err) {
      console.error("Error uploading PDF:", err);
    }
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-200 flex flex-col">
      <h2 className="text-lg font-semibold mb-2 text-gray-700">Upload PDF</h2>
      <input
        type="file"
        accept=".pdf"
        onChange={handleUpload}
        className="mb-2 text-sm"
      />
    </div>
  );
}
