import React from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./contexts/Customization";
import { useNavigate } from "react-router-dom";
import "./App.css";

const BuildBentoPage = () => {
    const navigate = useNavigate();

    return (
        <CustomizationProvider >
            <div className="App">
                {/* NAV BAR SMILEY PAGE CORNER */}
                <button
                    className="label"
                    onClick={() => navigate("/")}
                    style={{
                        background: "none",
                        border: "none",
                        color: "inherit",
                        fontSize: "40px", // Увеличиваем размер шрифта
                        cursor: "pointer",
                        padding: "20px", // Добавляем внутренние отступы
                        fontFamily: "Candara",
                        lineHeight: "1.2", // Корректируем межстрочный интервал
                        textShadow: "3px 3px #213555", // Увеличиваем эффект тени
                    }}
                >
                    Smiley
                </button>
                <Canvas dpr={[1, 2]} camera={{ fov: 80 }}>
                    <color attach="background" args={["#5a3072"]} />
                    <fog attach="fog" args={["#5a3072", 10, 20]} />
                    <Experience />
                </Canvas>
                <Configurator />
            </div>

        </CustomizationProvider>

    );
};

export default BuildBentoPage;
