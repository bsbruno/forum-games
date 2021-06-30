import styled, { css } from "styled-components";
import { MenuProps } from ".";
import media from "styled-media-query";
import { Link } from "react-router-dom";

export const Wrapper = styled.menu<MenuProps>`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    align-items: center;

    padding: 1.8rem;
  `}
`;

export const MenuNavDesktop = styled.nav`
  ${({ theme }) => css`
    display: flex;
    margin-top: 1rem;

    position: relative;
    left: 300px;

    ${media.lessThan("medium")`
display: none;

    `}
  `}
`;

export const LinkMenu = styled.span`
  display: flex;
  button {
    align-self: center;
  }

  ${({ theme }) => css`
    a {
      padding: 1.4rem;
      text-decoration: none;
      color: ${theme.colors.white};
      text-decoration: none;

      :hover {
        opacity: 0.5;
      }
    }
  `}
`;

export const WrapperLogo = styled(Link)``;

export const MenuNavMobile = styled.div`
  display: flex;
  text-align: center;

  align-self: center;
`;
export const MenulinkIcon = styled.div`
  color: #fff;
  font-size: 2rem;
  margin-top: 1.5rem;
  ${media.greaterThan("medium")`

display: none;
`}
`;

export const Menulink = styled(Link)`
  ${({ theme }) => css`
    padding: 1.2rem;
    font-size: 2rem;
    color: ${theme.colors.white};
    text-decoration: none;
    cursor: pointer;
    :hover {
      opacity: 0.5;
    }

    ${media.greaterThan("medium")`

    display: none;
    `}
  `}
`;

type isOpenProps = {
  isOpen: boolean;
};

export const CloseMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  font-size: 3rem;
  cursor: pointer;
  svg {
    color: ${(props) => props.theme.colors.white};
  }
`;

export const MenuFullMobile = styled.nav<isOpenProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: ${theme.colors.black};
    height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    position: fixed;
    overflow: hidden;
    z-index: 999;
    opacity: ${isOpen ? 1 : 0};
    padding-bottom: 20rem;
    pointer-events: ${isOpen ? "all" : "none"};
    ${Menulink} {
      color: ${theme.colors.white};
      font-weight: ${theme.font.bold};
      font-size: 2.5rem;
    }
  `}
  ${media.lessThan("medium")`
  button{
    width: 80%;
    margin-left:4rem ;
    margin-top:1.5rem ;
  }
  `}
`;

export const MenuLogin = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-bottom: 18rem;

  position: absolute;
  width: 100%;
  bottom: 0;

  span {
    padding: 1rem;
  }
`;
