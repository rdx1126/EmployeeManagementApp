import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart({ graphData, graphTitle }) {
    const data = {
        labels: ["Break", "Meeting", "Work"],
        datasets: [
            {
                label: "# of Time",
                data: graphData,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <>
            <Pie data={data} />
            <p style={{ textAlign: "center" }}>
                <br />
                {`${graphTitle}`}
            </p>
        </>
    );
}
