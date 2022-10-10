import TaskContext from "./TaskContext";
import { useState } from "react";
import axios from "axios";

const TaskState = (props) => {
    const [task, setTask] = useState([]);
    const baseURL = "http://localhost:5000/api/task/";

    const getTasks = async () => {
        await axios({
            url: `${baseURL}fetchtask`,
            method: "GET",
            headers: {
                "auth-token": JSON.parse(localStorage.getItem("data"))
                    .authToken,
            },
        })
            .then((res) => {
                setTask(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <TaskContext.Provider value={{ task, getTasks }}>
            {props.children}
        </TaskContext.Provider>
    );
};
export default TaskState;
