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
        localStorage.setItem(
            "data",
            JSON.stringify({
                success: true,
                role: "admin",
                authToken:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0MWM5ZjkxODAxZDkwNTcxNGQ3NmY1In0sImlhdCI6MTY2NTI2NDM0Nn0.uzaIySsX4_wlcH2wcEU1aIG1WE7Uw6Ch82UTZoMzFo4",
            })
        );
        // if (localStorage.getItem("data").authToken) {
        //     <Home />;
        // } else {
        //     // navigate("/auth");
        // }
    }, [localStorage.getItem("data")]);

    return (
        <>
            {/* {user.role == "no" ? <NavBar /> : <span />}*/}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
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
