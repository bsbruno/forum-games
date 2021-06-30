/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useCallback, useRef, useState } from "react";
import Logo from "../../components/Logo";
import { FormHandles } from "@unform/core";
import Button from "../../components/Button";
import { Link, useHistory } from "react-router-dom";
import Input from "../../components/Input";
import { FiMail, FiLock } from "react-icons/fi";
import { Form } from "@unform/web";
import * as S from "./stlyed";
import * as Yup from "yup";
import getValidationErros from "../../utils/getValidationErros";

import { useAuth } from "../../hooks/AuthContext";
import Toast from "../../components/Toast";

type SignUpFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const history = useHistory();
  const [isError, setIsError] = useState(false);

  console.log(formRef.current);
  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required("Email Obrigatorio")
            .email("Digite um E-mail valido"),
          password: Yup.string().min(6, "No minimo 6 digitos "),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        setIsError(false);

        await signIn({ ...data });
        history.push("/home");
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErros(err);
          formRef.current?.setErrors(errors);
        }
        setIsError(true);
      }
    },
    [signIn, history]
  );

  return (
    <S.Wrapper>
      <S.Background>
        <S.BackgroundText>
          <h1>GAME FORUM</h1>
          <p>
            Uma plataforma feita por um game para games Ipsum has been the{" "}
            <strong>standard dummy text ever</strong> since the 1500s, when an
            unknown printer took a galley of type and scrambled
          </p>
        </S.BackgroundText>
      </S.Background>
      <S.Content>
        {isError && <Toast message="Senha/Login errado" />}
        <Logo size="large" hiddenText={true} />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h2>Login </h2>

          <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button color="secondary" type="submit">
            Logar
          </Button>
          <span
            style={{
              fontSize: "1.4rem",
              alignSelf: "flex-end",
            }}
          >
            Esqueceu sua senha?
            <Link
              style={{ opacity: 0.7, marginLeft: "0.5rem" }}
              to="/forgot-password"
            >
              Redefinir Senha
            </Link>
          </span>
          <span>
            Não tem uma conta ? <Link to="/signup">Criar</Link>
          </span>
        </Form>
      </S.Content>
    </S.Wrapper>
  );
};

export default SignIn;
