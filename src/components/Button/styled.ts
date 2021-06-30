import styled, { css } from "styled-components";
import { MyTheme } from "../../types/MyTheme";
import { ButtonProps } from "./index";

const Modifies = {
  small: (theme: MyTheme) => css`
    height: 2.5rem;
    font-size: 1.2rem;
  `,

  medium: (theme: MyTheme) => css`
    height: 4rem;
    font-size: 1.4rem;
  `,

  large: (theme: MyTheme) => css`
    height: 6rem;
    font-size: 1.6rem;
  `,
};

export const Wrapper = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  cursor: pointer;
  border-radius: 0.3rem;

  ${({ theme, size, color }) => css`
    background-color: ${theme.colors[color!]};
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    padding: 1.2rem;
    :hover {
      opacity: 0.7;
    }

    ${size == "small" && Modifies.small(theme)}
    ${size == "medium" && Modifies.medium(theme)}
${size == "large" && Modifies.large(theme)}
  `}
`;
