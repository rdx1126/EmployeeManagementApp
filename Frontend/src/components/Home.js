import AdminDashboard from "./admin/AdminDashboard";
import EmployeeDashboard from "./employee/EmployeeDashboard";

export default function Home() {
    return (
        <>
            {JSON.parse(localStorage.getItem("data")).role == "admin" ? (
                <AdminDashboard />
            ) : (
                <EmployeeDashboard />
            )}
        </>
    );
}
