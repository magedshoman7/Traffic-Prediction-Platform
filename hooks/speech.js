import {useEffect, useState, useCallback} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const COMMANDS = {
    HISTORY: 'history',
    PREDICT: 'predict',
    WHATIF: 'whatif',
    HOMEPAGE: 'homepage',

    fused_Layers: 'fused_Layers',
    CV_Journey: 'CV_Journey',
    CV_Trip: 'CV_Trip',
    CV_Trip_comp: 'CV_Trip_comp',
    CV_Road: 'CV_Road',
    Weather_point: 'Weather_point',
    events_point: 'events_point',
    Events_heatmap: 'Events_heatmap',

    SHAW_BLVD: 'shaw_blvd',
    LINDELL_BLVD: 'lindell_blvd',
    BOTTLENECKS: 'bottlenecks'
}

export default function useSpeech() {
    const [alanInstance, setAlanInstance] = useState()
    
    const openHistoryPage = useCallback(() => {
        alanInstance.playText("Opening historical analysis page");
        window.open('/history', '_self')
    }, [alanInstance])
    const openPredictPage = useCallback(() => {
        alanInstance.playText("Opening predictions page");
        window.open('/predict', '_self')
    }, [alanInstance])
    const openWhatifPage = useCallback(() =>{
        alanInstance.playText("Opening what-if scenarios page")
        window.open('/whatif', '_self')
    }, [alanInstance])
    const openHomePage = useCallback(() =>{
        alanInstance.playText("navigating to home page")
        window.open('/', '_self')
    }, [alanInstance])
    const openfused_LayersPage = useCallback(() => {
        alanInstance.playText("Opening historical analysis page");
        window.open('/history/fused', '_self')
    }, [alanInstance])
    const openCV_JourneyPage = useCallback(() => {
        alanInstance.playText("Opening predictions page");
        window.open('/history/cvjourney', '_self')
    }, [alanInstance])
    const openCV_TripPage = useCallback(() =>{
        alanInstance.playText("Opening what-if scenarios page")
        window.open('/history/cvtrip', '_self')
    }, [alanInstance])
    const openCV_Trip_compPage = useCallback(() =>{
        alanInstance.playText("navigating to home page")
        window.open('/history/cv_trip_comp', '_self')
    }, [alanInstance])
    const openCV_RoadPage = useCallback(() => {
        alanInstance.playText("Opening historical analysis page");
        window.open('/history/cvpoints', '_self')
    }, [alanInstance])
    const openWeather_pointPage = useCallback(() => {
        alanInstance.playText("Opening predictions page");
        window.open('/history/weather', '_self')
    }, [alanInstance])
    const openevents_pointPage = useCallback(() =>{
        alanInstance.playText("Opening what-if scenarios page")
        window.open('/history/incidents', '_self')
    }, [alanInstance])
    const openEvents_heatmapPage = useCallback(() =>{
        alanInstance.playText("navigating to home page")
        window.open('/history/incidents_hex', '_self')
    }, [alanInstance])

    const openEvents_shaw= useCallback(() =>{
        alanInstance.playText("navigating to home page")
        window.open('/predict/request_shaw_blvd', '_self')
    }, [alanInstance])
    const openEvents_lindell = useCallback(() =>{
        alanInstance.playText("navigating to home page")
        window.open('/history/request_lindell_blvd', '_self')
    }, [alanInstance])
    const openEvents_bottlenecks = useCallback(() =>{
        alanInstance.playText("navigating to home page")
        window.open('/predict/bottlnecks', '_self')
    }, [alanInstance])

    useEffect(() =>{
        window.addEventListener(COMMANDS.HISTORY, openHistoryPage)
        window.addEventListener(COMMANDS.PREDICT, openPredictPage)
        window.addEventListener(COMMANDS.WHATIF, openWhatifPage)
        window.addEventListener(COMMANDS.HOMEPAGE, openHomePage)
        window.addEventListener(COMMANDS.fused_Layers, openfused_LayersPage)
        window.addEventListener(COMMANDS.CV_Journey, openCV_JourneyPage)
        window.addEventListener(COMMANDS.CV_Trip, openCV_TripPage)
        window.addEventListener(COMMANDS.CV_Trip_comp, openCV_Trip_compPage)
        window.addEventListener(COMMANDS.CV_Road, openCV_RoadPage)
        window.addEventListener(COMMANDS.Weather_point, openWeather_pointPage)
        window.addEventListener(COMMANDS.events_point, openevents_pointPage)
        window.addEventListener(COMMANDS.Events_heatmap, openEvents_heatmapPage)

        window.addEventListener(COMMANDS.SHAW_BLVD, openEvents_shaw)
        window.addEventListener(COMMANDS.LINDELL_BLVD, openEvents_lindell)
        window.addEventListener(COMMANDS.BOTTLENECKS, openEvents_bottlenecks)

        return () => {
           window.removeEventListener(COMMANDS.HISTORY, openHistoryPage)
           window.removeEventListener(COMMANDS.PREDICT, openPredictPage)
           window.removeEventListener(COMMANDS.WHATIF, openWhatifPage)
           window.removeEventListener(COMMANDS.HOMEPAGE, openHomePage)
           window.removeEventListener(COMMANDS.fused_Layers, openfused_LayersPage)
           window.removeEventListener(COMMANDS.CV_Journey, openCV_JourneyPage)
           window.removeEventListener(COMMANDS.CV_Trip, openCV_TripPage)
           window.removeEventListener(COMMANDS.CV_Trip_comp, openCV_Trip_compPage)
           window.removeEventListener(COMMANDS.CV_Road, openCV_RoadPage)
           window.removeEventListener(COMMANDS.Weather_point, openWeather_pointPage)
           window.removeEventListener(COMMANDS.events_point, openevents_pointPage)
           window.removeEventListener(COMMANDS.Events_heatmap, openEvents_heatmapPage)

           window.removeEventListener(COMMANDS.SHAW_BLVD, openEvents_shaw)
           window.removeEventListener(COMMANDS.LINDELL_BLVD, openEvents_lindell)
           window.removeEventListener(COMMANDS.BOTTLENECKS, openEvents_bottlenecks)
        }
    }, [openHistoryPage, openPredictPage, openWhatifPage, openHomePage,
        openfused_LayersPage,openCV_JourneyPage,openCV_TripPage,openCV_Trip_compPage,
        openCV_RoadPage,openWeather_pointPage,openevents_pointPage,openEvents_heatmapPage,
        openEvents_shaw, openEvents_lindell, openEvents_bottlenecks])

    useEffect(() => {
        if (alanInstance !=null) return

        setAlanInstance(
            alanBtn({
                bottom:'75px',
                right: '900px',
                key: 'bf730cc103bf515b809b2bed88cc88912e956eca572e1d8b807a3e2338fdd0dc/stage',
                onCommand:({ command }) => {
                    window.dispatchEvent(new CustomEvent(command))
                    
                }
            })
        )
    }, [])
    return null
}

