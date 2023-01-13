import sqlite3, csv

connection = sqlite3.connect('data.db')
cursor = connection.cursor()

########Create table in db

cursor.execute(
    """CREATE TABLE table_cv_fused1(
        metadata__time__epoch INT,
        location__latitude__value FLOAT,
        location__longitude__value FLOAT,
        location__road__name VARCHAR(255),
        mobility__speed__value FLOAT,
        nxt__latitude__value FLOAT,
        nxt__longitude__value FLOAT,
        icon VARCHAR(255),
        event_latitude FLOAT,
        event_longitude FLOAT,
        event_class VARCHAR(255),
        tmc_code VARCHAR(255),
        speed FLOAT,
        road VARCHAR(255),
        direction VARCHAR(255),
        start_latitude FLOAT,
        start_longitude FLOAT,
        end_latitude FLOAT,
        end_longitude FLOAT
        )"""
    )

##########CSV rows to table in db
with open('fused.csv','r') as file:
    no_records = 0
    next(file)
    for row in file:
        print(no_records)
        cursor.execute("INSERT INTO table_cv_fused1 VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",row.split(","))

        connection.commit()
        no_records += 1
connection.close()
print("\n{} Records Transferred".format(no_records))



# cursor.execute("SELECT * FROM table_cv_data4")

# print(cursor.fetchall())

# connection.commit()
# connection.close()