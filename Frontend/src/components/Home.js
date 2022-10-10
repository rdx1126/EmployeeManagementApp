import AdminDashboard from "./admin/AdminDashboard";
import EmployeeDashboard from "./employee/EmployeeDashboard";
import Auth from "./auth/Auth";
export default function Home() {
    return (
        <>
            {localStorage.getItem("data") ? (
                JSON.parse(localStorage.getItem("data")).role === "admin" ? (
                    <AdminDashboard />
                ) : (
                    <EmployeeDashboard />
                )
            ) : (
                <Auth />
            )}
        </>
    );
}
