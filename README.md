# EzyMetrics Dashboard

## Overview

EzyMetrics Dashboard is a React-based web application that provides a comprehensive interface for managing and visualizing business metrics. It includes features such as a customizable dashboard, lead management, analytics visualization, and report generation.

## Features

- **Customizable Dashboard**: Drag-and-drop widgets for key metrics and charts.
- **Lead Management**: View, search, and manage leads with detailed information.
- **Analytics**: Visualize data with interactive charts.
- **Reporting**: Generate and export reports in various formats.

## Project Structure


## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Setup

1. Clone the repository: https://github.com/vikalpis/EzyMetrics.git 
2. Install dependencies:npm install @radix-ui/react-dialog @radix-ui/react-select lucide-react class-variance-authority tailwindcss chart.js

## Running the Application
npm i
cd (folder)
npm run dev

## Technologies Used

- React.js
- Chart.js for data visualization
- react-beautiful-dnd for drag-and-drop functionality
- shadcn/ui components for UI elements

## Key Components

1. **Dashboard**: Displays customizable widgets with various metrics and charts.
2. **Leads**: Manages and displays lead information with search and filtering capabilities.
3. **Analytics**: Visualizes data using Chart.js.
4. **Reports**: Generates various types of reports.

## Customization

- To add new widgets to the dashboard, modify the `initialWidgets` array in `Dashboard.jsx`.
- To change the chart types or data, update the chart configurations in `Dashboard.jsx` and `Analytics.jsx`.
- To modify the lead management system, update the `Leads.jsx` component.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please email support@ezymetrics.com or open an issue in the GitHub repository.
