import React from 'react';
import ChartContainer from './ChartContainer';
import { salesData } from '../data/salesData';
import './SalesChart.css';

const SalesChart = () => {
    return (
        <div className="sales-chart">
            <h2 className="sales-chart-title">Аналитика продаж</h2>
            <ChartContainer data={salesData} />
        </div>
    );
};

export default SalesChart;