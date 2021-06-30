import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export const GloabalStyle = createGlobalStyle`

*{
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;

&::before,
&::after{
  box-sizing: inherit;
}
a {
    text-decoration: none;
  }


}
html{
  font-size: 62.5%;
}

body{
  font-family: ${theme.font.family};
  font-size: 1.6rem;
  background-color: ${theme.colors.mainBg};

}

`;
