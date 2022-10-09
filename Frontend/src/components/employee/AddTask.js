import React from "react";
 import "./AddTask.css";

function AddTask() {
    return (
        <div className="form">
            <div className="form-body">
                <div className="TaskType">
                    <label for="Task-Type" style={{width:'12vw'}}>Task-Type</label>
                    <select name="dog-names" style={{width:'15vw'}} id="dog-names">
                        <option value="Break">Break</option>
                        <option value="Meeting">Meeting</option>
                        <option value="Work">Work</option>
                    </select>
                </div>
                <div className="StartTime">
                    <label className="form__label" for="StartTime">
                        Start-Time{" "}
                    </label>
                    <input
                        style={{ width: "15vw" }}
                        type="Time"
                        name="StartTime"
                        id="StartTime"
                        className="form__input"
                        placeholder="StartTime"
                    />
                </div>
                <div className="TimeTaken">
                    <label className="form__label" for="TimeTaken">
                        Time-Taken in minutes{" "}
                    </label>
                    <input
                        style={{ width: "15vw" }}
                        type="Number"
                        name="TimeTaken"
                        id="TimeTaken"
                        className="form__input"
                        placeholder="TimeTaken"
                    />
                </div>

                <div className="username">
                    <label className="form__label" for="Description">
                        {" "}
                        Task-Description{" "}
                    </label>

                    <textarea
                        id="w3review"
                        name="w3review"
                        rows="5"
                        cols="60"
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
                    type="submit"
                    class="btn"
                    style={{ backgroundColor: "#1572A1", color: "white" }}
                >
                    Add Task
                </button>
                <button
                    type="cancel"
                    class="btn"
                    style={{ backgroundColor: "#1572A1", color: "white" }}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}
export default AddTask;
