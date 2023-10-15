import React, { useEffect, useRef } from 'react'
import FrequentSickness from './FrequentSickness';
import Chart from 'chart.js/auto'
function PatientData() {

  const chartRef = useRef(null);

  useEffect(()=> {
    if(chartRef.current){
      if(chartRef.current.chart){
        chartRef.current.chart.destroy();
      }
    }
  })

  const canvas = document.getElementById('frequentSickness')
  if(canvas){
    const chartInstance = Chart.getChart(canvas);
    if(chartInstance){
      chartInstance.destroy()
    }
  }

     // Fetch data from Node.js server
     fetch('http://localhost:5000/hbca/display')
     .then(response => response.json())

     //response from the backend
     //data - actual data
     .then(response => {

       const patientName = response.data.map(item => item.patient_name);
       const frequentSickness = response.data.map(item => item.frequent_sickness);
       const heartRate = response.data.map(item => item.heart_rate);
       const bodyTemperature = response.data.map(item => item.body_temperature);

       const ctx = document.getElementById('sicknessChart').getContext('2d');

       //  bar chart
       new Chart(ctx, {
         type: 'line',
         data: {
           labels: frequentSickness, 

           datasets: [
             {
               label: 'Heart Rate',
               backgroundColor: 'rgba(255, 99, 132, 0.2)',
               borderColor: 'rgba(255, 99, 132, 1)',
               borderWidth: 1,
               data: heartRate,
             },

             {
               label: 'Body Temperature',
               backgroundColor: 'rgba(75, 192, 192, 0.2)',
               borderColor: 'rgba(75, 192, 192, 1)',
               borderWidth: 1,
               data: bodyTemperature,
             },
           ],
         },
         options: {
           scales: {
             x: {
               stacked: true,
             },
             y: {
               stacked: true,
             },
           },
         },
       });
     });
  return (
    <div className='container'>
        <canvas id='sicknessChart' ref={chartRef} height={400} width={200}></canvas>
    </div>
  )
}

export default PatientData