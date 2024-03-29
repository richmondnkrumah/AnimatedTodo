import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS,CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,} from 'chart.js';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

const Dashboardchart = () => {
  return (
      <Line options={{
    responsive: true,
   scales:{
    x:{
      grid:{
        drawOnChartArea: false
      }
    }
   },
    plugins: {
      legend:{display:false},

      title: {
        display: false,
      },
    },
  }} data={{
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [{
      fill: true,
      data: [12, 19, 3, 5, 2, 3,6],
      borderColor: '#6D5792',
      backgroundColor: '#24192A',
      tension:0.5,
      
    }]

  }}
      />
    
  );
};

export default Dashboardchart;
