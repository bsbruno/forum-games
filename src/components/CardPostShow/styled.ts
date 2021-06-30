import styled, { css } from "styled-components";
import media from "styled-media-query";
import { Link } from "react-router-dom";

export const Wrapper = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid white;
  max-height: 100%;

  :hover {
    opacity: 0.7;
  }
  cursor: pointer;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.4rem;
  max-width: 100%;

  ${media.lessThan("medium")`
  flex-direction: column;

  `}
`;

export const None = styled.div`
  margin: 0.8rem;
  width: 6rem;
  height: 6rem;
`;
export const ProfileImage = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.8rem;

  img {
    width: 6rem;
    height: 6rem;
    border-radius: 3rem;
  }
`;
export const NameUser = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  height: 1.8rem;
  max-width: 100%;
  p {
    color: ${(props) => props.theme.colors.white};
    font-weight: bold;
    padding-right: 0.5rem;
  }
  span {
    color: ${(props) => props.theme.colors.gray};
    font-weight: bold;
  }
`;

export const ContetPostText = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  ${media.lessThan("medium")`
width: 90%;


  `}

  margin: 1rem;
  width: 50%;
`;

export const PostText = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 100%;
  word-break: break-all;

  p {
    color: ${(props) => props.theme.colors.white};
    font-weight: 400;
  }
`;
export const ButtonLike = styled.button`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  border: 0;
  background-color: transparent;

  :hover {
    opacity: 0.7;
    cursor: pointer;
    color: red;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  svg {
    color: red;
  }
`;

export const LikeButton = styled.div`
  display: flex;
  margin-left: 0.5rem;
  margin-top: 2.25rem;
  align-items: center;

  span {
    color: ${(props) => props.theme.colors.gray};
    margin-left: 0.4rem;
  }
  svg {
    margin-left: 0.5rem;
  }
`;
type trashButtonProps = {
  trashVisible: boolean;
};

export const TrashButton = styled.span<trashButtonProps>`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 4rem;
  margin-top: 1rem;
  ${({ trashVisible }) => css`
    display: ${trashVisible ? "block" : "none"};
  `}
  svg {
    color: white;
  }
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;
