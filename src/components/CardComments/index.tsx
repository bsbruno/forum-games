import React from "react";
import * as S from "./styled";

import { FiHeart } from "react-icons/fi";
import { BsFillHeartFill } from "react-icons/bs";
import { useState } from "react";

export type CardProps = {
  profile_image?: string;
  nickName?: string;
  text_post: string;
  title?: string;
  name?: string;
};

const CardComments: React.FC<CardProps> = ({
  nickName,
  profile_image,
  text_post,
  name,
}) => {
  const [like, setLike] = useState(false);

  return (
    <S.Wrapper>
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
            <p> {text_post}</p>
          </S.PostText>
          <S.LikeButton>
            <S.ButtonLike onClick={() => setLike(!like)}>
              {like ? <BsFillHeartFill size={20} /> : <FiHeart size={20} />}
            </S.ButtonLike>
            <span>Curtidas</span>
          </S.LikeButton>
        </S.ContetPostText>
      </S.Content>
    </S.Wrapper>
  );
};

export default CardComments;
