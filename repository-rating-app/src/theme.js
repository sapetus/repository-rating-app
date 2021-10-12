import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textTertiary: 'white',
    primary: '#0366d6',
    backgroundColor: '#24292e',
    backgroundColorLight: '#e3e1e1',
    error: '#d73a4a'
  },
  fontSizes: {
    body: 14,
    subheading: 16
  },
  fonts: {
    main: Platform.select({
      androi: 'Roboto',
      ios: 'Arial',
      default: 'System'
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700'
  }
};

export default theme;