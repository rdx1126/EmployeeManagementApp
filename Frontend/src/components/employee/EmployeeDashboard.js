import React, { useContext, useEffect } from "react";
import { useState } from "react";
import NavBar from "../NavBar";
import AddTask from "./AddTask";
import Graphs from "../graphs/Graphs";
import TaskContext from "../../context/tasks/TaskContext";

export default function EmployeeDashboard() {
    const [isAddOpen, setAddOpen] = useState(false);
    const { task, getTasks } = useContext(TaskContext);

    useEffect(() => {
        getTasks();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <NavBar
                role={"employee"}
                title={"Employee Dashboard"}
                appButtonName={"Add Task"}
                setAddOpen={setAddOpen}
            />
            {isAddOpen ? <AddTask setAddOpen={setAddOpen} /> : <Graphs />}
        </>
    );
}
