// ChatButton.jsx
import React, { useState } from "react";
import { Box, Typography, TextField, Button, IconButton, Tooltip } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Avatar from "@mui/material/Avatar";
import SendIcon from '@mui/icons-material/Send'; // Импортируем иконку Send

const ChatButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState(""); // Добавляем состояние для сообщения

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSend = () => {
        if (message.trim() !== "") {
            // Логика отправки сообщения
            console.log("Отправлено сообщение:", message);
            setMessage(""); // Очистка поля ввода после отправки
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <>
            {/* Кнопка открытия чата */}
            <IconButton
                sx={{
                    position: "fixed",
                    bottom: 24,
                    left: 24,
                    bgcolor: "#4a306d",
                    color: "#fff",
                    "&:hover": {
                        bgcolor: "#3a205d",
                    },
                    zIndex: 1000,
                }}
                onClick={toggleChat}
            >
                <ChatBubbleOutlineIcon />
            </IconButton>

            {isOpen && (
                <Box
                    sx={{
                        position: "fixed",
                        bottom: 80,
                        left: 24, // Размещение окна чата слева
                        width: 300,
                        height: 400,
                        bgcolor: "#1a1a1a",
                        borderRadius: 2,
                        boxShadow: 3,
                        display: "flex",
                        flexDirection: "column",
                        zIndex: 1000,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            bgcolor: "#4a306d",
                            padding: 1,
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                        }}
                    >
                        <Avatar
                            src="/ai.webp" // Убедитесь, что путь к изображению корректен
                            alt="Assistant"
                            sx={{ marginRight: 1 }}
                        />
                        <Typography
                            variant="h6"
                            color="white"
                            sx={{ fontWeight: "bold", flexGrow: 1 }}
                        >
                            Bento Support
                        </Typography>
                        <Button
                            onClick={toggleChat}
                            sx={{ color: "white", fontSize: "0.8rem", minWidth: 0 }}
                        >
                            ✕
                        </Button>
                    </Box>

                    {/* История сообщений */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            overflowY: "auto",
                            padding: 2,
                            bgcolor: "#262626",
                        }}
                    >
                        <Typography color="white" variant="body2">
                            Hi! I'm Bento Support. How can I help you?
                        </Typography>
                        {/* Здесь можно добавить отображение истории сообщений */}
                    </Box>

                    {/* Поле ввода сообщения */}
                    <Box
                        sx={{
                            display: "flex",
                            padding: 1,
                            borderTop: "1px solid #444",
                            bgcolor: "#1a1a1a",
                        }}
                    >
                        <TextField
                            placeholder="Enter a message..."
                            variant="outlined"
                            size="small"
                            fullWidth
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            sx={{
                                bgcolor: "#fff",
                                borderRadius: 1,
                                marginRight: 1,
                                '& .MuiOutlinedInput-root': {
                                    paddingRight: 0, // Убираем внутренние отступы для лучшего размещения кнопки
                                },
                            }}
                        />
                        <Tooltip title="Send">
                            <IconButton
                                onClick={handleSend}
                                color="primary"
                                sx={{
                                    bgcolor: "#4a306d",
                                    color: "#fff",
                                    '&:hover': {
                                        bgcolor: "#3a205d",
                                    },
                                    borderRadius: 1,
                                }}
                                aria-label="send message"
                            >
                                <SendIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
            )}
        </>
    );
};

export default ChatButton;
