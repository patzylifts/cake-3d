import React, {useEffect} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import BuildBentoPage from "./BuildBentoPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import AdminPage from "./AdminPage"; // Импорт страницы администратора

const App = () => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

    // Временная установка isAdmin для тестирования
    useEffect(() => {
        localStorage.setItem("isAdmin", "true");
    }, []);

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
                path="/profile"
                element={isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />}
            />
            <Route path="/build-bento" element={<BuildBentoPage />} />
            <Route path="/shop" element={<BuildBentoPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
                path="/admin"
                element={localStorage.getItem("isAdmin") === "true" ? <AdminPage /> : <Navigate to="/" />}
            />
        </Routes>
    );
};

export default App;
