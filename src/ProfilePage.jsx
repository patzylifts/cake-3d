import React from "react";
import { Box, Typography, Button, AppBar, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        navigate("/login");
    };

    const handleHome = () => {
        navigate("/");
    };

    const handleShop = () => {
        navigate("/shop");
    };

    return (
        <Box sx={{ flexGrow: 1, m: 0, p: 0 }}>
            <AppBar position="static" color="inherit" elevation={0}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Typography variant="h6" component="div">
                        CakeMaster
                    </Typography>
                    <Box>
                        <Button color="inherit" onClick={handleHome}>
                            HOME
                        </Button>
                        <Button color="inherit" onClick={handleShop}>
                            SHOP
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            <Box
                sx={{
                    height: "90vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Welcome, {user?.username || "Guest"}!
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    Your email: {user?.email || "No email provided"}
                </Typography>
                <Button variant="contained" color="primary" onClick={handleLogout}>
                    Logout
                </Button>
            </Box>
        </Box>
    );
};

export default ProfilePage;
