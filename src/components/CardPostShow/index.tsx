import React from "react";
import * as S from "./styled";

import { FiHeart } from "react-icons/fi";
import { BsFillHeartFill, BsTrash } from "react-icons/bs";
import { useState } from "react";
import { useAuth } from "../../hooks/AuthContext";

export type CardProps = {
  profile_image?: string;
  nickName?: string;
  text_post: string;
  title?: string;
  url_post?: string;
  name?: string;
  id_post?: string;
  deletePost?(): void;
  trashVisible?: boolean;
};

const CardShowContainer: React.FC<CardProps> = ({
  nickName,
  profile_image,
  text_post,
  url_post,
  name,

  trashVisible = false,
  deletePost,
}) => {
  const [like, setLike] = useState(false);
  const { user } = useAuth();

  return (
    <S.Wrapper to={url_post}>
      <S.Content>
        <S.ProfileImage>
          {profile_image ? (
            <img src={profile_image} alt="" />
          ) : (
            <S.None></S.None>
          )}
          <S.NameUser>
            <p>{name}</p>
            <span>{nickName}</span>
          </S.NameUser>
        </S.ProfileImage>

        <S.ContetPostText>
          <S.PostText>
            <p>{text_post}</p>
          </S.PostText>
          <S.LikeButton>
            <S.ButtonLike onClick={() => setLike(!like)}>
              {like ? <BsFillHeartFill size={20} /> : <FiHeart size={20} />}
            </S.ButtonLike>
            <span>Curtidas</span>
          </S.LikeButton>
        </S.ContetPostText>
        {user.nickname === nickName ? (
          <S.TrashButton
            trashVisible={trashVisible}
            role="button"
            onClick={deletePost}
          >
            <BsTrash size={25} />
          </S.TrashButton>
        ) : null}
      </S.Content>
    </S.Wrapper>
  );
};

export default CardShowContainer;
