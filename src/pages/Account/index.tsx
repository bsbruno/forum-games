import React, { useState, useEffect } from "react";

import Menu from "../../components/Menu";
import * as S from "./styled";

import { useAuth } from "../../hooks/AuthContext";
import { Link } from "react-router-dom";
import CardPostShow from "../../components/CardPostShow";
import api from "../../services/api";

const Account: React.FC = () => {
  const { user } = useAuth();
  const [post, setPost] = useState([]);

  async function fetchPost() {
    const response = await api.get(`/post/${user.id}  `);
    setPost(response.data);
  }

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <S.Wrapper>
      <Menu userName={user.name} />
      <S.ProfileContainer>
        <img src={user.avatar_url} alt="" />

        <S.ProfileData>
          <p>{user.name} </p>
          <span>{user.nickname} </span>
        </S.ProfileData>
        <Link to="/edit">Editar Perfil</Link>
      </S.ProfileContainer>
      <S.Heading>
        <h1>Seus Posts</h1>
      </S.Heading>
      <S.PostUser>
        {post.map((intem, index) => (
          <CardPostShow
            key={index}
            text_post={intem.post_text}
            url_post={`/post/v1/${intem.id}`}
            deletePost={() => console.log()}
            trashVisible={true}
          />
        ))}
      </S.PostUser>
    </S.Wrapper>
  );
};

export default Account;
