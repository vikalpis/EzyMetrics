import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Chart from 'chart.js/auto';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Leads',
      data: [400, 300, 200, 278, 189],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
    {
      label: 'Conversions',
      data: [240, 139, 980, 390, 480],
      backgroundColor: 'rgba(153, 102, 255, 0.6)',
    }
  ]
};

function Analytics() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      // Destroy existing chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Create new chart instance
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Analytics</h1>
      <Card>
        <CardHeader>
          <CardTitle>Lead Generation vs Conversions</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ height: '400px' }}>
            <canvas ref={chartRef}></canvas>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Analytics;