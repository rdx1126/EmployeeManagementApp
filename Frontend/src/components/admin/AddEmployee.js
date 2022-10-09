import React, { useEffect, useState } from "react";
import "./AddEmployee.css";
import validator from "validator";
import Alert from "react-bootstrap/Alert";
import axios from "axios";

function AddEmployee({ setAddOpen }) {
    const [empDetails, setEmpDetails] = useState({
        email: "",
        name: "",
        password: "",
        contactNumber: 9876543210,
        joiningDate: new Date(),
        department: "",
    });
    let [errorMessage, setErrorMessage] = useState("No Error");
    let [authToken, setAuthToken] = useState("");

    const handleName = (e) => {
        if (empDetails.name.length > 0) setErrorMessage("No Error");
        setEmpDetails({ ...empDetails, name: e.target.value });
    };
    const handleEmail = (e) => {
        if (validator.isEmail(empDetails.email)) setErrorMessage("No Error");
        setEmpDetails({ ...empDetails, email: e.target.value });
    };
    const handleContactNo = (e) => {
        setEmpDetails({ ...empDetails, contactNumber: e.target.value });
    };
    const handleDepartment = (e) => {
        setEmpDetails({ ...empDetails, department: e.target.value });
    };
    const handleJoiningDate = (e) => {
        setEmpDetails({ ...empDetails, joiningDate: e.target.value });
    };
    const handlePassword = (e) => {
        if (empDetails.password.length >= 8) setErrorMessage("No Error");
        setEmpDetails({ ...empDetails, password: e.target.value });
    };

    const handleCancel = () => {
        setAddOpen(false);
    };
    const handleAddEmployee = () => {
        if (empDetails.name.length == 0) {
            setErrorMessage("Name can't be empty");
        }
        if (empDetails.email.length == 0) {
            setErrorMessage("Email address can't be empty");
        } else if (!validator.isEmail(empDetails.email)) {
            setErrorMessage("Please enter valid e-mail address.");
        }
        if (empDetails.password.length < 8) {
            setErrorMessage("Password Length can't be less than 8 characters");
        }
        console.log(errorMessage);
        if (
            empDetails.name.length > 0 &&
            validator.isEmail(empDetails.email) &&
            empDetails.password.length >= 8 &&
            errorMessage == "No Error"
        ) {
            const addEmployee = async () => {
                let baseURL = "http://localhost:5000/api/auth/";
                await axios({
                    url: `${baseURL}signupemp`,
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token":
                            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0MWM5ZjkxODAxZDkwNTcxNGQ3NmY1Iiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTY2NTM0MDc5MX0.RYbpnb5K6qOvZs1kD8_9RVmhUXPfSWhfqOZwjJhy6XQ",
                    },
                    data: empDetails,
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
        }
    };

    return (
        <div className="form">
            {errorMessage != "No Error" ? (
                <Alert
                    key="danger"
                    variant="danger"
                    className="Auth-form-content"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
                        viewBox="0 0 16 16"
                        role="img"
                        aria-label="Warning:"
                    >
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    {errorMessage}
                </Alert>
            ) : (
                <span />
            )}
            <div className="form-body">
                <div className="username">
                    <label
                        className="form__label"
                        for="Name"
                        style={{ width: "40%" }}
                    >
                        {" "}
                        Name{" "}
                    </label>
                    <input
                        style={{ width: "60%" }}
                        className="form__input"
                        type="text"
                        id="Name"
                        placeholder=" Name"
                        value={empDetails.name}
                        onChange={handleName}
                    />
                </div>
                <div className="email">
                    <label
                        className="form__label"
                        for="email"
                        style={{ width: "40%" }}
                    >
                        Email-Id
                    </label>
                    <input
                        style={{ width: "60%" }}
                        type="email"
                        id="email"
                        className="form__input"
                        placeholder="Email-Id"
                        value={empDetails.email}
                        onChange={handleEmail}
                    />
                </div>
                <div className="ContactNumber">
                    <label
                        className="form__label"
                        for="ContactNumber"
                        style={{ width: "40%" }}
                    >
                        Contact Number
                    </label>
                    <input
                        style={{ width: "60%" }}
                        type="phone Number"
                        id="ContactNumber"
                        className="form__input"
                        placeholder="ContactNumber"
                        value={empDetails.contactNumber}
                        onChange={handleContactNo}
                    />
                </div>
                <div className="Department">
                    <label
                        className="form__label"
                        for="Department"
                        style={{ width: "40%" }}
                    >
                        Department
                    </label>
                    <input
                        style={{ width: "60%" }}
                        type="text"
                        id="Department"
                        className="form__input"
                        placeholder="Department"
                        value={empDetails.department}
                        onChange={handleDepartment}
                    />
                </div>
                <div className="JoiningDate">
                    <label
                        className="form__label"
                        for="JoiningDate"
                        style={{ width: "40%" }}
                    >
                        Joining Date{" "}
                    </label>
                    <input
                        style={{ width: "60%", height: "10%" }}
                        type="date"
                        id="JoiningDate"
                        className="form__input"
                        value={empDetails.joiningDate}
                        defaultValue={empDetails.joiningDate}
                        onChange={handleJoiningDate}
                    />
                </div>
                <div className="password">
                    <label
                        className="form__label"
                        for="password"
                        style={{ width: "40%" }}
                    >
                        Password{" "}
                    </label>
                    <input
                        style={{ width: "60%" }}
                        className="form__input"
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={empDetails.password}
                        onChange={handlePassword}
                    />
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
                    onClick={handleAddEmployee}
                >
                    Add Employee
                </button>
                <button
                    type="cancel"
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
export default AddEmployee;
