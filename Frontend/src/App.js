import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./components/auth/Auth";
import { useEffect, useState } from "react";
import AdminDashboard from "./components/admin/AdminDashboard";
import EmployeeDashboard from "./components/employee/EmployeeDashboard";
import Home from "./components/Home";

function App() {
    // const navigate = Navigate();
    let initalValue = {
        success: false,
        role: "admin",
        authToken: "",
    };
    const [user, setUser] = useState(initalValue);

    useEffect(() => {
        // console.log(JSON.parse(localStorage.getItem("data")));
        if (
            localStorage.getItem("data") &&
            JSON.parse(localStorage.getItem("data")).authToken
        ) {
            console.log("HOME");
        } else {
            console.log("auth");
        }
    }, [user]);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AdminDashboard />} />
                    <Route path="/home" element={<Home />} />
                    <Route
                        path="/adminDashboard"
                        element={<AdminDashboard />}
                    />
                    <Route
                        path="/empDashboard"
                        element={<EmployeeDashboard />}
                    />
                    <Route path="/auth" element={<Auth setUser={setUser} />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
