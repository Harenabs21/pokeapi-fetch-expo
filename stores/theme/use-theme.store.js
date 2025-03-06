import { create } from 'zustand';
import { lightTheme, darkTheme } from '../../colors/theme';
import { Appearance } from 'react-native';

const useThemeStore = create((set) => ({
  theme: Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme,
  setTheme: (colorScheme) => set({ theme: colorScheme === 'dark' ? darkTheme : lightTheme }),
}));

export default useThemeStore;
