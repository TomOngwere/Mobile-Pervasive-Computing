import TextExtractionScript
import llamaCall

text = TextExtractionScript.getText()
print(text)
print(llamaCall.callLlama3(text + "; extract vital parameters from the text"))
