import pdfplumber

def extract_text_from_pdf(pdf_path):
    try:
        text = ""
        with pdfplumber.open(pdf_path) as pdf:
            for page in pdf.pages:
                page_text = page.extract_text()
                if page_text:
                    text += page_text + "\n"
        if text.strip():
            return text.strip()
        else:
            return "No readable text found in PDF."
    except Exception as e:
        return f"Error reading PDF: {str(e)}"


