import React, { useState } from "react";

function DLMode() {
    const [bgColor, setBgColor] = useState("white");
    const [theme, setTheme] = useState("black");

    const handleChange = () => {
        setTheme(theme === "black" ? "white" : "black");
        setBgColor(theme === "black" ? "black" : "white");
    };

    const generateRandomColor = () => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        setBgColor(randomColor);
    };

    // Styles
    const containerStyle = {
        backgroundColor: bgColor,
        padding: "50px",
        textAlign: "center",
    };

    const buttonStyle = {
        margin: "10px",
        padding: "15px 30px",
        border: "none",
        borderRadius: "8px",
        color: "white",
        fontSize: "16px",
        cursor: "pointer",
        transition: "background-color 0.3s ease, transform 0.2s ease",
        fontWeight: "bold",
    };

    const darkModeButtonStyle = {
        ...buttonStyle,
        backgroundColor: "#333",
    };

    const randomColorButtonStyle = {
        ...buttonStyle,
        backgroundColor: "#007bff",
    };

    // Hover effects using pseudo-classes are not supported in inline styles,
    // but you can apply them using inline CSS in React. Here is an alternative approach
    // for achieving hover effects using inline styles.
    const [hoveredButton, setHoveredButton] = useState(null);

    const handleMouseEnter = (buttonType) => {
        setHoveredButton(buttonType);
    };

    const handleMouseLeave = () => {
        setHoveredButton(null);
    };

    const getButtonStyle = (buttonType) => {
        const baseStyle = {
            ...buttonStyle,
            backgroundColor: buttonType === "darkMode" ? "#333" : "#007bff",
            transform: hoveredButton === buttonType ? "scale(1.05)" : "scale(1)",
        };

        if (hoveredButton === buttonType) {
            baseStyle.backgroundColor = buttonType === "darkMode" ? "#555" : "#0056b3";
        }

        return baseStyle;
    };

    return (
        <div style={{ backgroundColor: bgColor, padding: "350px" }}>
            <h1>State</h1>
            <button
                onClick={handleChange}
                onMouseEnter={() => handleMouseEnter("darkMode")}
                onMouseLeave={handleMouseLeave}
                style={getButtonStyle("darkMode")}
            >
                Switch to {theme === "black" ? "Dark" : "Light"} Mode
            </button>
            <button
                onClick={generateRandomColor}
                onMouseEnter={() => handleMouseEnter("randomColor")}
                onMouseLeave={handleMouseLeave}
                style={getButtonStyle("randomColor")}
            >
                Random Color
            </button>
        </div>
    );
}

export default DLMode;
