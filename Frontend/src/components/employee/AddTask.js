import React, { useState } from "react";
import "./AddTask.css";
import axios from "axios";

function AddTask({ setAddOpen }) {
    const [taskDetails, setTaskDetails] = useState({
        taskType: "Meeting",
        startTime: "00:00",
        timeTaken: 0,
        description: "",
    });

    const handleTaskType = (e) => {
        setTaskDetails({ ...taskDetails, taskType: e.target.value });
    };
    const handleStartTime = (e) => {
        setTaskDetails({ ...taskDetails, startTime: e.target.value });
    };
    const handleTimeTaken = (e) => {
        setTaskDetails({ ...taskDetails, timeTaken: e.target.value });
    };
    const handleTaskDescription = (e) => {
        setTaskDetails({ ...taskDetails, description: e.target.value });
    };
    const handleCancel = () => {
        setAddOpen(false);
    };
    const handleAddTask = () => {
        const addEmployee = async () => {
            let baseURL = "http://localhost:5000/api/task/";
            await axios({
                url: `${baseURL}addtask`,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token":
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0MmE5NjhmMWEzMDUyNDMxMzI0Zjg5Iiwicm9sZSI6ImVtcGxveWVlIn0sImlhdCI6MTY2NTMzNjUxMH0.prY-IIM7A9nKuBHbcAV4ZL_gJ_Mt4ZCJY3uaGKA82Fw",
                },
                data: taskDetails,
            })
                .then((data) => {
                    setAddOpen(false);
                    console.log(data.data);
                })
                .catch((error) => {
                    console.log(error);
                    setAddOpen(false);
                });
        };
        addEmployee();
    };

    return (
        <div className="form">
            <div className="form-body">
                <div className="TaskType">
                    <label for="Task-Type" style={{ width: "40%" }}>
                        Task-Type
                    </label>
                    <select
                        value={taskDetails.taskType}
                        onChange={handleTaskType}
                        name="task_type"
                        style={{ width: "50%" }}
                        id="task_type"
                    >
                        <option value="Break">Break</option>
                        <option value="Meeting">Meeting</option>
                        <option value="Work">Work</option>
                    </select>
                </div>
                <div className="StartTime">
                    <label
                        className="form__label"
                        for="StartTime"
                        style={{ width: "40%" }}
                    >
                        Start-Time{" "}
                    </label>
                    <input
                        style={{ width: "50%" }}
                        type="Time"
                        name="startTime"
                        id="StartTime"
                        className="form__input"
                        placeholder="StartTime"
                        onChange={handleStartTime}
                        value={taskDetails.startTime}
                    />
                </div>
                <div className="TimeTaken">
                    <label
                        className="form__label"
                        for="TimeTaken"
                        style={{ width: "40%" }}
                    >
                        Time-Taken in minutes{" "}
                    </label>
                    <input
                        style={{ width: "50%" }}
                        type="Number"
                        min="0"
                        name="timeTaken"
                        id="TimeTaken"
                        className="form__input"
                        placeholder="TimeTaken"
                        onChange={handleTimeTaken}
                        value={taskDetails.timeTaken}
                    />
                </div>

                <div className="username">
                    <label className="form__label" for="Description">
                        {" "}
                        Task-Description{" "}
                    </label>

                    <textarea
                        style={{ width: "100%" }}
                        id="description"
                        name="description"
                        rows="5"
                        cols="60"
                        onChange={handleTaskDescription}
                        value={taskDetails.description}
                    ></textarea>
                </div>
            </div>
            <div
                class="footer"
                style={{
                    display: "flex",
                    direction: "row",
                    justifyContent: "space-between",
                }}
            >
                <button
                    class="btn"
                    style={{ backgroundColor: "#1572A1", color: "white" }}
                    onClick={handleAddTask}
                >
                    Add Task
                </button>
                <button
                    class="btn"
                    style={{ backgroundColor: "#1572A1", color: "white" }}
                    onClick={handleCancel}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}
export default AddTask;
