const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("../sql/data.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);

    console.log("connection successful");
});

const express = require('express');
const app = express();
// const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/incidents', (req,res) => {
    db.all("SELECT * FROM table_incidents_8", (err, data) => {
        if (err) {
            console.log(err)
        } else {
            var rows_data = []
            for (const key in data) {
                rows_data.push([
                    data[key].country,
                    data[key].n_thumbs_up,
                    data[key].city,
                    data[key].report_rating,
                    data[key].confidence,
                    data[key].reliability,
                    data[key].type,
                    data[key].uuid,
                    data[key].road_type,
                    data[key].magvar,
                    data[key].subtype,
                    data[key].street,
                    data[key].report_description,
                    data[key].longitude,
                    data[key].latitude,
                    data[key].pub_mills,
                    data[key].request_millis,
                    data[key].county,
                    data[key].event_class,
                    data[key].req_date,
                    data[key].start_time,
                    data[key].end_time,
                    data[key].duration,
                    data[key].icon,
                    data[key].icon_intensity
                ]);
                };
            var new_data = {
                fields: [
                  {name: "country", format: "", type: "string"},
                  {name: "n_thumbs_up", format: "", type: "integer"},
                  {name: "city", format: "", type: "string"},
                  {name: "report_rating", format: "", type: "real"},
                  {name: "confidence", format: "", type: "real"},
                  {name: "reliability", format: "", type: "real"},
                  {name: "type", format: "", type: "string"},
                  {name: "uuid", format: "", type: "string"},
                  {name: "road_type", format: "", type: "string"},
                  {name: "magvar", format: "", type: "real"},
                  {name: "subtype", format: "", type: "string"},
                  {name: "street", format: "", type: "string"},
                  {name: "report_description", format: "", type: "string"},
                  {name: "longitude", format: "", type: "real"},
                  {name: "latitude", format: "", type: "real"},
                  {name: "pub_mills", format: "YYYY-M-D H:m:s", type: "integer"},
                  {name: "request_millis", format: "YYYY-M-D H:m:s", type: "string"},
                  {name: "county", format: "", type: "string"},
                  {name: "event_class", format: "", type: "string"},
                  {name: "req_date", format: "YYYY-M-D H:m:s", type: "timestamp"},
                  {name: "start_time", format: "YYYY-M-D H:m:s", type: "timestamp"},
                  {name: "end_time", format: "YYYY-M-D H:m:s", type: "timestamp"},
                  {name: "duration", format: "", type: "real"},
                  {name: "icon", format: "", type: "string"},
                  {name: "icon_intensity", format: "", type: "integer"}
                ],
                rows: rows_data
                
            };
            res.send(new_data);
        }
    });
});

app.get('/cvdata_line_specific', (req,res) => {
    db.all("SELECT * FROM table_cv_data_line WHERE vehicle__identification__otonomo_id like '3e5ec7cd0793e80662c4779049eaf945'", (err, data) => {
        if (err) {
            console.log(err)
        } else {
            var rows_data = []
            for (const key in data) {
                rows_data.push([
                    data[key].vehicle__identification__otonomo_id, 
                    data[key].metadata__time__epoch,
                    data[key].location__latitude__value,
                    data[key].location__longitude__value,
                    data[key].location__road__name,
                    data[key].mobility__speed__value,
                    data[key].mobility__acceleration__value,
                    data[key].trip_index,
                    data[key].nxt__latitude__value,
                    data[key].nxt__longitude__value
                ]);
                };
            var new_data = {
                fields: [
                  {name: "vehicle__identification__otonomo_id", format: "", type: "string"},
                  {name: "metadata__time__epoch", format: "", type: "integer"},
                  {name: "location__latitude__value", format: "", type: "real"},
                  {name: "location__longitude__value", format: "", type: "real"},
                  {name: "location__road__name", format: "", type: "real"},
                  {name: "mobility__speed__value", format: "", type: "real"},
                  {name: "mobility__acceleration__value", format: "", type: "real"},
                  {name: "trip_index", format: "", type: "integer"},
                  {name: "nxt__latitude__value", format: "", type: "real"},
                  {name: "nxt__longitude__value", format: "", type: "real"},
                ],
                rows: rows_data
                
            };
            res.send(new_data);
        }
    });
});

app.get('/cvdata_line', (req,res) => {
    db.all("SELECT * FROM table_cv_data_line", (err, data) => {
        if (err) {
            console.log(err)
        } else {
            var rows_data = []
            for (const key in data) {
                rows_data.push([
                    data[key].vehicle__identification__otonomo_id, 
                    data[key].metadata__time__epoch,
                    data[key].location__latitude__value,
                    data[key].location__longitude__value,
                    data[key].location__road__name,
                    data[key].mobility__speed__value,
                    data[key].mobility__acceleration__value,
                    data[key].trip_index,
                    data[key].nxt__latitude__value,
                    data[key].nxt__longitude__value
                ]);
                };
            var new_data = {
                fields: [
                  {name: "vehicle__identification__otonomo_id", format: "", type: "string"},
                  {name: "metadata__time__epoch", format: "", type: "integer"},
                  {name: "location__latitude__value", format: "", type: "real"},
                  {name: "location__longitude__value", format: "", type: "real"},
                  {name: "location__road__name", format: "", type: "real"},
                  {name: "mobility__speed__value", format: "", type: "real"},
                  {name: "mobility__acceleration__value", format: "", type: "real"},
                  {name: "trip_index", format: "", type: "integer"},
                  {name: "nxt__latitude__value", format: "", type: "real"},
                  {name: "nxt__longitude__value", format: "", type: "real"},
                ],
                rows: rows_data
                
            };
            res.send(new_data);
        }
    });
});

app.get('/cvdata_line_1', (req,res) => {
    db.all("SELECT * FROM table_cv_data_line WHERE location__road__name LIKE '%shaw%'", (err, data) => {
        if (err) {
            console.log(err)
        } else {
            var rows_data = []
            for (const key in data) {
                rows_data.push([
                    data[key].vehicle__identification__otonomo_id, 
                    data[key].metadata__time__epoch,
                    data[key].location__latitude__value,
                    data[key].location__longitude__value,
                    data[key].location__road__name,
                    data[key].mobility__speed__value,
                    data[key].mobility__acceleration__value,
                    data[key].trip_index,
                    data[key].nxt__latitude__value,
                    data[key].nxt__longitude__value
                ]);
                };
            var new_data = {
                fields: [
                  {name: "vehicle__identification__otonomo_id", format: "", type: "string"},
                  {name: "metadata__time__epoch", format: "", type: "integer"},
                  {name: "location__latitude__value", format: "", type: "real"},
                  {name: "location__longitude__value", format: "", type: "real"},
                  {name: "location__road__name", format: "", type: "real"},
                  {name: "mobility__speed__value", format: "", type: "real"},
                  {name: "mobility__acceleration__value", format: "", type: "real"},
                  {name: "trip_index", format: "", type: "integer"},
                  {name: "nxt__latitude__value", format: "", type: "real"},
                  {name: "nxt__longitude__value", format: "", type: "real"},
                ],
                rows: rows_data
                
            };
            res.send(new_data);
        }
    });
});

app.get('/cvdata_line_2', (req,res) => {
    db.all("SELECT * FROM table_cv_data_line WHERE location__road__name LIKE '%lindell%'", (err, data) => {
        if (err) {
            console.log(err)
        } else {
            var rows_data = []
            for (const key in data) {
                rows_data.push([
                    data[key].vehicle__identification__otonomo_id, 
                    data[key].metadata__time__epoch,
                    data[key].location__latitude__value,
                    data[key].location__longitude__value,
                    data[key].location__road__name,
                    data[key].mobility__speed__value,
                    data[key].mobility__acceleration__value,
                    data[key].trip_index,
                    data[key].nxt__latitude__value,
                    data[key].nxt__longitude__value
                ]);
                };
            var new_data = {
                fields: [
                  {name: "vehicle__identification__otonomo_id", format: "", type: "string"},
                  {name: "metadata__time__epoch", format: "", type: "integer"},
                  {name: "location__latitude__value", format: "", type: "real"},
                  {name: "location__longitude__value", format: "", type: "real"},
                  {name: "location__road__name", format: "", type: "real"},
                  {name: "mobility__speed__value", format: "", type: "real"},
                  {name: "mobility__acceleration__value", format: "", type: "real"},
                  {name: "trip_index", format: "", type: "integer"},
                  {name: "nxt__latitude__value", format: "", type: "real"},
                  {name: "nxt__longitude__value", format: "", type: "real"},
                ],
                rows: rows_data
                
            };
            res.send(new_data);
        }
    });
});

app.get('/cvdata_line_3', (req,res) => {
    db.all("SELECT * FROM table_cv_data_line WHERE mobility__speed__value = 0", (err, data) => {
        if (err) {
            console.log(err)
        } else {
            var rows_data = []
            for (const key in data) {
                rows_data.push([
                    data[key].vehicle__identification__otonomo_id, 
                    data[key].metadata__time__epoch,
                    data[key].location__latitude__value,
                    data[key].location__longitude__value,
                    data[key].location__road__name,
                    data[key].mobility__speed__value,
                    data[key].mobility__acceleration__value,
                    data[key].trip_index,
                    data[key].nxt__latitude__value,
                    data[key].nxt__longitude__value
                ]);
                };
            var new_data = {
                fields: [
                  {name: "vehicle__identification__otonomo_id", format: "", type: "string"},
                  {name: "metadata__time__epoch", format: "", type: "integer"},
                  {name: "location__latitude__value", format: "", type: "real"},
                  {name: "location__longitude__value", format: "", type: "real"},
                  {name: "location__road__name", format: "", type: "real"},
                  {name: "mobility__speed__value", format: "", type: "real"},
                  {name: "mobility__acceleration__value", format: "", type: "real"},
                  {name: "trip_index", format: "", type: "integer"},
                  {name: "nxt__latitude__value", format: "", type: "real"},
                  {name: "nxt__longitude__value", format: "", type: "real"},
                ],
                rows: rows_data
                
            };
            res.send(new_data);
        }
    });
});

app.get('/cvdata_fused', (req,res) => {
    db.all("SELECT * FROM table_cv_fused1", (err, data) => {
        if (err) {
            console.log(err)
        } else {
            var rows_data = []
            for (const key in data) {
                rows_data.push([
                    data[key].metadata__time__epoch, 
                    data[key].location__latitude__value,
                    data[key].location__longitude__value,
                    data[key].location__road__name,
                    data[key].mobility__speed__value,
                    data[key].nxt__latitude__value,
                    data[key].nxt__longitude__value,
                    data[key].icon,
                    data[key].event_latitude,
                    data[key].event_longitude,
                    data[key].event_class, 
                    data[key].tmc_code,
                    data[key].speed,
                    data[key].road,
                    data[key].direction,
                    data[key].start_latitude,
                    data[key].start_longitude,
                    data[key].end_latitude,
                    data[key].end_longitude
                ]);
                };
            var new_data = {
                fields: [
                  {name: "metadata__time__epoch", format: "", type: "integer"},
                  {name: "location__latitude__value", format: "", type: "real"},
                  {name: "location__longitude__value", format: "", type: "real"},
                  {name: "location__road__name", format: "", type: "string"},
                  {name: "mobility__speed__value", format: "", type: "real"},
                  {name: "nxt__latitude__value", format: "", type: "real"},
                  {name: "nxt__longitude__value", format: "", type: "real"},
                  {name: "icon", format: "", type: "string"},
                  {name: "event_latitude", format: "", type: "real"},
                  {name: "event_longitude", format: "", type: "real"},
                  {name: "event_class", format: "", type: "string"},
                  {name: "tmc_code", format: "", type: "string"},
                  {name: "speed", format: "", type: "real"},
                  {name: "road", format: "", type: "string"},
                  {name: "direction", format: "", type: "string"},
                  {name: "start_latitude", format: "", type: "real"},
                  {name: "start_longitude", format: "", type: "real"},
                  {name: "end_latitude", format: "", type: "real"},
                  {name: "end_longitude", format: "", type: "real"}
                ],
                rows: rows_data
                
            };
            res.send(new_data);
        }
    });
});

app.get('/cvdata_arc_trip', (req,res) => {
    db.all("SELECT * FROM table_cv_data_arc11", (err, data) => {
        if (err) {
            console.log(err)
        } else {
            var rows_data = []
            for (const key in data) {
                rows_data.push([
                    data[key].metadata_time_start_epoch, 
                    data[key].nov_loc_latitude_start,
                    data[key].nov_loc_latitude_end,
                    data[key].nov_loc_longitude_start,
                    data[key].nov_loc_longitude_end,
                    data[key].nov_loc_city_start,
                    data[key].mobility__speed__average,
                    data[key].nov_time_duration,
                    data[key].nov_mobility_distance_traveled
                ]);
                };
            var new_data = {
                fields: [
                  {name: "metadata_time_start_epoch", format: "", type: "integer"},
                  {name: "nov_loc_latitude_start", format: "", type: "real"},
                  {name: "nov_loc_latitude_end", format: "", type: "real"},
                  {name: "nov_loc_longitude_start", format: "", type: "real"},
                  {name: "nov_loc_longitude_end", format: "", type: "real"},
                  {name: "nov_loc_city_start", format: "", type: "string"},
                  {name: "mobility__speed__average", format: "", type: "real"},
                  {name: "nov_time_duration", format: "", type: "real"},
                  {name: "nov_mobility_distance_traveled", format: "", type: "real"}
                ],
                rows: rows_data
                
            };
            res.send(new_data);
        }
    });
});

app.get('/cvdata_arc', (req,res) => {
    db.all("SELECT * FROM table_cv_data_arc11 WHERE nov_loc_city_start like 'Saint Charles'", (err, data) => {
        if (err) {
            console.log(err)
        } else {
            var rows_data = []
            for (const key in data) {
                rows_data.push([
                    data[key].metadata_time_start_epoch, 
                    data[key].nov_loc_latitude_start,
                    data[key].nov_loc_latitude_end,
                    data[key].nov_loc_longitude_start,
                    data[key].nov_loc_longitude_end,
                    data[key].nov_loc_city_start,
                    data[key].mobility__speed__average,
                    data[key].nov_time_duration,
                    data[key].nov_mobility_distance_traveled
                ]);
                };
            var new_data = {
                fields: [
                  {name: "metadata_time_start_epoch", format: "", type: "integer"},
                  {name: "nov_loc_latitude_start", format: "", type: "real"},
                  {name: "nov_loc_latitude_end", format: "", type: "real"},
                  {name: "nov_loc_longitude_start", format: "", type: "real"},
                  {name: "nov_loc_longitude_end", format: "", type: "real"},
                  {name: "nov_loc_city_start", format: "", type: "string"},
                  {name: "mobility__speed__average", format: "", type: "real"},
                  {name: "nov_time_duration", format: "", type: "real"},
                  {name: "nov_mobility_distance_traveled", format: "", type: "real"}
                ],
                rows: rows_data
                
            };
            res.send(new_data);
        }
    });
});

app.get('/cvdata_journey', (req,res) => {
    db.all("SELECT * FROM table_cv_data_trip14 LIMIT 100000", (err, data) => {
        if (err) {
            console.log(err)
        } else {
            var features_cllcn = []
            var k = 0
            for (var i = 3; i < 1000; i++){
                var data_id = data.filter(function (el){
                    return el.trip_index == i
                });
                coordinates = []
                for (const id_trip_row in data_id){
                    coordinates.push([data_id[id_trip_row].location__longitude__value,data_id[id_trip_row].location__latitude__value,0,data_id[id_trip_row].metadata__time__epoch])
                    var vehicles__identification__otonomo_id = data_id[id_trip_row].vehicle__identification__otonomo_id
                    var trip_index = data_id[id_trip_row].trip_index
                    var mobility__speed__value = data_id[id_trip_row].mobility__speed__value
                }
                var appended_data = {
                    type: "Feature",
                    geometry:{
                        type: "LineString",
                        coordinates:coordinates
                    },
                    properties:{
                        oton_id: vehicles__identification__otonomo_id,
                        trip_idx: trip_index,
                        speed: mobility__speed__value,
                    }
                }
                features_cllcn[k] = appended_data
                var k = k+1
            }
            var new_data = {
                type: "FeatureCollection",
                features:features_cllcn
            }

            res.send(new_data);
        }
    });
});

app.get('/cvdata_kepler', (req,res) => {
    db.all("SELECT * FROM table_cv_data8 LIMIT 10000", (err, data) => {
        if (err) {
            console.log(err)
        } else {
            var rows_data = []
            for (const key in data) {
                rows_data.push([data[key].vehicle__identification__otonomo_id, 
                    data[key].metadata__time__epoch,
                    data[key].location__country__code,
                    data[key].location__city__name,
                    data[key].location__latitude__value,
                    data[key].location__longitude__value,
                    data[key].mobility__heading__angle,
                    data[key].mobility__speed__value,
                    data[key].mobility__odometer__value,
                    data[key].vehicle__engine__rpm,
                    data[key].mobility__acceleration__value,
                    data[key].mobility__acceleration__lateral,
                    data[key].location__altitude__value,
                    data[key].metadata__provider__name,
                    data[key].location__polygon__geohash,
                    data[key].location__continent__name,
                    data[key].location__country__name,
                    data[key].location__state__name,
                    data[key].location__region__name,
                    data[key].location__county__name,
                    data[key].location__island__name,
                    data[key].location__town__name,
                    data[key].location__village__name,
                    data[key].location__municipality__name,
                    data[key].location__district__name,
                    data[key].location__suburb__name,
                    data[key].location__farm__name,
                    data[key].location__neighbourhood__name,
                    data[key].location__house__address,
                    data[key].location__quarter__name,
                    data[key].location__city__block_name,
                    data[key].location__road__name,
                    data[key].location__house__number,
                    data[key].vehicle__engine__status,
                    data[key].vehicle__fog_light__rear_status,
                    data[key].vehicle__fog_light__front_status,
                    data[key].location__country__code_provided,
                    data[key].time__stamp
                ]);
                };
            var new_data = {
                fields: [
                  {name: "vehicle__identification__otonomo_id", format: "", type: "string"},
                  {name: "metadata__time__epoch", format: "", type: "string"},
                  {name: "location__country__code", format: "", type: "string"},
                  {name: "location__city__name", format: "", type: "string"},
                  {name: "latitude", format: "", type: "real"},
                  {name: "longitude", format: "", type: "real"},
                  {name: "mobility__heading__angle", format: "", type: "real"},
                  {name: "mobility__speed__value", format: "", type: "real"},
                  {name: "mobility__odometer__value", format: "", type: "real"},
                  {name: "vehicle__engine__rpm", format: "", type: "integer"},
                  {name: "mobility__acceleration__value", format: "", type: "real"},
                  {name: "mobility__acceleration__lateral", format: "", type: "real"},
                  {name: "location__altitude__value", format: "", type: "real"},
                  {name: "metadata__provider__name", format: "", type: "string"},
                  {name: "location__polygon__geohash", format: "", type: "string"},
                  {name: "location__continent__name", format: "", type: "string"},
                  {name: "location__country__name", format: "", type: "string"},
                  {name: "location__state__name", format: "", type: "string"},
                  {name: "location__region__name", format: "", type: "string"},
                  {name: "location__county__name", format: "", type: "string"},
                  {name: "location__island__name", format: "", type: "timestamp"},
                  {name: "location__town__name", format: "", type: "timestamp"},
                  {name: "location__village__name", format: "", type: "timestamp"},
                  {name: "location__municipality__name", format: "", type: "string"},
                  {name: "location__district__name", format: "", type: "string"},
                  {name: "location__suburb__name", format: "", type: "string"},
                  {name: "location__farm__name", format: "", type: "string"},
                  {name: "location__neighbourhood__name", format: "", type: "string"},
                  {name: "location__house__address", format: "", type: "string"},
                  {name: "location__quarter__name", format: "", type: "string"},
                  {name: "location__city__block_name", format: "", type: "string"},
                  {name: "location__road__name", format: "", type: "string"},
                  {name: "location__house__number", format: "", type: "string"},
                  {name: "vehicle__engine__status", format: "", type: "string"},
                  {name: "vehicle__fog_light__rear_status", format: "", type: "string"},
                  {name: "vehicle__fog_light__front_status", format: "", type: "string"},
                  {name: "location__country__code_provided", format: "", type: "string"},
                  {name: "time__stamp", format: "YYYY-M-D H:m:s", type: "timestamp"}
                ],
                rows: rows_data
                
            };
            res.send(new_data);
        }
    });
});

app.get('/weather_kepler', (req,res) => {
    db.all("SELECT * FROM table_weather4", (err, data) => {
        if (err) {
            console.log(err)
        } else {
            var rows_data = []
            for (const key in data) {
                rows_data.push([
                    data[key].snow_accumulation, 
                    data[key].ice_accumulation,
                    data[key].temperature,
                    data[key].temperature_apparent,
                    data[key].solarGHI,
                    data[key].visibility,
                    data[key].pollutant_SO2,
                    data[key].pollutant_CO,
                    data[key].precipitation_type,
                    data[key].pollutant_NO2,
                    data[key].pollutant_O3,
                    data[key].weed_ragweed_index,
                    data[key].epa_index,
                    data[key].epa_primary_pollutant,
                    data[key].tree_index,
                    data[key].epa_health_concern,
                    data[key].humidity,
                    data[key].weed_index,
                    data[key].cloud_cover,
                    data[key].fire_index,
                    data[key].weather_code,
                    data[key].cloud_ceiling,
                    data[key].cloud_base,
                    data[key].hail_binary,
                    data[key].precipitation_intensity,
                    data[key].pressure_surface_level,
                    data[key].pressure_sea_level,
                    data[key].wind_speed,
                    data[key].wind_direction,
                    data[key].wind_gust,
                    data[key].dew_point,
                    data[key].pub_millis,
                    data[key].latitude,
                    data[key].longitude,
                    data[key].county,
                    data[key].icon,
                    data[key].icon_intensity,
                    data[key].weather_desc
                ]);
                };
            var new_data = {
                fields: [
                  {name: "snow_accumulation", format: "", type: "real"},
                  {name: "ice_accumulation", format: "", type: "real"},
                  {name: "temperature", format: "", type: "real"},
                  {name: "temperature_apparent", format: "", type: "real"},
                  {name: "solarGHI", format: "", type: "real"},
                  {name: "visibility", format: "", type: "real"},
                  {name: "pollutant_SO2", format: "", type: "real"},
                  {name: "pollutant_CO", format: "", type: "real"},
                  {name: "precipitation_type", format: "", type: "real"},
                  {name: "pollutant_NO2", format: "", type: "real"},
                  {name: "pollutant_O3", format: "", type: "real"},
                  {name: "weed_ragweed_index", format: "", type: "real"},
                  {name: "epa_index", format: "", type: "real"},
                  {name: "epa_primary_pollutant", format: "", type: "real"},
                  {name: "tree_index", format: "", type: "real"},
                  {name: "epa_health_concern", format: "", type: "real"},
                  {name: "humidity", format: "", type: "real"},
                  {name: "weed_index", format: "", type: "real"},
                  {name: "cloud_cover", format: "", type: "real"},
                  {name: "fire_index", format: "", type: "real"},
                  {name: "weather_code", format: "", type: "real"},
                  {name: "cloud_ceiling", format: "", type: "real"},
                  {name: "cloud_base", format: "", type: "real"},
                  {name: "hail_binary", format: "", type: "real"},
                  {name: "precipitation_intensity", format: "", type: "real"},
                  {name: "pressure_surface_level", format: "", type: "real"},
                  {name: "pressure_sea_level", format: "", type: "real"},
                  {name: "wind_speed", format: "", type: "real"},
                  {name: "wind_direction", format: "", type: "real"},
                  {name: "wind_gust", format: "", type: "real"},
                  {name: "dew_point", format: "", type: "real"},
                  {name: "pub_millis", format: "", type: "timestamp"},
                  {name: "latitude", format: "", type: "real"},
                  {name: "longitude", format: "", type: "real"},
                  {name: "county", format: "", type: "string"},
                  {name: "icon", format: "", type: "string"},
                  {name: "icon_intensity", format: "", type: "integer"},
                  {name: "weather_desc", format: "", type: "string"}
                ],
                rows: rows_data.slice(1)
                
            };
            res.send(new_data);
        }
    });
});

app.listen(3001, () =>{
    console.log("Yey, your server is running on port 3001")
});