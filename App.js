import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import alanBtn from '@alan-ai/alan-sdk-web';
import useSpeech from './hooks/speech';
import Header from './Header';
import Card_home from './cards/Card_home'
import Page_history from './pages/for_page_history/Page_history'
import Page_predict from './pages/Page_predict'
import Page_whatif from './pages/Page_whatif'

import Fused from "./pages/for_page_history/within_pages_history/Fused_layers/fused_dash";
import CVJourney from "./pages/for_page_history/within_pages_history/CV_journey/cvjourney_dash";
import CVTrips from "./pages/for_page_history/within_pages_history/CV_trips/cvtrips_dash";
import CVPoints from "./pages/for_page_history/within_pages_history/CV_points/cvpoints_dash";
import Weather from "./pages/for_page_history/within_pages_history/Weather/Weather";
import Cv_trip_arc from "./pages/for_page_history/within_pages_history/Cv_trip_arc/cvtrips_dash";
import Incidents from "./pages/for_page_history/within_pages_history/Incidents/Incidents";
import IncidentsHex from "./pages/for_page_history/within_pages_history/Incidents_hexagon/Incidents";


import Page_predict_shaw from './pages/Page_predict_1'
import Page_predict_bottlenecks from './pages/Page_predict_3'
import Page_history_lindell from './pages/Page_predict_2'

const App = () => {

    useSpeech()

    return (

        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Card_home />} />
                
                <Route path="/predict" element={<Page_predict />} />
                <Route path="/predict/request_shaw_blvd" element={<Page_predict_shaw />} />
                <Route path="/predict/bottlnecks" element={<Page_predict_bottlenecks/>} />
                <Route path="/whatif" element={<Page_whatif />} />
                <Route path="/history" element={<Page_history />} />
                <Route path="/history/request_lindell_blvd" element={<Page_history_lindell/>} />

                <Route path= "/history/fused" element= {<Fused/>} />
                <Route path= "/history/cvjourney" element= {<CVJourney/>} />
                <Route path= "/history/cv_trip_comp" element= {<CVTrips/>} />
                <Route path= "/history/cvpoints" element= {<CVPoints/>} />
                <Route path= "/history/weather" element= {<Weather/>} />
                <Route path= "/history/cvtrip" element= {<Cv_trip_arc/>} />
                <Route path= "/history/incidents" element= {<Incidents/>} />
                <Route path= "/history/incidents_hex" element= {<IncidentsHex/>} />
            </Routes>
        </Router>
    );
}

export default App;
