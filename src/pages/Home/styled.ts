import styled, { css } from "styled-components";

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

export const CardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  ${media.lessThan("medium")`
  margin-top:2rem;
padding:1rem;
height: 100vh;
max-width: 100vw;
  `}
  width: 750px;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: 1rem;
  align-items: center;
`;

export const ProfileContainer = styled.div`
  ${media.lessThan("medium")`
margin-left:1rem ;
`}
  img {
    width: 5rem;
    height: 5rem;
    border-radius: 2.5rem;
    background-color: gray;
  }
  span {
    margin-left: 1rem;
  }
`;

export const PostInput = styled.div`
  height: 100%;
  margin-left: 1rem;

  width: 100%;
  textarea {
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    width: 60%;
    padding: 1.25rem;
    text-align: left;
    resize: none;
    outline: none;
    border-radius: 1rem;
    background-color: ${(props) => props.theme.colors.lightGray};
    cursor: pointer;
    :hover {
      opacity: 0.7;
    }
    ::placeholder {
      font-size: 1.3rem;
      color: ${(props) => props.theme.colors.black};
      opacity: 0.5;
      ${media.lessThan("medium")`

font-size: 1.1rem;
`}
    }
  }
`;

type setIsOpenProps = {
  open: boolean;
};

export const ModalContent = styled.div<setIsOpenProps>`
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

export const ProfileModalContainer = styled.div`
  display: flex;

  width: 50%;
  padding-top: 1rem;
  margin-left: 1rem;

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 2.5rem;
    background-color: gray;
  }
  span {
    margin-left: 0.8rem;
    color: ${(props) => props.theme.colors.white};
    font-size: 2rem;
    margin-top: 0.4rem;
    text-transform: capitalize;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const PosterTextModal = styled.div`
  ${media.lessThan("medium")`

width: 100%;
left: 0
`}
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  position: relative;
  bottom: -10rem;
  left: 40rem;
  width: 40%;
  height: 60%;
  background-color: #242526;
`;

export const PostModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const PostModal = styled.div`
  height: 70%;
  padding: 1rem;
  form {
    height: 100%;
    textarea {
      background-color: #242526;
      width: 100%;
      height: 100%;
      padding: 2rem;
      font-size: 2rem;
      color: ${(props) => props.theme.colors.white};
      resize: none;
      ::placeholder {
        font-size: 2.25rem;
        text-align: center;
      }
      outline: none;
    }
    button {
      width: 100%;
    }
  }
`;

export const CloseModal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 2rem;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  svg {
    color: ${(props) => props.theme.colors.lightGray};
  }
`;

export const LoadContent = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;

  padding: 1.8rem;
  p {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.white};
  }
  ${media.lessThan("medium")`
display: none


  `}
`;
