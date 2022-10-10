import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },
};

const labels = ["Not Working", "Working", "Meeting"];

export function BarChart({ graphData, graphTitle }) {
    const data = {
        labels,
        datasets: [
            {
                label: "Weekly data",
                data: graphData,
                backgroundColor: "rgb(255, 99, 132)",
            },
        ],
    };
    return (
        <>
            <Bar options={options} data={data} width={10} height={10} />
            <p style={{ textAlign: "center" }}>
                <br />
                {`${graphTitle}`}
            </p>
        </>
    );
}
