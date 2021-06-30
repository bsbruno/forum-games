import styled from "styled-components";

export const LoadContent = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  margin-bottom: 2rem;
  div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fed;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
    :nth-child(1) {
      left: 8px;
      animation: dots1 0.6s infinite;
    }
    :nth-child(2) {
      left: 8px;
      animation: dots2 0.6s infinite;
    }
    :nth-child(3) {
      left: 32px;
      animation: dots3 0.6s infinite;
    }
    :nth-child(4) {
      left: 56px;
      animation: dots4 0.6s infinite;
    }
    @keyframes dots2 {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(24px, 0);
      }
    }

    @keyframes dots3 {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(24px, 0);
      }
    }
    @keyframes dots2 {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(24px, 0);
      }
    }
  }

  span {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.white};
  }
`;

export const LoadPost = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
`;
