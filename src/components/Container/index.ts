import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 980px;
    margin: 2% auto;
    padding-left: 1.5rem /2;
    padding-right: 1.5rem /2;
  `}
`;
