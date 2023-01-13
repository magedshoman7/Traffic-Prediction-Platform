import React, {useState} from 'react';
import ReactMapGl, {Marker} from 'react-map-gl';

const token = 'pk.eyJ1IjoibWFnZWRzaG9tYW4iLCJhIjoiY2t6aW1rbmJ2NGNjMzJubmtnYTN2bWY1aSJ9.htxCLU8MTRBCgHvv_00tLw';
export default function App(){
    const [viewport, setViewport] = useState({
        latitude: 45.4211,
        longitude: -75.6903,
        width: '100vw',
        height: '100vh',
        zoom: 10
    })

    return (
    <div>
        <ReactMapGl 
            {...viewport} 
            mapboxApiAccessToken={token}
            // mapStyle="mapbox://styles/leighhalliday/cjufmjn1r2kic1fl9wxg7u1l4"
            onViewportChange={(viewport) => {
                setViewport(viewport);
            }}
        >
        </ReactMapGl>
        
    </div>
    );
}