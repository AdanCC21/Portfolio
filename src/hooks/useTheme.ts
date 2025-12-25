import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme debe usarse dentro de ThemeProvider");
    }
    return context;
};
