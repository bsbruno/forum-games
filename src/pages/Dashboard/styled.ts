import styled, { css } from "styled-components";
import * as S from "../../components/CardPostShow/styled";
import media from "styled-media-query";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;

  ${media.lessThan("medium")`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top:2rem;


  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 800px;

  ${media.lessThan("medium")`
width: 300px;
  `}

  h1 {
    display: flex;
    justify-content: center;
    margin-top: 1.2rem;
    color: ${(props) => props.theme.colors.white};
  }
  ${S.Wrapper} {
    cursor: auto;

    :hover {
      opacity: 1;
    }
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.25rem;
  justify-content: center;
  align-self: center;
  width: 80%;
`;

export const CommentPostButton = styled.div`
  border: 1px solid white;
  height: 6rem;
  display: flex;

  justify-content: center;
  button {
    background-color: transparent;
    border: 0;
    cursor: pointer;

    :hover {
      opacity: 0.7;
    }

    svg {
      font-size: 2rem;
      color: gray;
    }
  }
`;

export const ModalLoadin = styled.div`
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
`;

export const NotComments = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  svg {
    font-size: 20rem;
    color: ${(props) => props.theme.colors.white};
  }
  h3 {
    color: ${(props) => props.theme.colors.gray};
    font-weight: 400;
    font-size: 4rem;
  }
`;

type openModalProps = {
  openModal: boolean;
};

export const CommentModal = styled.div<openModalProps>`
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

  ${({ openModal }) => css`
    display: ${openModal ? "block" : "none"};
  `}
`;
type CommentButtonProps = {
  comment: string;
};

export const ModalContent = styled.div<CommentButtonProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: -10rem;
  height: 30%;
  ${media.lessThan("medium")`
 padding-left: 0.8rem;

`}
  form {
    display: flex;
    flex-direction: column;

    textarea {
      width: 60%;
      resize: none;
      border: none;
      border-bottom: 1px solid white;
      padding-bottom: 0.8rem;
      background-color: transparent;
      color: ${(props) => props.theme.colors.white};
      padding: 1.3rem;
      overflow-y: hidden;
      font-size: 1.6rem;
      font-weight: 500;
      ${media.lessThan("medium")`
width: 90%;

`}
      :focus {
        outline: none;
      }
    }
    button {
      margin-top: 1rem;
      width: 30%;
      background-color: gray;
      ${({ comment }) => css`
        opacity: ${comment.length !== 0 ? 1 : 0.6};
        background-color: ${comment.length !== 0 ? "blueviolet" : "gray"};
        pointer-events: ${comment.length !== 0 ? "all" : "none"};
      `}
    }
  }
`;

export const CloseModal = styled.div`
  position: absolute;
  cursor: pointer;
  ${media.lessThan("medium")`
right: 30px;

`}
  :hover {
    opacity: 0.7;
  }

  svg {
    color: white;
    font-size: 2rem;
  }
  top: 15px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  width: 54%;
  margin-bottom: 2rem;
  ${media.lessThan("medium")`

width: 100%;
`}
  img {
    width: 6rem;
    height: 6rem;
    border-radius: 3rem;
    background-size: cover;
    background-position: center center;
  }
  p {
    max-width: 100%;
    margin-left: 2rem;
    color: ${(props) => props.theme.colors.primary};
    align-self: center;
    text-transform: capitalize;
  }
`;
