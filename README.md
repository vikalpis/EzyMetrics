# EzyMetrics Dashboard

## Overview

EzyMetrics Dashboard is a React-based web application that provides a comprehensive interface for managing and visualizing business metrics. It includes features such as a customizable dashboard, lead management, analytics visualization, and report generation.

## Features

- **Customizable Dashboard**: Drag-and-drop widgets for key metrics and charts.
- **Lead Management**: View, search, and manage leads with detailed information.
- **Analytics**: Visualize data with interactive charts.
- **Reporting**: Generate and export reports in various formats.

## Project Structure
src/
├── components/
│   ├── Dashboard.jsx
│   ├── Sidebar.jsx
│   ├── Leads.jsx
│   ├── Analytics.jsx
│   ├── Reports.jsx
│   └── ui/
│       ├── card.jsx
│       ├── button.jsx
│       ├── dialog.jsx
│       ├── select.jsx
│       ├── table.jsx
│       └── input.jsx
├── App.jsx
└── index.js

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Setup

1. Clone the repository:
## Running the Application

To start the development server: 'npm run dev'
This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Building for Production

To create a production build: 'npm run build'
This will build the app for production to the `build` folder.

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


