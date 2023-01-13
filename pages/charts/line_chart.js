import React, { useState, useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import Axios from 'axios';

const DynamicChart = () => {
    const [chartData, setChartData] = useState({});
    const [employeeSalary, setEmployeeSalary] = useState([]);
    const [employeeAge, setEmployeeAge] = useState([]);

const Chart = () => {
    let reportRating = [];
    let confidence = [];
    let reliability = [];


    Axios.get("http://localhost:3001/incidents_kepler")
        .then( res => {
            console.log(res);
            for(const dataObj of res.data.rows){
                // console.log(dataObj);
                reportRating.push(parseInt(dataObj[4]));
                confidence.push(parseInt(dataObj[5]));
                reliability.push(parseInt(dataObj[6]));
            }
            setChartData({
                labels: reportRating,
                datasets: [{
                    label: 'level of thicceness',
                    data: reliability,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
        })
        .catch(err => {
            console.log(err);
        })

    
    });
}
    useEffect(() => {
        Chart();
    }, []);
return(
    <div className="App">
        <h1>Bar Chart</h1>
        <div>
            <Line data = {chartData}
                 options = {{
                    responsive:true,
                    title: { text: "THICCNESS SCALE", display: true },
                    scales: {
                        yAxes:[{
                            ticks:{
                                beginAtZero: true
                            }
                        }]
                    }
                 }}
            />
        </div>
    </div>
)
}

export default DynamicChart;