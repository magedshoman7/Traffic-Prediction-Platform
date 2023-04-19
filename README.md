# Traffic Prediction Platform Application

This Application runs on data from Connected Vehicles (CV) and is designed to provide transportation planners (DOTs) with a platform for visual analysis of the data, predicting traffic flow patterns, and conducting targeted data queries through speech. To develop the Web-App and User Interface (UI), I utilized ReactJS and SQLite for coding.

[[Watch the video]](https://www.youtube.com/watch?v=uGxRNU_t8_w)
<img width="1680" alt="Screen Shot 2023-01-12 at 6 25 43 PM" src="https://user-images.githubusercontent.com/73359826/212223555-43e98773-fcaa-4799-b9e7-c6127f128921.png">

Web-app visitors are initially directed to the home page upon entering the website. From there, they can access all other pages or routes, including both parent and children pages, via the Navigation bar. This can be observed in the following figure.


<img width="1680" alt="Screen Shot 2023-01-12 at 6 33 15 PM" src="https://user-images.githubusercontent.com/73359826/212223896-2fd1c69d-b1b7-4f6d-88a4-bc130385b3a5.png">


I utilized Kepler.gl to handle the state and data flow of the Connected Vehicles (CV) dataset. Kepler.gl is a React component that offers a web-based platform to visually explore large geolocation datasets with high performance and data agnosticism. This web application implements Mapbox GL and deck.gl to present millions of points that represent thousands of trips and perform spatial aggregations dynamically. In kepler.gl, layers serve as the basic elements to create interactive maps, which allow customization of layer generation and encoding of data (e.g., fares, ETA, and timestamps) into visual channels (e.g., circle size, arc color, and circle color) with scaling functions (e.g., linear, quantile, and quantize).

![Picture47](https://user-images.githubusercontent.com/73359826/212224990-a1cd140b-baaf-4387-8dec-8467e98e34c8.png)

One way to use different layer types in mapping is to utilize a point layer for plotting event and location information, an arc layer to show connections between origins and destinations, a hexbin or grid layer to represent the distribution of a group of points, and a polygon layer for displaying statistics of regions in a choropleth map. In addition, Line-string geometry with timestamps can be added to a map using the Geographic JavaScript Object Notation (GeoJSON) format to create an isometric view that displays the movement of vehicles between points, allowing for easier detection of anomalies in the data. This third dimension provides a unique perspective for visualizing data beyond the traditional 2D x and y plane.

Along with standard metric-based filtering, we've added Brushing properties (shown in the figure below) to enable users to highlight points and arcs originating from within a specified radius of the current location of the mouse cursor on the map. This functionality is particularly useful for visualizing connections between origins and destinations and gaining a better understanding of how different locations are linked. The developed platform offers a comprehensive environment for exploring and visualizing geographic data, and it can support advanced geospatial analytics. With its speed, advanced insights, and geo-analytical capabilities, this toolbox enables us to perform powerful and rapid data analysis on both historical and predictive CV data, and generate road predictions, as illustrated in the figure below.

<img width="1680" alt="Screen Shot 2023-01-12 at 6 34 05 PM" src="https://user-images.githubusercontent.com/73359826/212223907-6c3915b3-2d05-4fec-b483-e927b2cb76d5.png">
