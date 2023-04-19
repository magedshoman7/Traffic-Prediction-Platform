# Traffic Prediction Platform Application

This Application runs on data from Connected Vehicles (CV) and is designed to provide transportation planners (DOTs) with a platform for visual analysis of the data, predicting traffic flow patterns, and conducting targeted data queries through speech. To develop the Web-App and User Interface (UI), I utilized ReactJS and SQLite for coding.

[[Watch the video]](https://www.youtube.com/watch?v=uGxRNU_t8_w)
<img width="1680" alt="Screen Shot 2023-01-12 at 6 25 43 PM" src="https://user-images.githubusercontent.com/73359826/212223555-43e98773-fcaa-4799-b9e7-c6127f128921.png">

Web-app visitors are initially directed to the home page upon entering the website. From there, they can access all other pages or routes, including both parent and children pages, via the Navigation bar. This can be observed in the following figure.


<img width="1680" alt="Screen Shot 2023-01-12 at 6 33 15 PM" src="https://user-images.githubusercontent.com/73359826/212223896-2fd1c69d-b1b7-4f6d-88a4-bc130385b3a5.png">


I utilized Kepler.gl to handle the state and data flow of the Connected Vehicles (CV) dataset. Kepler.gl is a React component that offers a web-based platform to visually explore large geolocation datasets with high performance and data agnosticism. This web application implements Mapbox GL and deck.gl to present millions of points that represent thousands of trips and perform spatial aggregations dynamically. In kepler.gl, layers serve as the basic elements to create interactive maps, which allow customization of layer generation and encoding of data (e.g., fares, ETA, and timestamps) into visual channels (e.g., circle size, arc color, and circle color) with scaling functions (e.g., linear, quantile, and quantize).

![Picture47](https://user-images.githubusercontent.com/73359826/212224990-a1cd140b-baaf-4387-8dec-8467e98e34c8.png)
A point layer, for example, can be used to plot event and place locations; an arc layer can be used to visualize origin-destination correlations; a hexbin or grid layer can be used to aggregate a collection of points to show its distribution; and a polygon layer can be used to visualize a choropleth map showing aggregate statistics
of geographic regions. Beyond the usual 2D x and y cartographic plane, I used the Geographic JavaScript Object Notation (GeoJSON) format discussed earlier to add Line-string geometry along with a timestamp for each point; a third dimension to encode data in an isometric perspective view that displays the movement of vehicle from one point to another. A user can more rapidly spot abnormalities in an aggregate map when actual movement of vehicle is displayed.
In addition to standard metric-based filtering, we add Brushing properties (Figure 5.9) to allow users to highlight arcs and points that originate within a particular radius of where the mouse is now located (hovered) over the map. This feature is particularly useful for visualizing origin-destination correlations in order to better understand how different locations are connected. The developed platform creates an all-in-one geographic data exploration and visualization environment, and can be used to fuel advanced geospatial analytics. The speed, deep insights and geo-analytical capabilities of the toolbox allows us powerful and quick data analysis for CV historical data and predictions and perform road predictions as displayed in the figure below.


<img width="1680" alt="Screen Shot 2023-01-12 at 6 34 05 PM" src="https://user-images.githubusercontent.com/73359826/212223907-6c3915b3-2d05-4fec-b483-e927b2cb76d5.png">
