import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'
import PatientData from './PatientData';
function FrequentSickness() {

    fetch('http://localhost:5000/hbca/freq_disease')
    .then(response => response.json())
    .then(resp => {
      const patientName = resp.data.map(item => item.patient_name);
      const heartRate = resp.data.map(item => item.heart_rate);
      const frequentSickness = resp.data.map(item => item.frequent_sickness);
      const bodyTemperature = resp.data.map(item => item.body_temperature);

      // const header = document.getElementById('title');
      // header.textContent = frequentSickness;
    

      const ctx2 = document.getElementById('frequentSickness').getContext('2d');

      const existingChart = Chart.getChart('frequentSickness');
      
      if (existingChart) {
        existingChart.destroy();
      }
      
      new Chart(ctx2, {
      type: 'line',
      data: {
        labels: patientName, 
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
              stacked: true
            },
          },

        },
      });
    });
    

  return (
    
    <div className='container'>
      
        <canvas id='frequentSickness'  height={0} width={0}></canvas>
        
    </div>
  )
}

export default FrequentSickness