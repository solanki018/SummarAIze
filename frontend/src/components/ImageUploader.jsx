import React from "react";
import axios from "axios";

export default function ImageUploader({ setSummary }) {
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file); // match Flask's expected field name

    try {
      const res = await axios.post("http://127.0.0.1:5000/ocr", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Automatically summarize the extracted text
      const extractedText = res.data.text;
      const summaryRes = await axios.post("http://127.0.0.1:5000/summarize", {
        text: extractedText,
      });
      setSummary(summaryRes.data.summary);
    } catch (err) {
      console.error("Error uploading image:", err);
    }
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-200 flex flex-col">
      <h2 className="text-lg font-semibold mb-2 text-gray-700">Upload Image</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="mb-2 text-sm"
      />
    </div>
  );
}
