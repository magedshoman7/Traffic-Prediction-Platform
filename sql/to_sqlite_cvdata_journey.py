import sqlite3, csv

connection = sqlite3.connect('data.db')
cursor = connection.cursor()

########Create table in db

cursor.execute(
    """CREATE TABLE table_cv_data_trip14(
        misc INT,
        vehicle__identification__otonomo_id VARCHAR(255),
        metadata__time__epoch INT,
        location__latitude__value FLOAT,
        location__longitude__value FLOAT,
        location__road__name VARCHAR(255),
        mobility__speed__value FLOAT,
        mobility__acceleration__value FLOAT,
        location__road__speed_limit FLOAT,
        location__zone__postal_code FLOAT,
        time__stamp DATETIME,
        trip_id INT,
        trip_index INT
        )"""
    )

##########CSV rows to table in db
with open('trip_indexed1.csv','r') as file:
    no_records = 0
    next(file)
    for row in file:
        print(no_records)
        cursor.execute("INSERT INTO table_cv_data_trip14 VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",row.split(","))

        connection.commit()
        no_records += 1
connection.close()
print("\n{} Records Transferred".format(no_records))



# cursor.execute("SELECT * FROM table_cv_data4")

# print(cursor.fetchall())

# connection.commit()
# connection.close()