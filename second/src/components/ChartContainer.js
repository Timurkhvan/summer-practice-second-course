import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { chartConfig } from '../config/chartConfig';
import './ChartContainer.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const ChartContainer = ({ data }) => {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: data.dataset.label,
                data: data.dataset.values,
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                borderRadius: 4,
                hoverBackgroundColor: 'rgba(54, 162, 235, 0.9)'
            }
        ]
    };

    return (
        <div className="chart-container">
            <Bar data={chartData} options={chartConfig.options} />
        </div>
    );
};

export default ChartContainer;