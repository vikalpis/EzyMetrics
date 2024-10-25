import React, { useState } from 'react';
import {Card, CardHeader,CardTitle,CardContent} from "../ui/card"
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import Chart from 'chart.js/auto';

function Reports() {
  const [selectedReport, setSelectedReport] = useState('leads');

  const generateReport = (format) => {
    // In a real application, this would generate and download the report
    console.log(`Generating ${format} report for ${selectedReport}...`);
  };

  const renderReportContent = () => {
    switch (selectedReport) {
      case 'leads':
        return <LeadsReport />;
      case 'conversions':
        return <ConversionsReport />;
      case 'revenue':
        return <RevenueReport />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Reports</h1>
      <div className="space-y-4 mb-6">
        <Select onValueChange={setSelectedReport} defaultValue={selectedReport}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select report type" />
          </SelectTrigger>
          <SelectContent >
            <SelectItem value="leads">Leads Report</SelectItem>
            <SelectItem value="conversions">Conversions Report</SelectItem>
            <SelectItem value="revenue">Revenue Report</SelectItem>
          </SelectContent>
        </Select>
        <div className="space-x-4">
          <Button onClick={() => generateReport('PDF')}>Generate PDF</Button>
          <Button onClick={() => generateReport('CSV')}>Generate CSV</Button>
        </div>
      </div>
      {renderReportContent()}
    </div>
  );
}

function LeadsReport() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Leads Report</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Source</TableHead>
              <TableHead>Count</TableHead>
              <TableHead>Conversion Rate</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Organic Search</TableCell>
              <TableCell>1,234</TableCell>
              <TableCell>15%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Paid Ads</TableCell>
              <TableCell>987</TableCell>
              <TableCell>22%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Social Media</TableCell>
              <TableCell>654</TableCell>
              <TableCell>18%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function ConversionsReport() {
  const chartRef = React.useRef(null);

  React.useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Conversion Rate',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        }
      });
    }
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Conversions Report</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ height: '300px' }}>
          <canvas ref={chartRef}></canvas>
        </div>
      </CardContent>
    </Card>
  );
}

function RevenueReport() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Report</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Month</TableHead>
              <TableHead>Revenue</TableHead>
              <TableHead>Growth</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>January</TableCell>
              <TableCell>$50,000</TableCell>
              <TableCell>-</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>February</TableCell>
              <TableCell>$65,000</TableCell>
              <TableCell>+30%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>March</TableCell>
              <TableCell>$82,000</TableCell>
              <TableCell>+26%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default Reports;