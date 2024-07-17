import TextExtractionScript
import llamaCall
import mysqlCall
import re

text = TextExtractionScript.getText()
resultText = llamaCall.callLlama3(
    text
    + """; extract vital paramters from the text, write me an sql query to insert data into mysql table named patient_data with schema 
            +-----------------+-------------+------+-----+---------+-------+
            | Field           | Type        | Null | Key | Default | Extra |
            +-----------------+-------------+------+-----+---------+-------+
            | name            | varchar(50) | YES  |     | NULL    |       |
            | dob             | date        | YES  |     | NULL    |       |
            | account_number  | int         | YES  |     | NULL    |       |
            | temp            | float       | YES  |     | NULL    |       |
            | hr              | int         | YES  |     | NULL    |       |
            | bp              | float       | YES  |     | NULL    |       |
            | wt              | float       | YES  |     | NULL    |       |
            | ht              | float       | YES  |     | NULL    |       |
            | bmi             | float       | YES  |     | NULL    |       |
            | medical_history | text        | YES  |     | NULL    |       |
            +-----------------+-------------+------+-----+---------+-------+
    """
)

pattern = r"INSERT\s+INTO\s+.*?;"
queryString = re.findall(pattern, resultText, re.DOTALL | re.IGNORECASE)[0]
removePattern = r"\n"
finalQueryString = re.sub(removePattern, "", queryString)

db = mysqlCall.mysqlData()
connection = db.connect_to_db(
    {
        "user": "root",
        "password": "1234",
        "host": "localhost",
        "database": "mpc",
    }
)
db.runQuery(connection, finalQueryString)
