import { useEffect } from "react";
import { Appearance } from "react-native";
import useThemeStore from "../stores/theme/use-theme.store"; 

export const useThemeListener = () => {
  useEffect(() => {
    const colorScheme = Appearance.getColorScheme();
    useThemeStore.getState().setTheme(colorScheme); 

    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      useThemeStore.getState().setTheme(colorScheme); 
    });

    return () => listener.remove();
  }, []); 
};