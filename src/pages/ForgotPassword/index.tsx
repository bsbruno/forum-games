/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useCallback, useRef, useState } from "react";
import Logo from "../../components/Logo";
import { FormHandles } from "@unform/core";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { FiMail } from "react-icons/fi";
import { Form } from "@unform/web";
import * as S from "./stlyed";
import * as Yup from "yup";
import getValidationErros from "../../utils/getValidationErros";
import api from "../../services/api";
import Loading from "../../components/Loading";
import Toast from "../../components/Toast";

type SignUpFormData = {
  email: string;
};

const ForgotPassword = () => {
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(null);
  const [isError, setIsError] = useState(false);
  const [loadingToast, setLoadingToat] = useState(null);

  const handleSubmit = useCallback(async (data: SignUpFormData) => {
    try {
      setLoading(false);

      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("Email Obrigatorio")
          .email("Digite um E-mail valido"),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      setLoadingToat(false);
      await api.post("/password/forgot", { ...data });
      setLoadingToat(true);
      setIsError(false);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErros(err);
        formRef.current?.setErrors(errors);
      }
      setIsError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <S.Wrapper>
      <S.Background>
        <S.BackgroundText>
          <h1>Lorem </h1>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the <strong>standard dummy text ever</strong> since
            the 1500s, when an unknown printer took a galley of type and
            scrambled
          </p>
        </S.BackgroundText>
      </S.Background>
      <S.Content>
        {loadingToast === false && (
          <Toast message=" Enviamos um email para voce" />
        )}
        {isError === true && (
          <Toast message=" Error interno tente enviar novamente" />
        )}

        <Logo size="large" hiddenText={true} />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h2>Recuperação de Senha </h2>

          <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />

          {loading ? (
            <Loading />
          ) : (
            <Button color="secondary" type="submit">
              Recupera Senha
            </Button>
          )}
        </Form>
      </S.Content>
    </S.Wrapper>
  );
};

export default ForgotPassword;
