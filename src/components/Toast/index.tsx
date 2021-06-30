import React, { useState } from "react";
import * as S from "./styled";

import Button from "../Button";

export type ToastProps = {
  message: string;
};

const Toast = ({ message }: ToastProps) => {
  const [open, setOpen] = useState(true);
  console.log(open);
  return (
    <S.Wrapper open={open}>
      <S.Modal>
        <S.ContentModal>
          <p> {message} </p>
        </S.ContentModal>
        <S.CloseModal onClick={() => setOpen(!open)}>
          <Button>Fechar</Button>
        </S.CloseModal>
      </S.Modal>
    </S.Wrapper>
  );
};

export default Toast;
