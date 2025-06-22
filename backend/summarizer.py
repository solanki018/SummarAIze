from transformers import pipeline

# Load pre-trained summarization model
summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

def generate_summary(text):
    # Optional: Truncate long text
    if len(text.split()) > 1024:
        text = ' '.join(text.split()[:1024])  # BART max input length

    summary = summarizer(text, max_length=150, min_length=40, do_sample=False)
    return summary[0]['summary_text']
