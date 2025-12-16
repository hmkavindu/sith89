import os
import time
import fitz  # PyMuPDF
import google.generativeai as genai
from PIL import Image
import io
from dotenv import load_dotenv
from tqdm import tqdm

# Load environment variables
load_dotenv()

# --- CONFIGURATION ---
PDF_PATH = r"..\..\dist-react\mokpura_removed 2.pdf"
OUTPUT_FILE = "mokpura_extracted_text.txt"
START_PAGE = 0  # 0-indexed
END_PAGE = 10  # Process first 10 pages only
API_KEY = "AIzaSyBWZ7GPWj62SLl_tNntDh-UmcXSLMNf3kQ"

if not API_KEY:
    print("❌ Error: GEMINI_API_KEY not found.")
    exit(1)

genai.configure(api_key=API_KEY)

# Use a model robust with vision and text. 
# Gemini 1.5 Flash is faster and cheaper, Pro is more accurate.
MODEL_NAME = 'gemini-1.5-flash-latest' 

def setup_model():
    generation_config = {
        "temperature": 0.1, # Low temperature for accurate transcription
        "top_p": 1,
        "top_k": 32,
        "max_output_tokens": 8192,
    }
    
    # Safety settings to prevent blocking religious/philosophical text
    safety_settings = [
        {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_NONE"},
        {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_NONE"},
        {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_NONE"},
        {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_NONE"},
    ]

    model = genai.GenerativeModel(
        model_name=MODEL_NAME,
        generation_config=generation_config,
        safety_settings=safety_settings
    )
    return model

def extract_text_from_page(model, page_image, page_num):
    """Sends page image to Gemini and asks for transcription."""
    prompt = """
    You are an expert Sinhala transcriber. 
    Look at this page from a Dhamma book. 
    Transcribe the Sinhala text EXACTLY as it appears. 
    
    Rules:
    1. Output ONLY the Sinhala text. Do not add introductory or concluding remarks.
    2. Maintain the paragraph structure.
    3. If there are Pali words in Sinhala script, transcribe them accurately.
    4. Ignore page numbers or headers/footers if they are irrelevant to the content.
    """
    
    try:
        response = model.generate_content([prompt, page_image])
        return response.text
    except Exception as e:
        print(f"\n⚠️ Error processing page {page_num + 1}: {e}")
        # Wait a bit in case of rate limits
        time.sleep(5)
        return f"[ERROR extracting page {page_num + 1}]"

def main():
    print(f"📖 Opening PDF: {PDF_PATH}")
    try:
        doc = fitz.open(PDF_PATH)
    except Exception as e:
        print(f"❌ Could not open PDF: {e}")
        return

    total_pages = len(doc)
    print(f"📄 Total Pages: {total_pages}")

    model = setup_model()
    
    # Determine range
    start = START_PAGE
    end = END_PAGE if END_PAGE is not None else total_pages
    
    print(f"🚀 Starting extraction from page {start+1} to {end}...")

    # Ensure output file exists or create it
    if not os.path.exists(OUTPUT_FILE):
        with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
            f.write(f"--- Extraction Started for {PDF_PATH} ---\n\n")

    for i in tqdm(range(start, end)):
        page = doc.load_page(i)
        
        # INCREASE resolution for better OCR. 2.0 = 2x zoom (144 dpi -> ~300 dpi)
        # Higher zoom = better accuracy but larger API payload
        pix = page.get_pixmap(matrix=fitz.Matrix(2, 2)) 
        
        # Convert to PIL Image
        img_data = pix.tobytes("png")
        image = Image.open(io.BytesIO(img_data))
        
        # Extract
        text = extract_text_from_page(model, image, i)
        
        # Save immediately (append mode)
        with open(OUTPUT_FILE, "a", encoding="utf-8") as f:
            f.write(f"\n\n--- Page {i + 1} ---\n\n")
            f.write(text)
        
        # Respect rate limits (Free tier has limits, Pay-as-you-go is higher)
        # 15 requests per minute is a safe baseline for free tier mostly, 
        # but flash allows more. Let's start with a small sleep.
        time.sleep(2) 

    print(f"\n✅ Extraction complete! Saved to {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
