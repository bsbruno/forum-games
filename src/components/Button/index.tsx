/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { ButtonHTMLAttributes } from "react";
import * as S from "./styled";

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  children: React.ReactNode;
  color?: "primary" | "secondary";
  icon?: JSX.Element;
  size?: "small" | "medium" | "large";
} & ButtonTypes;

const Button = ({
  children,
  color = "primary",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  icon,
  size,

  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper type="button" size={size} color={color} {...props}>
      {children}
    </S.Wrapper>
  );
};

export default Button;
