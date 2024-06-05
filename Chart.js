mport React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

function IncidentChart() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchChartData = async () => {
      const response = await axios.get('/api/incident/chart-data');
      setChartData({
        labels: response.data.labels,
        datasets: [{
          label: 'Incidents Over Time',
          data: response.data.data,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
        }],
      });
    };
    fetchChartData();
  }, []);

  return (
    <div>
      <h2>Incident Data Visualization</h2>
      <Line data={chartData} />
    </div>
  );
}

export default IncidentChart;

