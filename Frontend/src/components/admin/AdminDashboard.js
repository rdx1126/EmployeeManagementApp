import { margin } from "@mui/system";
import { useState } from "react";
import NavBar from "../NavBar";
import AddEmployee from "./AddEmployee";

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
        </>
    );
}
