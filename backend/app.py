from flask import Flask, request, jsonify
from summarizer import generate_summary
from ocr import extract_text_from_image
from pdf_parser import extract_text_from_pdf
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# Health check route
@app.route('/')
def home():
    return jsonify({"message": "SummarAIze backend is running 🚀"})

# Summarize plain text
@app.route('/summarize', methods=['POST'])
def summarize_text():
    data = request.get_json()
    text = data.get('text', '')
    if not text:
        return jsonify({"error": "No text provided"}), 400
    summary = generate_summary(text)
    return jsonify({"summary": summary})

# OCR for images + summarize
@app.route('/summarize-image', methods=['POST'])
def summarize_image():
    if 'image' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400
    image = request.files['image']
    image_path = "temp_image.png"
    image.save(image_path)
    extracted_text = extract_text_from_image(image_path)
    os.remove(image_path)
    summary = generate_summary(extracted_text)
    return jsonify({"summary": summary})

# Summarize PDF
@app.route('/summarize-pdf', methods=['POST'])
def summarize_pdf():
    if 'file' not in request.files:
        return jsonify({"error": "No PDF uploaded"}), 400
    pdf = request.files['file']
    pdf_path = "temp_file.pdf"
    pdf.save(pdf_path)
    extracted_text = extract_text_from_pdf(pdf_path)
    os.remove(pdf_path)
    summary = generate_summary(extracted_text)
    return jsonify({"summary": summary})

if __name__ == '__main__':
    app.run(debug=True)
