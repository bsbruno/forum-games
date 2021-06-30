import styled, { css } from "styled-components";

type WrapperProps = {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  padding: 1.25rem;
  margin-bottom: 1rem;
  width: 100%;
  border: 0;
  background-color: #eaeaea;
  border: 2px solid #121212;
  border-radius: 0.85rem;
  display: flex;
  justify-content: center;
  height: 5rem;

  ${(props) =>
    props.isFocused &&
    css`
      color: ${props.theme.colors.gray};
      border-color: ${props.theme.colors.secondary}; ;
    `}
  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      svg {
        color: ${props.theme.colors.secondary};
      }
    `}
  svg {
    margin-right: 1rem;
  }
  input {
    background-color: transparent;
    border: 0;
    height: 100%;
    width: 90%;
    :focus {
      outline: none;
    }

    ::placeholder {
      color: #666360;
    }
  }
`;

export const Error = styled.div`
  background-color: #c53539;
  position: absolute;
  right: 50px;
  padding: 0.5rem;
  border-radius: 1rem;
  animation: erroFloat 0.5s, fadeout 1s 2.5s;

  @keyframes erroFloat {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
