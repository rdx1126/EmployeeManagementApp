import React, { useState } from "react";
import "./AddTask.css";

function AddTask({ setAddOpen }) {
    const [taskType, setTaskType] = useState("Work");
    const [startTime, setStartTime] = useState("00:00");
    const [timeTaken, setTimeTaken] = useState(0);
    const [taskDescription, setTaskDescription] = useState("");

    const handleTaskType = (e) => {
        setTaskType(e.target.value);
    };
    const handleStartTime = (e) => {
        setStartTime(e.target.value);
    };
    const handleTimeTaken = (e) => {
        setTimeTaken(e.target.value);
    };
    const handleTaskDescription = (e) => {
        setTaskDescription(e.target.value);
    };
    const handleCancel = () => {
        setAddOpen(false);
    };
    const handleAddTask = () => {
        setAddOpen(false);
        console.log(taskType);
        console.log(startTime);
        console.log(timeTaken);
        console.log(taskDescription);
    };

    return (
        <div className="form">
            <div className="form-body">
                <div className="TaskType">
                    <label for="Task-Type" style={{ width: "40%" }}>
                        Task-Type
                    </label>
                    <select
                        value={taskType}
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
                        value={startTime}
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
                        value={timeTaken}
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
                        value={taskDescription}
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
