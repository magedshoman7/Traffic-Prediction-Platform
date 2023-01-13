import sqlite3, csv

connection = sqlite3.connect('data.db')
cursor = connection.cursor()

########Create table in db

cursor.execute(
    """CREATE TABLE table_cv_data_arc11(
        nov_metadata_id_trip_id VARCHAR(255),
        metadata_time_start_epoch INT,
        nov_loc_latitude_start FLOAT,
        nov_loc_latitude_end FLOAT,
        nov_loc_longitude_start FLOAT,
        nov_loc_longitude_end  FLOAT,
        nov_loc_city_start VARCHAR(255), 
        mobility__speed__average FLOAT,
        nov_time_duration FLOAT,
        nov_mobility_distance_traveled FLOAT
        )"""
    )

    # snow_accumulation FLOAT,
    # ice_accumulation FLOAT,
    # temperature FLOAT)"""
    # )

##########CSV rows to table in db
with open('nov_arc.csv','r') as file:
    no_records = 0
    next(file)
    for row in file:
        print(no_records)
        cursor.execute("INSERT INTO table_cv_data_arc11 VALUES (?,?,?,?,?,?,?,?,?,?)",row.split(","))
        connection.commit()
        no_records += 1
connection.close()
print("\n{} Records Transferred".format(no_records))



# cursor.execute("SELECT * FROM table_cv_data4")

# print(cursor.fetchall())

# connection.commit()
# connection.close()