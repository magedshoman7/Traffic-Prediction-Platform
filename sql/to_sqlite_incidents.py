import sqlite3, csv

connection = sqlite3.connect('data.db')
cursor = connection.cursor()

########Create table in db
cursor.execute(
    """CREATE TABLE table_incidents_8(
        country VARCHAR(50),
        n_thumbs_up INT,
        city VARCHAR(255),
        report_rating INT,
        confidence INT,
        reliability INT,
        type VARCHAR(255),
        uuid VARCHAR(255),
        road_type INT,
        magvar INT,
        subtype VARCHAR(255),
        street VARCHAR(255),
        report_description VARCHAR(255),
        longitude FLOAT,
        latitude FLOAT,
        pub_mills DATETIME,
        request_millis DATETIME,
        county VARCHAR(255),
        event_class VARCHAR(255),
        req_date DATETIME,
        start_time DATETIME,
        end_time DATETIME,
        duration FLOAT,
        icon VARCHAR(50),
        icon_intensity INT
        )"""
    )

##########CSV rows to table in db
with open('inc_cong_icon.csv','r') as file:
    no_records = 0
    for row in file:
        print(no_records)
        cursor.execute("INSERT INTO table_incidents_8 VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",row.split(","))
        connection.commit()
        no_records += 1
connection.close()
print("\n{} Records Transferred".format(no_records))



# cursor.execute("SELECT * FROM sample2")

# print(cursor.fetchall())

# connection.commit()
# connection.close()