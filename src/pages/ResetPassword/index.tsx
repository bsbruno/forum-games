/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useCallback, useRef } from "react";
import Logo from "../../components/Logo";
import { FormHandles } from "@unform/core";
import Button from "../../components/Button";

import Input from "../../components/Input";
import { FiLock } from "react-icons/fi";
import { Form } from "@unform/web";
import * as S from "./stlyed";
import * as Yup from "yup";
import getValidationErros from "../../utils/getValidationErros";
import { useHistory, useLocation } from "react-router-dom";
import api from "../../services/api";

type SignUpFormData = {
  password: string;
  password_confirmation: string;
};

const ResetPassword = () => {
  const formRef = useRef<FormHandles>(null);
  const location = useLocation();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          password: Yup.string().min(6, "No minimo 6 digitos "),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Senhas estão diferente"
          ),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        const { password } = data;
        const token = location.search.replace("?token=", "");

        if (!token) {
          throw new Error();
        }

        await api.post("password/reset", {
          password,
          token,
        });
        history.push("/home");
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErros(err);
          formRef.current?.setErrors(errors);
        }
        console.log(err);
      }
    },
    [location.search]
  );

  return (
    <S.Wrapper>
      <S.Background>
        <S.BackgroundText>
          <h1>Lorem Ipsum</h1>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the <strong>standard dummy text ever</strong> since
            the 1500s, when an unknown printer took a galley of type and
            scrambled
          </p>
        </S.BackgroundText>
      </S.Background>
      <S.Content>
        <Logo size="large" hiddenText={true} />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h2>Altera Senha </h2>

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Input
            name="password_confirmation"
            type="password"
            placeholder="Confirme sua senha"
            icon={FiLock}
          />

          <Button color="secondary" type="submit">
            Altera Senha
          </Button>
        </Form>
      </S.Content>
    </S.Wrapper>
  );
};

export default ResetPassword;
