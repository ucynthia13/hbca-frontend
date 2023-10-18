import React, { useEffect, useRef } from 'react'
import FrequentSickness from './FrequentSickness';
import Chart from 'chart.js/auto'
function PatientData() {


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

      //  const ctx = document.getElementById('sicknessChart').getContext('2d');

      const existingChart = Chart.getChart('sicknessChart');
      if (existingChart) {
        existingChart.destroy();
      }

       new Chart('sicknessChart', {
         type: 'line',
         data: {
           labels: frequentSickness, 

           datasets: [
             {
               label: 'Heart Rate',
               backgroundColor: 'rgba(255, 99, 132, 0.2)',
               borderColor: 'rgba(255, 99, 132, 1)',
               borderWidth: 0.5,
               data: heartRate,
             },

             {
               label: 'Body Temperature',
               backgroundColor: 'rgba(75, 192, 192, 0.2)',
               borderColor: 'rgba(75, 192, 192, 1)',
               borderWidth: 0.5,
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
    <div className='container w-20 mt-5'>
      <p className='text-center fw-bold h2 mb-3'>Patient Data</p>
        <canvas id='sicknessChart'></canvas>
    </div>
  )
}

export default PatientData