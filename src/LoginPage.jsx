import React, { useState } from "react";
import { Box, Typography, TextField, Button, AppBar, Toolbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email || !password) {
            setError("All fields are required.");
            return;
        }

        const user = JSON.parse(localStorage.getItem("user"));

        if (user && user.email === email && user.password === password) {
            localStorage.setItem("isAuthenticated", "true");
            navigate("/profile");
        } else {
            setError("Invalid email or password.");
        }
    };

    const handleRegisterRedirect = () => {
        navigate("/register");
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
                    Login
                </Typography>
                {error && (
                    <Alert severity="error" sx={{ width: "100%", maxWidth: 400, mb: 2 }}>
                        {error}
                    </Alert>
                )}
                <Box component="form" sx={{ width: "100%", maxWidth: 400, p: 3 }}>
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        variant="outlined"
                        margin="normal"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleLogin}
                        sx={{ mt: 2 }}
                    >
                        Login
                    </Button>
                    <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
                        Don't have an account?{" "}
                        <Button variant="text" color="primary" onClick={handleRegisterRedirect}>
                            Register
                        </Button>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default LoginPage;
