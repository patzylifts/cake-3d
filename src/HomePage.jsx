import React from "react";
import { Box, Typography, Button, AppBar, Toolbar, IconButton } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import ChatButton from "./components/ChatButton.jsx"; // Импортируем компонент кнопки чата

const HomePage = () => {
    const navigate = useNavigate();

    const handleScrollToAbout = () => {
        const aboutSection = document.getElementById("about-section");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleChatClick = () => {
        console.log("Chat button clicked"); // Замените это на вызов модального окна или чата
    };

    return (
        <Box sx={{ flexGrow: 1, m: 0, p: 0 }}>
            {/* Header */}
            <AppBar position="static" color="inherit" elevation={0}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Typography variant="h6" component="div">
                        Smiley
                    </Typography>
                    <Box>
                        <Button color="inherit" onClick={() => navigate("/")}>
                            HOME
                        </Button>
                        <Button color="inherit" onClick={() => navigate("/shop")}>
                            SHOP
                        </Button>
                        <Button color="inherit" onClick={handleScrollToAbout}>
                            ABOUT
                        </Button>
                        <IconButton color="inherit" onClick={() => navigate("/profile")}>
                            <AccountCircle />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Main Banner */}
            <Box
                sx={{
                    height: "90vh",
                    backgroundImage: `url('/1.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "#fff",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
                }}
            >
                <Typography variant="h2" gutterBottom>
                    Smiley Page Corner
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                    - BENTO BOUTIQUE -
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    sx={{
                        bgcolor: "rgba(255,255,255,0.8)",
                        color: "black",
                        "&:hover": { bgcolor: "rgba(255,255,255,1)" },
                    }}
                    onClick={() => navigate("/build-bento")}
                >
                    Customize Your Cake
                </Button>
            </Box>

            {/* About Section */}
            <Box
                id="about-section"
                sx={{
                    height: "30vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 4,
                    bgcolor: "#f8f8f8",
                }}
            >
                <Typography variant="h5" gutterBottom>
                    About Smiley Page Corner
                </Typography>
                <Typography variant="body1" textAlign="center">
                    Smiley Page Corner creates affordable, 
                    delicious cakes for your special moments.
                    You can order for birthdays, weddings, anniversaries,
                    and corporate events. Each cake is baked fresh and designed 
                    to match your theme and budget. We serve customers across 
                    CALABARZON and NCR with fast and reliable delivery. Visit our Silang and Tagaytay branches for easy pickup. You get free delivery in nearby areas, so you can celebrate without extra cost.
                </Typography>
            </Box>

            {/* Chat Button */}
            <ChatButton onClick={handleChatClick} />
        </Box>
    );
};

export default HomePage;
