# Traffic-Prediction-Platform-Application-
The Application is fueled with Connected Vehicles (CV) data and serves as a platform for transportation planners (DOTs) to understand the data through visual analysis, predict the future of traffic flow and speech query the data of interest.
For the development of the Web-App and User Interface(UI) coding, I used the following languages: HTML; CSS; JavaScript; Python; SQL. In the main folder named “Web-App Structure” which contains two main folders “Front End” and “Back End”. The user-side of a web application is also known as the frontend. Inside the browser, the frontend is the interface that the user can access and interact with. The client-primary side’s goal is to collect data from users in an engaging manner. JavaScript code is used to script the frontend components built in React.js. React.js is an open-source JavaScript package that is used to create single-page apps’ user interfaces. For web and mobile apps, it’s utilized to manage the view layer. We can also make reusable UI components with React.

[[Watch the video]](https://www.youtube.com/watch?v=uGxRNU_t8_w)
<img width="1680" alt="Screen Shot 2023-01-12 at 6 25 43 PM" src="https://user-images.githubusercontent.com/73359826/212223555-43e98773-fcaa-4799-b9e7-c6127f128921.png">
Starting at the first page, web-app visitors are first welcomed with the home page as presented in the following figure. The Navigation bar is then presented along all parent and children pages or routes. 
<img width="1680" alt="Screen Shot 2023-01-12 at 6 33 15 PM" src="https://user-images.githubusercontent.com/73359826/212223896-2fd1c69d-b1b7-4f6d-88a4-bc130385b3a5.png">

To manage the state and data flow of the CV dataset, I used Kepler.gl. Kepler, a React component, is a web-based application for visual exploration of large-scale geolocation data sets that is data agnostic and high-performance. This web app uses Mapbox GL and deck.gl to render millions of points representing thousands of trips and conduct spatial aggregations on the fly. Layers are used as building blocks in kepler.gl to generate interactive maps, with customizable layer generation and data (e.g., fares, ETA, and timestamps) encoded to visual channels (e.g., circle size, arc color, and circle color) with scaling functions (e.g., linear, quantile, and quantize). 


![Picture47](https://user-images.githubusercontent.com/73359826/212224990-a1cd140b-baaf-4387-8dec-8467e98e34c8.png)
A point layer, for example, can be used to plot event and place locations; an arc layer can be used to visualize origin-destination correlations; a hexbin or grid layer can be used to aggregate a collection of points to show its distribution; and a polygon layer can be used to visualize a choropleth map showing aggregate statistics
of geographic regions. Beyond the usual 2D x and y cartographic plane, I used the Geographic JavaScript Object Notation (GeoJSON) format discussed earlier to add Line-string geometry along with a timestamp for each point; a third dimension to encode data in an isometric perspective view that displays the movement of vehicle from one point to another. A user can more rapidly spot abnormalities in an aggregate map when actual movement of vehicle is displayed.
In addition to standard metric-based filtering, we add Brushing properties (Figure 5.9) to allow users to highlight arcs and points that originate within a particular radius of where the mouse is now located (hovered) over the map. This feature is particularly useful for visualizing origin-destination correlations in order to better understand how different locations are connected. We developed the current web-app from a single page app to a robust geo-analytics and visualization platform. It creates an all-in-one geographic data exploration and visualization environment, and can be used to fuel advanced geospatial analytics. The speed, deep insights and geo-analytical capabilities of the toolbox allows us to achieve powerful and quick data analysis for CV historical data and predictions and perform road predictions as displayed in Figure 5.10.















<img width="1680" alt="Screen Shot 2023-01-12 at 6 34 05 PM" src="https://user-images.githubusercontent.com/73359826/212223907-6c3915b3-2d05-4fec-b483-e927b2cb76d5.png">
