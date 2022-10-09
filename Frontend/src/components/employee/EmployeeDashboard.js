import { useState } from "react";
import NavBar from "../NavBar";
import AddTask from "./AddTask";

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
        </>
    );
}
