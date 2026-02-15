import React, { useState } from "react";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ChatWindow = ({ onClose }) => {
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState("");

    const handleSendMessage = () => {
        if (currentMessage.trim() !== "") {
            setMessages([...messages, { sender: "user", text: currentMessage }]);
            setCurrentMessage("");
        }
    };

    return (
        <Box
            sx={{
                position: "fixed",
                bottom: 80,
                right: 20,
                width: 300,
                height: 400,
                bgcolor: "#fff",
                borderRadius: 2,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Header */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 1,
                    bgcolor: "#4a306d",
                    color: "#fff",
                    borderRadius: "8px 8px 0 0",
                }}
            >
                <Typography variant="h6">Bento Support</Typography>
                <IconButton size="small" onClick={onClose} sx={{ color: "#fff" }}>
                    <CloseIcon />
                </IconButton>
            </Box>

            {/* Chat Messages */}
            <Box
                sx={{
                    flex: 1,
                    p: 2,
                    overflowY: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                }}
            >
                {messages.map((msg, index) => (
                    <Box
                        key={index}
                        sx={{
                            alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                            bgcolor: msg.sender === "user" ? "#4a306d" : "#f0f0f0",
                            color: msg.sender === "user" ? "#fff" : "#000",
                            p: 1,
                            borderRadius: 2,
                            maxWidth: "70%",
                        }}
                    >
                        {msg.text}
                    </Box>
                ))}
            </Box>

            {/* Input Box */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 1,
                    borderTop: "1px solid #ccc",
                }}
            >
                <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    placeholder="Type your message..."
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                />
            </Box>
        </Box>
    );
};

export default ChatWindow;
