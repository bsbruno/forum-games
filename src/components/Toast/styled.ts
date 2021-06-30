import styled, { css } from "styled-components";

type OpenProps = {
  open: boolean;
};

export const Wrapper = styled.div<OpenProps>`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(60, 60, 60, 0.8);
  overflow: auto;
  ${({ open }) => css`
    display: ${open ? "block" : "none"};
  `}
`;

export const Modal = styled.div`
  background-color: ${(props) => props.theme.colors.gray};
  margin: 1% auto;
  display: flex;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 38%;
`;

export const ContentModal = styled.div`
  padding: 1rem;
  display: flex;
  word-break: break-all;

  margin: 0 auto;
  p {
    color: ${(props) => props.theme.colors.white};
  }
`;

export const CloseModal = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
`;
