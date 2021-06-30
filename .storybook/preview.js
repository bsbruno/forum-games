import { ThemeProvider } from "styled-components";
import theme from "../src/styles/theme";
import { GloabalStyle } from "../src/styles/global";
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GloabalStyle />
      <Story />
    </ThemeProvider>
  ),
];
