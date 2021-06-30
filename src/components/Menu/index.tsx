import React, { useState } from "react";
import * as S from "./styled";
import Button from "../Button";
import Logo from "../Logo/index";
import { FiMenu, FiUser } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, LinkProps } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";

export type MenuProps = {
  userName?: string;
};

export type LinkPropsMenu = {
  Select: boolean;
} & LinkProps;

export default function Menu({ userName }: MenuProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const { signOut } = useAuth();

  return (
    <S.Wrapper>
      <S.WrapperLogo to="/home">
        <Logo hiddenMobile={true} />
      </S.WrapperLogo>
      <S.MenuNavDesktop>
        <S.LinkMenu>
          <Link to="/">Explorar</Link>
        </S.LinkMenu>

        <S.LinkMenu>
          <Link to="/account">
            <FiUser />
            <span> Olá,{userName} </span>
          </Link>
          <Button onClick={signOut} size="small">
            Log Out
          </Button>
        </S.LinkMenu>
      </S.MenuNavDesktop>

      <S.MenuNavMobile>
        <S.Menulink to="/account">
          <FiUser />
        </S.Menulink>
        <S.MenulinkIcon role="button" onClick={() => setIsOpen(true)}>
          <FiMenu />
        </S.MenulinkIcon>
      </S.MenuNavMobile>

      <S.MenuFullMobile isOpen={isOpen}>
        <S.CloseMenu onClick={() => setIsOpen(false)}>
          {" "}
          <AiFillCloseCircle />
        </S.CloseMenu>

        <S.Menulink to="/">Home</S.Menulink>
        <S.Menulink to="/edit"> Editar Perfil</S.Menulink>
        <Button onClick={signOut}>Log Out</Button>
      </S.MenuFullMobile>
    </S.Wrapper>
  );
}
