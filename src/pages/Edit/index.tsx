import React, { ChangeEvent, useRef, useState } from "react";
import api from "../../services/api";
import * as S from "./styled";
import { useAuth } from "../../hooks/AuthContext";
import { Container } from "../../components/Container";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Form } from "@unform/web";
import Menu from "../../components/Menu";
import { useHistory } from "react-router-dom";
import { FiCamera } from "react-icons/fi";
import { useCallback } from "react";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import getValidationErros from "../../utils/getValidationErros";
import Loading from "../../components/Loading";

type ProfileFormData = {
  name: string;
  email: string;
  old_password: string;
  password: string;
  password_confirmation: string;
  nickname: string;
};

const Edit: React.FC = () => {
  const { user, updateUser, signOut } = useAuth();
  const [loading, setLoading] = useState(null);

  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleAvatarChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      setLoading(true);
      const data = new FormData();
      data.append("avatar", e.target.files[0]);
      const { data: userPhoto } = await api.put("users/avatar", data);

      await updateUser(userPhoto);
      signOut();
      setLoading(false);
      history.push("/home");
    },
    [updateUser]
  );

  const handleSubmit = useCallback(
    async (data: ProfileFormData) => {
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required("Nome Obrigatorio"),
          nickname: Yup.string().required("Apelido Obrigatorio"),
          email: Yup.string().required().email("Digite um E-mail Valido"),
          old_password: Yup.string(),
          password: Yup.string().when("old_password", {
            is: (val) => !!val.length,
            then: Yup.string().required("Campo Obrigatorio"),
            otherwise: Yup.string(),
          }),
          password_confirmation: Yup.string()
            .when("old_password", {
              is: (val) => !!val.length,
              then: Yup.string().required("Campo Obrigatorio"),
              otherwise: Yup.string(),
            })
            .oneOf([Yup.ref("password"), null], "Senhas estão diferentes"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        const {
          name,
          nickname,
          email,
          password,
          old_password,
          password_confirmation,
        } = data;
        setLoading(true);
        const formData = {
          name,
          email,
          nickname,
          ...(old_password
            ? { old_password, password, password_confirmation }
            : {}),
        };
        const { data: userUpdate } = await api.post("/profile", formData);
        updateUser(userUpdate);
        setLoading(false);
        signOut();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErros(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [history, updateUser]
  );

  return (
    <S.Wrapper>
      {loading && (
        <S.ModalLoading>
          <Loading />
        </S.ModalLoading>
      )}
      <Menu userName={user.name} />
      <Container>
        <S.Content>
          <S.AvatarInput>
            {loading ? <Loading /> : <img src={user.avatar_url} alt="" />}
            <label htmlFor="avatar">
              <FiCamera />
              <input type="file" id="avatar" onChange={handleAvatarChange} />
            </label>
          </S.AvatarInput>
          <S.ProfileEdit>
            <Form
              initialData={{
                name: user.name,
                email: user.email,
                nickname: user.nickname,
              }}
              onSubmit={handleSubmit}
              ref={formRef}
            >
              <Input name="name" type="text" placeholder="Name" />
              <Input name="nickname" type="text" placeholder="Apelido" />
              <Input name="email" type="email" placeholder="E-mail" />
              <Input name="password" type="password" placeholder="Nova Senha" />
              <Input
                name="old_password"
                type="password"
                placeholder="Senha Atual "
              />
              <Input
                name="password_confirmation"
                type="password"
                placeholder="Confirma Senha "
              />
              <Button style={{ width: "100%" }} type="submit">
                {" "}
                Salvar{" "}
              </Button>
            </Form>
          </S.ProfileEdit>
        </S.Content>
      </Container>
    </S.Wrapper>
  );
};

export default Edit;
