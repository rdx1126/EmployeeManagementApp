import TaskContext from "./TaskContext";
import { useState } from "react";

const TaskState = (props) => {
    const [first, setfirst] = useState(second);
    return (
        <TaskContext.Provider value={{}}>{props.children}</TaskContext.Provider>
    );
};
export default TaskState;
