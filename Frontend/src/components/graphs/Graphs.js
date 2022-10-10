import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { PieChart } from "./PieChart";
import { BarChart } from "./BarChart";
import { Button } from "@mui/material";

export default function Graphs({ setShowGraph, showGraph }) {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    direction: "column",
                    justifyContent: "space-around",
                    maxHeight: "100%",
                }}
            >
                {showGraph == true ? (
                    <Button onClick={() => setShowGraph(false)}>Close</Button>
                ) : (
                    <span />
                )}
                <Card
                    sx={{
                        maxWidth: "45%",
                        width: "45%",
                        height: "500px",
                        marginTop: "14vh",
                    }}
                >
                    <CardContent>
                        <PieChart
                            graphData={[9, 30, 40]}
                            graphTitle={"Current Day"}
                        />
                    </CardContent>
                    <CardActions></CardActions>
                </Card>
                <Card
                    sx={{
                        maxWidth: "45%",
                        width: "45%",
                        height: "500px",
                        marginTop: "14vh",
                    }}
                >
                    <CardContent>
                        <PieChart
                            graphData={[29, 30, 4]}
                            graphTitle={"Previous Day"}
                        />
                    </CardContent>
                    <CardActions></CardActions>
                </Card>
                <Card
                    sx={{
                        maxWidth: "45%",
                        width: "45%",
                        height: "500px",
                        marginTop: "14vh",
                    }}
                >
                    <CardContent>
                        <BarChart
                            graphData={[19, 3, 40]}
                            graphTitle={"Weekly Data"}
                        />
                    </CardContent>
                    <CardActions></CardActions>
                </Card>
            </div>
        </>
    );
}
