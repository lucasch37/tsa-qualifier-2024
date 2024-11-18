import { useState, useEffect } from "react";

// Define your color themes
const colorThemes = [
    {
        background: "#FAF4EE",
        lightShape: "#70b5ad",
        accent: "#FF8A47",
        complement: "#FA625C",
        textGradientStart: "#FBB03B",
        textGradientEnd: "#f7196a",
    },
    {
        background: "#00cdcd",
        lightShape: "#00e7e7",
        accent: "#009a9a",
        complement: "#00b4b4",
        textGradientStart: "#FBB03B",
        textGradientEnd: "#f7196a",
    },
    {
        background: "#ffd1b3",
        lightShape: "#ffdac2",
        accent: "#FFA567",
        complement: "#ffc299",
        textGradientStart: "#FBB03B",
        textGradientEnd: "#f7196a",
    },
];

export const useColorTheme = () => {
    const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentThemeIndex(
                (prevIndex) => (prevIndex + 1) % colorThemes.length
            );
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return colorThemes[currentThemeIndex];
};
