import ollama


def callLlama3(message="Hello", systemMessage=None):
    request = []
    if systemMessage != None:
        request.append(
            {
                "role": "system",
                "content": systemMessage,
            },
        )
    request.append({"role": "user", "content": message})
    reponse = ollama.chat(
        model="llama3",
        messages=request,
    )
    return reponse["message"]["content"]
