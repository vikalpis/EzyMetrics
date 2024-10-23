import React, { useState, useRef, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Chart from 'chart.js/auto';


const initialWidgets = [
  { id: 'widget1', title: 'Total Leads', content: '1,234', type: 'number' },
  { id: 'widget2', title: 'Conversion Rate', content: '15%', type: 'number' },
  { id: 'widget3', title: 'Revenue', content: '$50,000', type: 'number' },
  { id: 'widget4', title: 'Performance Chart', type: 'lineChart' },
  { id: 'widget5', title: 'Lead Sources', type: 'pieChart' },
  { id: 'widget6', title: 'Monthly Conversions', type: 'barChart' },
];

const lineChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [{
    label: 'Performance',
    data: [400, 300, 600, 800, 500],
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

const pieChartData = {
  labels: ['Organic', 'Paid', 'Referral', 'Social'],
  datasets: [{
    data: [400, 300, 300, 200],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
  }]
};

const barChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [{
    label: 'Monthly Conversions',
    data: [30, 45, 60, 40, 55],
    backgroundColor: 'rgba(75, 192, 192, 0.6)'
  }]
};

function Dashboard() {
    const [widgets, setWidgets] = useState(initialWidgets);
    const chartInstances = useRef({});
  
    useEffect(() => {
      return () => {
        // Cleanup function to destroy all chart instances when component unmounts
        Object.values(chartInstances.current).forEach(chart => chart.destroy());
      };
    }, []);
  
    useEffect(() => {
      widgets.forEach(widget => {
        if (widget.type !== 'number') {
          const canvas = document.getElementById(widget.id);
          if (canvas) {
            // Destroy existing chart instance if it exists
            if (chartInstances.current[widget.id]) {
              chartInstances.current[widget.id].destroy();
            }
  
            const ctx = canvas.getContext('2d');
            let chartData, chartOptions, chartType;
  
            switch (widget.type) {
              case 'lineChart':
                chartData = lineChartData;
                chartType = 'line';
                break;
              case 'pieChart':
                chartData = pieChartData;
                chartType = 'pie';
                break;
              case 'barChart':
                chartData = barChartData;
                chartType = 'bar';
                break;
              default:
                return;
            }
  
            chartOptions = { responsive: true, maintainAspectRatio: false };
  
            // Create new chart instance and store it
            chartInstances.current[widget.id] = new Chart(ctx, {
              type: chartType,
              data: chartData,
              options: chartOptions
            });
          }
        }
      });
    }, [widgets]);
  
    const onDragEnd = (result) => {
      if (!result.destination) return;
      const items = Array.from(widgets);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      setWidgets(items);
    };
  
    const renderWidgetContent = (widget) => {
      switch (widget.type) {
        case 'number':
          return <p className="text-2xl font-bold">{widget.content}</p>;
        case 'lineChart':
        case 'pieChart':
        case 'barChart':
          return <canvas id={widget.id} height="200"></canvas>;
        default:
          return null;
      }
    };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="widgets">
          {(provided) => (
            <div 
              {...provided.droppableProps} 
              ref={provided.innerRef} 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {widgets.map((widget, index) => (
                <Draggable key={widget.id} draggableId={widget.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="h-full"
                    >
                      <Card className="h-full">
                        <CardHeader>
                          <CardTitle>{widget.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          {renderWidgetContent(widget)}
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Dashboard;