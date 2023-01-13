var data = [{"id":0,"country":"","n_thumbs_up":"","city":"","report_rating":0,
"confidence":0,"reliability":6,"type":"WEATHERHAZARD","uuid":"efec8b4e-595b-4f1e-b37c-91586a6433cc",
"road_type":"","magvar":0,"subtype":"","street":"","report_description":"Slow Down! Move Over!",
"longitude":-94.389373,"latitude":36.830898,"pub_mills":"2022-04-26 15:53:57.000000",
"request_millis":"2022-04-27 01:00:46.753136","county":"NEWTON","event_class":"","req_date":"2022-04-27 00:00:00.000000",
"start_time":"2022-04-27 01:00:46.753136","end_time":"2022-04-27 01:58:58.236794","duration":58.1913943},
{"id":1,"country":"","n_thumbs_up":"","city":"","report_rating":0,"confidence":0,"reliability":6,"type":"WEATHERHAZARD",
"uuid":"44065f3a-d016-4c86-9aca-ce052afef2f8","road_type":"","magvar":0,"subtype":"","street":"",
"report_description":"Slow Down! Move Over!","longitude":-93.874198,"latitude":37.079654,
"pub_mills":"2022-04-27 14:11:52.000000","request_millis":"2022-04-27 21:01:52.958881","county":"LAWRENCE",
"event_class":"","req_date":"2022-04-27 00:00:00.000000","start_time":"2022-04-27 21:01:52.958881",
"end_time":"2022-04-27 21:59:30.976052","duration":57.6336195166667}]


// console.log(rows)
var rows_data = []
for (const key in data) {
    rows_data.push([data[key].id, 
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
        data[key].duration]);

    };

var new_data = {
    fields: [
      {name: "id", format: "", type: "integer"},
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
      {name: "duration", format: "", type: "real"}
    ],
    rows: rows_data
    
};

console.log(new_data)

