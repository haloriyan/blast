import { Route, Routes } from "react-router-dom"
import Dashboard from "./Dashboard";
import Contact from "./Contact";
import User from "./User";
import UserDetail from "./UserDetail";

const AdminRouter = () => {
    return (
        <Routes>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/user" element={<User />} />
            <Route path="/admin/user/:id/detail" element={<UserDetail />} />
            <Route path="/admin/contact" element={<Contact />} />
        </Routes>
    )
}

export default AdminRouter;