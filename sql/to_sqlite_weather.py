import sqlite3, csv

connection = sqlite3.connect('data.db')
cursor = connection.cursor()

########Create table in db
cursor.execute(
    """CREATE TABLE table_weather4(
        snow_accumulation FLOAT,
        ice_accumulation FLOAT,
        temperature FLOAT,
        temperature_apparent FLOAT,
        solarGHI FLOAT,
        visibility FLOAT,
        pollutant_SO2 FLOAT,
        pollutant_CO FLOAT,
        precipitation_type FLOAT,
        pollutant_NO2 FLOAT,
        pollutant_O3 FLOAT,
        weed_ragweed_index FLOAT,
        epa_index FLOAT,
        epa_primary_pollutant FLOAT,
        tree_index FLOAT,
        epa_health_concern FLOAT,
        humidity FLOAT,
        weed_index FLOAT,
        cloud_cover FLOAT,
        fire_index FLOAT,
        weather_code FLOAT,
        cloud_ceiling FLOAT,
        cloud_base FLOAT,
        hail_binary FLOAT,
        precipitation_intensity FLOAT,
        pressure_surface_level FLOAT,
        pressure_sea_level FLOAT,
        wind_speed FLOAT,
        wind_direction FLOAT,
        wind_gust FLOAT,
        dew_point FLOAT,
        pub_millis DATETIME,
        latitude FLOAT,
        longitude FLOAT,
        county VARCHAR(50),
        icon VARCHAR(50),
        icon_intensity INT,
        weather_desc VARCHAR(255)
        )"""
    )

    # snow_accumulation FLOAT,
    # ice_accumulation FLOAT,
    # temperature FLOAT)"""
    # )

##########CSV rows to table in db
with open('weather_data.csv','r') as file:
    no_records = 0
    for row in file:
        print(no_records)
        cursor.execute("INSERT INTO table_weather4 VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",row.split(","))
        connection.commit()
        no_records += 1
connection.close()
print("\n{} Records Transferred".format(no_records))



# cursor.execute("SELECT * FROM sample2")

# print(cursor.fetchall())

# connection.commit()
# connection.close()