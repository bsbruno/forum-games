import styled, { css } from "styled-components";
import media from "styled-media-query";
/* import { Link } from "react-router-dom";  */
export const Wrapper = styled.div`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  border-bottom: 1px solid gray;
  max-height: 100%;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 100%;
`;

export const None = styled.div`
  margin: 0.8rem;
  width: 4rem;
  height: 4rem;

  border-radius: 50%;
  background-color: gray;
`;
export const ProfileImage = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.8rem;

  img {
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
  }
`;
export const NameUser = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  height: 80%;
  max-width: 50%;

  ${media.lessThan("medium")`
  height: 100%;
  `}

  p {
    color: ${(props) => props.theme.colors.white};
    text-overflow: ellipsis;

    width: 100%;
    overflow: hidden;
    white-space: nowrap;
  }
  span {
    color: ${(props) => props.theme.colors.gray};
    width: 86px;
    text-overflow: ellipsis;

    overflow: hidden;
    white-space: nowrap;
  }
`;

export const ContetPostText = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  ${media.lessThan("medium")`
margin-right:0.8rem ;
width: 100%;

  `}

  margin-top: 0.5rem;

  width: 50%;
`;

export const PostText = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 100%;
  word-break: break-all;

  ${media.lessThan("medium")`
margin-right:0.8rem ;


flex-wrap:wrap ;
display: flex;
  `}

  margin-left: 1.25rem;

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
