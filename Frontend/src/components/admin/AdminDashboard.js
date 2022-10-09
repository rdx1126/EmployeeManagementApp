import { margin } from "@mui/system";
import { useState } from "react";
import NavBar from "../NavBar";
import AddEmployee from "./AddEmployee";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "EmployeeName",
        headerName: "EmployeeName",
        width: 150,
        editable: false,
    },
  
    {
        field: "Department",
        headerName: "Department",
        width: 150,
        editable: true,
    },
];

const rows = [
    { id: 1, EmployeeName: "Snow Jon",Department:"Autonomous" },
    { id: 2, EmployeeName: "Lannister Cersei",Department:"ML" },
    { id: 3, EmployeeName: "Lannister Jaime",Department:"Autonomous"},
    { id: 4, EmployeeName: "StarkArya",Department:"SLIM FAST" },
    { id: 5, EmployeeName: "Targaryen Daenerys",Department:"L&D"},
    { id: 6, EmployeeName: "Melisandre null",Department:"G4 ANALYTICS"},
    { id: 7, EmployeeName: "Clifford Ferrara",Department:"Autonomous"  },
    { id: 8, EmployeeName: "Frances Rossini",Department:"CFOTECH"  },
    { id: 9, EmployeeName: "Roxie Harvey",Department:"CFOTECH"  },
];

export default function AdminDashboard() {
    const [isAddOpen, setAddOpen] = useState(false);
    return (
        <>
            <NavBar
                role={"admin"}
                title={"Admin Dashboard"}
                appButtonName={"Add Employee"}
                setAddOpen={setAddOpen}
            />

            {isAddOpen ? <AddEmployee /> : <span></span>}

            <Box sx={{ margin:'9vh auto',height: 1000, width: "85%"  ,}}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[10]}
                    SelectionOnClick
                    // experimentalFeatures={{ newEditingApi: true }}
                />
            </Box>
        </>
    );
}

    // {
    //     field: "Employee Name",
    //     headerName: "Employee name",
    //     description: "This column has a value getter and is not sortable.",
    //     sortable: false,
    //     width: 160,
    //     // valueGetter: (params) =>
    //     //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    // },
    