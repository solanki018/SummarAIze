import pytesseract
from PIL import Image

def extract_text_from_image(image_path):
    try:
        image = Image.open(image_path).convert("RGB")  # Ensure image is in correct mode
        text = pytesseract.image_to_string(image)
        return text.strip()
    except Exception as e:
        return f"Error reading image: {str(e)}"
