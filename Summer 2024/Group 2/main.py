import TextExtractionScript
import llamaCall

text = TextExtractionScript.getText()
print(llamaCall.callLlama3(text + "; what disease does the patient have?"))
