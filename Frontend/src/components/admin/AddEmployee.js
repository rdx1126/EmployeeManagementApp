import React from "react";
import "./AddEmployee.css";

function AddEmployee() {
    return (
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="Name">
                        {" "}
                        Name{" "}
                    </label>
                    <input
                      style={{ width: "17vw" }}
                        className="form__input"
                        type="text"
                        id="Name"
                        placeholder=" Name"
                    />
                </div>
                <div className="email">
                    <label className="form__label" for="email">
                        Email-Id
                    </label>
                    <input
                      style={{ width: "17vw" }}
                        type="email"
                        id="email"
                        className="form__input"
                        placeholder="Email-Id"
                    />
                </div>
                <div className="ContactNumber">
                    <label className="form__label" for="ContactNumber">
                        Contact Number
                    </label>
                    <input
                      style={{ width: "17vw" }}
                        type="phone Number"
                        name=""
                        id="ContactNumber"
                        className="form__input"
                        placeholder="ContactNumber"
                    />
                </div>
                <div className="Department">
                    <label className="form__label" for="Department">
                        Department
                    </label>
                    <input
                      style={{ width: "17vw" }}
                        type="text"
                        id="Department"
                        className="form__input"
                        placeholder="Department"
                    />
                </div>
                <div className="JoiningDate">
                    <label className="form__label" for="JoiningDate">
                        Joining Date{" "}
                    </label>
                    <input
                     style={{width:'17vw',height:'4.39vh'}}
                        type="Date"
                        name=""
                        id="JoiningDate"
                        className="form__input"
                        placeholder="JoiningDate"
                    />
                </div>
                <div className="password">
                    <label className="form__label" for="password">
                        Password{" "}
                    </label>
                    <input
                      style={{ width: "17vw" }}
                        className="form__input"
                        type="password"
                        id="password"
                        placeholder="Password"
                    />
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">
                        Confirm Password{" "}
                    </label>
                    <input
                      style={{ width: "17vw" }}
                        className="form__input"
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirm Password"
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
                >
                    Add Employee
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
export default AddEmployee;
