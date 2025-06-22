import requests

url = "http://127.0.0.1:5000/summarize"
payload = {
    "text": "Machine learning is a field of artificial intelligence that allows computers to learn from data and make decisions without being explicitly programmed."
}

try:
    response = requests.post(url, json=payload)
    print(response.json())
except Exception as e:
    print(f"Request failed: {e}")
