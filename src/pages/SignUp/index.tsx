/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useCallback, useRef } from "react";
import Logo from "../../components/Logo";
import { FormHandles } from "@unform/core";
import Button from "../../components/Button";
import { Link, useHistory } from "react-router-dom";
import Input from "../../components/Input";
import { FiMail, FiUser, FiLock, FiAward } from "react-icons/fi";
import { Form } from "@unform/web";
import * as S from "./stlyed";
import * as Yup from "yup";
import getValidationErros from "../../utils/getValidationErros";
import api from "../../services/api";

type SignUpFormData = {
  name: string;
  nickName: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required("Nome Obrigatorio"),
          nickname: Yup.string().required("Apelido Obrigatorio"),
          email: Yup.string()
            .required("Email Obrigatorio")
            .email("Digite um E-mail valido"),
          password: Yup.string().min(6, "No minimo 6 digitos "),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post("/users", data);
        history.push("/");
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErros(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [history]
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
          <h2>Crie Sua Conta </h2>
          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
          <Input
            name="nickname"
            icon={FiAward}
            type="text"
            placeholder="Apelido"
          />

          <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button color="secondary" type="submit">
            Criar Conta
          </Button>
          <span>
            Já tem uma conta ? <Link to="/">Logar</Link>
          </span>
        </Form>
      </S.Content>
    </S.Wrapper>
  );
};

export default SignUp;
