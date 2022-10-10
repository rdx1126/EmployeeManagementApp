import AdminDashboard from "./admin/AdminDashboard";
import EmployeeDashboard from "./employee/EmployeeDashboard";
import Auth from "./auth/Auth";
import TaskState from "../context/tasks/TaskState";
export default function Home() {
    return (
        <>
            {localStorage.getItem("data") ? (
                JSON.parse(localStorage.getItem("data")).role === "admin" ? (
                    <AdminDashboard />
                ) : (
                    <TaskState>
                        <EmployeeDashboard />
                    </TaskState>
                )
            ) : (
                <Auth />
            )}
        </>
    );
}
