import TextExtractionScript
import llamaCall

# import mysqlCall

import mongoCall
import re
import json


def extract_and_clean_text(text):
    # Regular expression to find text enclosed in triple backticks
    backtick_regex = r"```(.*?)```"
    code_blocks = re.findall(backtick_regex, text, re.DOTALL)

    # List of escape sequences to be replaced with blanks
    escape_sequences = [r"\\n", r"\\r", r"\\t", r"\\\'", r'\\"', r"\\\\"]

    cleaned_blocks = []
    for block in code_blocks:
        for seq in escape_sequences:
            block = block.replace(seq, "")
        cleaned_blocks.append(block)

    return cleaned_blocks


text = TextExtractionScript.getText()
resultText = llamaCall.callLlama3(
    text
    # + "; suggest some complications that can happen in bullet points"
    + "; format the given text into a json format do not ignore any information "
    # + """; extract vital paramters from the text, write me an sql query to insert data into mysql table named patient_data with schema
    #         +-----------------+-------------+------+-----+---------+-------+
    #         | Field           | Type        | Null | Key | Default | Extra |
    #         +-----------------+-------------+------+-----+---------+-------+
    #         | name            | varchar(50) | YES  |     | NULL    |       |
    #         | dob             | date        | YES  |     | NULL    |       |
    #         | account_number  | int         | YES  |     | NULL    |       |
    #         | temp            | float       | YES  |     | NULL    |       |
    #         | hr              | int         | YES  |     | NULL    |       |
    #         | bp              | float       | YES  |     | NULL    |       |
    #         | wt              | float       | YES  |     | NULL    |       |
    #         | ht              | float       | YES  |     | NULL    |       |
    #         | bmi             | float       | YES  |     | NULL    |       |
    #         | medical_history | text        | YES  |     | NULL    |       |
    #         +-----------------+-------------+------+-----+---------+-------+
    # """
)
# pattern = r"INSERT\s+INTO\s+.*?;"
# queryString = re.findall(pattern, resultText, re.DOTALL | re.IGNORECASE)[0]
# removePattern = r"\n"
print(resultText)
finalQueryString = dict(extract_and_clean_text(resultText)[0])
# db = mysqlCall.mysqlData()
# connection = db.connect_to_db(
#     {
#         "user": "root",
#         "password": "1234",
#         "host": "localhost",
#         "database": "mpc",
#     }
# )
# db.runQuery(connection, finalQueryString)
client = mongoCall.mongoCall()
mongoCall.mongoInsertMany(client["mpc"], finalQueryString)
