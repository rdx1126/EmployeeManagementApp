import { margin } from "@mui/system";
import { useEffect, useState } from "react";
import NavBar from "../NavBar";
import AddEmployee from "./AddEmployee";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Graphs from "../graphs/Graphs";

export default function AdminDashboard() {
    const [deactivated, setDeactivated] = useState(false);
    const [showGraph, setShowGraph] = useState(false);

    const handleButtonClick = (params) => {
        console.log(params);
    };
    const handleGraphButtonClick = (params) => {
        console.log(params);
        setShowGraph(true);
    };
    const columns = [
        { field: "id", headerName: "ID", width: 90, flex: 1 },
        {
            field: "EmployeeName",
            headerName: "EmployeeName",
            width: 150,
            editable: false,
            flex: 1,
        },

        {
            field: "Department",
            headerName: "Department",
            width: 150,
            editable: true,
            flex: 1,
        },

        {
            field: "Graph",
            headerName: "Employee Details",
            width: 90,
            flex: 1,
            renderCell: (params) => {
                return (
                    <Button
                        variant="contained"
                        onClick={() => {
                            handleGraphButtonClick(params.row);
                        }}
                    >
                        View
                    </Button>
                );
            },
        },

        {
            field: "Deactivate",
            headerName: "Deactivate",
            width: 90,
            flex: 1,
            renderCell: (params) => {
                return (
                    <Button
                        variant="contained"
                        color={deactivated ? "error" : "success"}
                        onClick={() => {
                            handleButtonClick(params.row);
                        }}
                    >
                        {deactivated ? "Activate" : "Deactivate"}
                    </Button>
                );
            },
        },
    ];

    const rows = [
        {
            id: 1,
            EmployeeName: "Snow Jon",
            Department: "Autonomous",
        },
        { id: 2, EmployeeName: "Lannister Cersei", Department: "ML" },
        { id: 3, EmployeeName: "Lannister Jaime", Department: "Autonomous" },
        { id: 4, EmployeeName: "StarkArya", Department: "SLIM FAST" },
        { id: 5, EmployeeName: "Targaryen Daenerys", Department: "L&D" },
        { id: 6, EmployeeName: "Melisandre null", Department: "G4 ANALYTICS" },
        { id: 7, EmployeeName: "Clifford Ferrara", Department: "Autonomous" },
        { id: 8, EmployeeName: "Frances Rossini", Department: "CFOTECH" },
        { id: 9, EmployeeName: "Roxie Harvey", Department: "CFOTECH" },
    ];

    const [isAddOpen, setAddOpen] = useState(false);

    const [pageSize, setPageSize] = useState(10);

    return (
        <>
            <NavBar
                role={"admin"}
                title={"Admin Dashboard"}
                appButtonName={"Add Employee"}
                setAddOpen={setAddOpen}
            />

            {isAddOpen ? (
                <AddEmployee setAddOpen={setAddOpen} />
            ) : showGraph ? (
                <Graphs setShowGraph={setShowGraph} showGraph={showGraph} />
            ) : (
                <Box
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    sx={{
                        margin: "10vh auto",
                        height: 400,
                        width: "85%",
                    }}
                >
                    <DataGrid
                        density="standard"
                        rows={rows}
                        columns={columns}
                        pageSize={pageSize}
                        onPageSizeChange={(newPageSize) =>
                            setPageSize(newPageSize)
                        }
                        rowsPerPageOptions={[5, 10]}
                        getRowId={(row) => row.id}
                        checkboxSelection
                        disableSelectionOnClick
                    />
                </Box>
            )}
        </>
    );
}
