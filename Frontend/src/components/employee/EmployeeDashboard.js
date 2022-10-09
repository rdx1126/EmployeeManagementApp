import React from "react";
import { useState } from "react";
import NavBar from "../NavBar";
import AddTask from "./AddTask";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";


export default function EmployeeDashboard() {
    const [isAddOpen, setAddOpen] = useState(false);

    return (
        <>
            <NavBar
                role={"employee"}
                title={"Employee Dashboard"}
                appButtonName={"Add Task"}
                setAddOpen={setAddOpen}
            />
            {isAddOpen ? <AddTask /> : <span />}
            <div
                style={{
                    display: "flex",
                    direction: "column",
                    justifyContent: "space-around",
                    maxHeight: "100%",
                }}
            >
                <Card
                    sx={{
                        maxWidth: "45%",
                        width: "45%",
                        height: "600px",
                        marginTop: "15.5vh",
                    }}
                >
                    <CardContent>
                    </CardContent>
                    <CardActions></CardActions>
                </Card>
                <Card
                    sx={{
                        maxWidth: "45%",
                        width: "45%",
                        height: "600px",
                        marginTop: "15.5vh",
                    }}
                >
                    <CardContent></CardContent>
                    <CardActions></CardActions>
                </Card>
            </div>
        </>
    );
}
