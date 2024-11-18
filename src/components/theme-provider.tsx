"use client";

import React, { createContext, useContext } from "react";
import { useColorTheme } from "@/lib/hooks/useColorTheme";

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

const ThemeContext = createContext<ReturnType<typeof useColorTheme>>(
    colorThemes[0]
);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const currentTheme = useColorTheme();

    React.useEffect(() => {
        const root = document.documentElement;
        Object.entries(currentTheme).forEach(([key, value]) => {
            root.style.setProperty(`--color-${key}`, value);
        });
    }, [currentTheme]);

    return (
        <ThemeContext.Provider value={currentTheme}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
