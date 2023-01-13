import sqlite3, csv

connection = sqlite3.connect('data.db')
cursor = connection.cursor()

########Create table in db

cursor.execute(
    """CREATE TABLE table_cv_data8(
        vehicle__identification__otonomo_id VARCHAR(255),
        metadata__time__epoch VARCHAR(255),
        location__country__code VARCHAR(50),
        location__city__name VARCHAR(255),
        location__latitude__value FLOAT,
        location__longitude__value FLOAT,
        mobility__heading__angle FLOAT,
        mobility__speed__value FLOAT,
        mobility__odometer__value FLOAT,
        vehicle__engine__rpm INT,
        mobility__acceleration__value FLOAT,
        mobility__acceleration__lateral FLOAT,
        location__altitude__value FLOAT,
        metadata__provider__name VARCHAR(255),
        location__polygon__geohash VARCHAR(255),
        location__continent__name VARCHAR(50),
        location__country__name VARCHAR(255),
        location__state__name VARCHAR(255),
        location__region__name VARCHAR(255),
        location__county__name VARCHAR(50),
        location__island__name VARCHAR(50),
        location__town__name VARCHAR(50),
        location__village__name VARCHAR(50),
        location__municipality__name VARCHAR(50),
        location__district__name VARCHAR(50),
        location__suburb__name VARCHAR(50),
        location__farm__name VARCHAR(50),
        location__neighbourhood__name VARCHAR(50),
        location__house__address VARCHAR(50),
        location__quarter__name VARCHAR(50),
        location__city__block_name VARCHAR(50),
        location__road__name VARCHAR(50),
        location__house__number VARCHAR(50),
        vehicle__engine__status VARCHAR(50),
        vehicle__fog_light__rear_status VARCHAR(50),
        vehicle__fog_light__front_status VARCHAR(50),
        location__country__code_provided VARCHAR(50),
        time__stamp DATETIME
        )"""
    )

    # snow_accumulation FLOAT,
    # ice_accumulation FLOAT,
    # temperature FLOAT)"""
    # )

##########CSV rows to table in db
with open('cv_data_1.csv','r') as file:
    no_records = 0
    next(file)
    for row in file:
        print(no_records)
        cursor.execute("INSERT INTO table_cv_data8 VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",row.split(","))

        connection.commit()
        no_records += 1
connection.close()
print("\n{} Records Transferred".format(no_records))



# cursor.execute("SELECT * FROM table_cv_data4")

# print(cursor.fetchall())

# connection.commit()
# connection.close()