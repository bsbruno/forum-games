import React, { useCallback, useState } from "react";
import Menu from "../../components/Menu";
import { useAuth } from "../../hooks/AuthContext";
import { useRouteMatch } from "react-router-dom";
import * as S from "./styled";
import { Container } from "../../components/Container";
import api from "../../services/api";
import { useEffect } from "react";
import CardShowContainer from "../../components/CardPostShow";
import CardComments from "../../components/CardComments";
import { FaRegCommentAlt, FaRegSadTear, FaWindowClose } from "react-icons/fa";
import { Form } from "@unform/web";
import Button from "../../components/Button";
import { FormHandles } from "@unform/core";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import Loading from "../../components/Loading";

type PostsProps = {
  id: string;
  id_user: string;
  post_text: string;
  user: {
    id: string;
    avatar_url?: string;
    name?: string;
    nickname?: string;
  };
};
type CommentsProps = {
  id: string;
  text_comments: string;

  user: {
    id: string;
    avatar_url?: string;
    name?: string;
    nickname?: string;
  };
};

const DashBoard: React.FC = () => {
  const { params } = useRouteMatch();
  const { user: userAuth } = useAuth();
  const history = useHistory();

  const [post, setPost] = useState({} as PostsProps);
  const [comments, setComments] = useState<CommentsProps[]>([]);
  const [comments_text, setComments_text] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [loadind, setLoading] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const handleDeletePost = useCallback(async () => {
    setLoading(true);
    await api.delete(`post/${params["id"]}`);
    history.push("/home");
    setLoading(false);
  }, []);

  const handleSubmit = useCallback(async () => {
    await api.post("/comments", {
      text_comments: comments_text,
      id_post: post.id,
    });
    setComments_text("");
    setOpenModal(false);
  }, [comments_text, post.id]);

  useEffect(() => {
    api
      .get(`/post/v1/${params["id"]}`)
      .then((response) => setPost(response.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(comments);

  useEffect(() => {
    api
      .get(`/comments/post_comments/${params["id"]}`)
      .then((response) => setComments(response.data))
      .catch((e) => console.log(e));
  }, [comments_text]);

  const handleComments = useCallback(
    ({ target }) => {
      setComments_text(target.value);
    },
    [comments_text]
  );

  return (
    <S.Wrapper>
      {loadind && (
        <S.ModalLoadin>
          <Loading />
        </S.ModalLoadin>
      )}
      <Menu userName={userAuth.name} />
      <Container>
        <S.Content>
          <div>
            {post && (
              <CardShowContainer
                key={post.id}
                text_post={post.post_text}
                name={post.user?.name}
                nickName={post.user?.nickname}
                profile_image={post.user?.avatar_url}
                deletePost={() => handleDeletePost()}
                trashVisible={true}
              />
            )}
          </div>
          <S.CommentPostButton>
            <button onClick={() => setOpenModal(true)}>
              {" "}
              <FaRegCommentAlt />{" "}
            </button>
          </S.CommentPostButton>
          <h1>Comentarios</h1>
          {!comments.length ? (
            <S.NotComments>
              {" "}
              <FaRegSadTear />
              <h3>
                Sem Comentarios Ainda <br /> seja o Primeiro :)
              </h3>
            </S.NotComments>
          ) : (
            <S.CommentContainer>
              {comments.map((intem, index) => (
                <CardComments
                  key={index}
                  text_post={intem.text_comments}
                  profile_image={intem.user.avatar_url}
                  nickName={intem.user.nickname}
                  name={intem.user.name}
                />
              ))}
            </S.CommentContainer>
          )}
        </S.Content>
      </Container>
      <S.CommentModal openModal={openModal}>
        <S.ModalContent comment={comments_text}>
          <S.ProfileContainer>
            <img src={userAuth.avatar_url} />
            <p> {userAuth.name} </p>
          </S.ProfileContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <textarea
              name="text_comments"
              id="text_comments"
              rows={2}
              cols={80}
              maxLength={140}
              value={comments_text}
              placeholder="Diga o que esta pensando"
              onChange={handleComments}
            ></textarea>

            <Button type="submit"> Comentar</Button>
          </Form>
          <S.CloseModal onClick={() => setOpenModal(false)}>
            <FaWindowClose />
          </S.CloseModal>
        </S.ModalContent>
      </S.CommentModal>
    </S.Wrapper>
  );
};

export default DashBoard;
