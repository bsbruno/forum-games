import styled, { css } from "styled-components";

import { LogoProps } from "./index";
import media from "styled-media-query";

const Modifies = {
  hideOnMobile: () => css`
    ${media.lessThan("medium")`
    .text{
          display: none;

        }
    `}
  `,
};

export const Wrapper = styled.div<LogoProps>`
  display: flex;

  flex-direction: row;
  ${({ theme, size, hiddenMobile, hiddenText }) => css`
    color: ${theme.colors.white};
    width: ${size == "large" ? "20rem" : "11rem"};
    height: ${size == "large" ? "5.9rem" : "3.3rem"};

    .text {
      display: inline;
      margin-left: 1.2rem;
      text-align: center;
      align-self: center;
      display: ${hiddenText ? "none" : "block"};
    }

    ${!!hiddenMobile && Modifies.hideOnMobile}
  `}
`;

/*
    width: ${size == "large" ? "20rem" : "11rem"};
    height: ${size == "large" ? "5.9rem" : "3.3rem"};
*/
