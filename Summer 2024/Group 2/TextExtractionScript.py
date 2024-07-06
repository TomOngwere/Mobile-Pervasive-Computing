from pypdf import PdfReader


def getText():
    reader = PdfReader(r"./Test Hayley.pdf")
    page = reader.pages[0]
    text = page.extract_text()
    return text
