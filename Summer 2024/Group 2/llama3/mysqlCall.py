import mysql.connector


class mysqlData:
    def runQuery(self, connection, query):
        cursor = None
        result = None

        try:
            cursor = connection.cursor()
            cursor.execute(query)

            if query.lower().startswith("select"):
                result = cursor.fetchall()
            else:
                connection.commit()
                result = cursor.rowcount

        except mysql.connector.Error as error:
            print(f"Error executing query: {error}")

        finally:
            if cursor:
                cursor.close()

        return result

    def connect_to_db(self, db_config):
        try:
            self.connection = mysql.connector.connect(**db_config)
            print("Connected to the database")
            return self.connection
        except mysql.connector.Error as error:
            print(f"Error connecting to the database: {error}")
            return None


# connection = connect_to_db()
# if connection:
#     connection.close()
# else:
#     print("Failed to connect to the database")
