import React from "react";
import keplerGlReducer from "kepler.gl/reducers";
import {handleActions} from 'redux-actions';
import {routerReducer} from 'react-router-redux';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { taskMiddleware } from "react-palm/tasks";
import { Provider, useDispatch } from "react-redux";
import KeplerGl from "kepler.gl";
import { addDataToMap } from "kepler.gl/actions";
import useSwr from "swr";

import { handleBreakpoints } from "@mui/system";
import { renderMatches } from "react-router-dom";
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

import {processGeojson} from 'kepler.gl/processors';

import config_file from "./kepler_page_predict_2.json"

const initialAppState ={
  appName: 'example',
  loaded: false
};

const customizedKeplerGlReducer = keplerGlReducer
  .initialState({
    uiState: {
      // hide side panel to disallow user customize the map
      readOnly: true,

      // customize which map control button to show
      mapControls: {
        visibleLayers: {
          show: false
        },
        mapLegend: {
          show: true,
          active: true
        },
        toggle3d: {
          show: true
        },
        splitMap: {
          show: false
        }
      }
    }
  });
const reducers = combineReducers({
  keplerGl: customizedKeplerGlReducer,
  app: handleActions({
  }, initialAppState),
  routing: routerReducer
});

const store = createStore(reducers, {}, applyMiddleware(taskMiddleware));

export default function App() {
  return (
    <Provider store={store}>
      <Map />
    </Provider>
  );
}
function Map() {

  const dispatch = useDispatch();
  const { data } = useSwr("cvdata", async () => {
    const response = await fetch(
      "http://localhost:3001/cvdata_line_2"
    );
    const data = await response.json();
    
    return data;
  });

  React.useEffect(() => {
    if (data) {
      dispatch(
        addDataToMap({
          datasets: {
            info: {
              label: "cvdata",
              id: "cvdata"
            },
            data
            
          },
          option: {
            centerMap: true,
            readOnly: false
          }
          ,config: config_file
          
        })
      );
    }
  }, [dispatch, data]);

  return ( 
    <KeplerGl
      id="cvdata"
      mapboxApiAccessToken={"pk.eyJ1IjoibWFnZWRzaG9tYW4iLCJhIjoiY2t6aW1rbmJ2NGNjMzJubmtnYTN2bWY1aSJ9.htxCLU8MTRBCgHvv_00tLw"}
      width={window.innerWidth - 15} 
      height={window.innerHeight - 65}
      // mapStyles = {mapStyles}
      // mapStylesReplaceDefault={true}
    />
  );
}

