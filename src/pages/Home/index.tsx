import React, { useCallback, useState } from "react";
import Menu from "../../components/Menu";
import { useAuth } from "../../hooks/AuthContext";
import Button from "../../components/Button";
import * as S from "./styled";
import { Container } from "../../components/Container";
import api from "../../services/api";
import CardShowContainer from "../../components/CardPostShow";
import { useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { Form } from "@unform/web";
import Loading from "../../components/Loading";

type PostsProps = {
  id: string;
  id_user: string;
  post_text: string;
  user: {
    id: string;
    avatar?: string;
    name?: string;
    nickname?: string;
  };
};

const Home: React.FC = () => {
  const [open, setIsOpen] = useState(false);
  const { user } = useAuth();
  const history = useHistory();
  const total = 5;
  const [post, setPost] = useState<PostsProps[]>([]);
  const [postText, setPostText] = useState("");
  const [page, setPage] = useState([total]);
  const [loading, setLoading] = useState(false);
  const [infinite, setInfinite] = useState(true);
  console.log(page);

  async function handlePost() {
    setLoading(true);
    const response = await api.get("/post", {
      params: {
        limit: page,
      },
    });
    if (response && response.status === 204 && response.data < total) {
      setInfinite(false);
    }
    setPost(response.data);
    setLoading(false);
  }

  useEffect(() => {
    handlePost();
  }, [infinite, page]);

  useEffect(() => {
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const heigth = document.body.offsetHeight - window.innerHeight;
        if (scroll > heigth * 0.75) {
          setPage((pages) => [...pages, pages.length + 3]);
        }
      }
    }

    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);

    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [page, infinite, setInfinite]);

  const handlePostSubmit = useCallback(async () => {
    await api.post("/post", {
      post_text: postText,
    });
    setPostText(" ");
    setIsOpen(false);

    history.go(0);
  }, [post, postText]);

  return (
    <S.Wrapper>
      <Menu userName={user.name} />
      <Container>
        <S.PostContainer>
          <S.ProfileContainer>
            <img src={user.avatar_url} />
          </S.ProfileContainer>
          <S.PostInput onClick={() => setIsOpen(true)}>
            <textarea
              name="post"
              placeholder={`Diga o que está pensando,${user.name}`}
              rows={1}
              cols={60}
              maxLength={150}
              value={postText}
              readOnly={true}
            ></textarea>
          </S.PostInput>
        </S.PostContainer>

        <S.CardContainer>
          {post.map((post, index) => (
            <CardShowContainer
              key={index}
              url_post={`/post/v1/${post.id}`}
              nickName={post.user.nickname}
              text_post={post.post_text}
              profile_image={`https://app-post.s3.us-east-2.amazonaws.com/${post.user.avatar}`}
            />
          ))}
        </S.CardContainer>

        <S.ModalContent open={open}>
          <S.PosterTextModal>
            <S.ProfileModalContainer>
              <img src={user.avatar_url} />
              <span> {user.name} </span>
            </S.ProfileModalContainer>
            <S.PostModal>
              <Form onSubmit={handlePostSubmit}>
                <textarea
                  name=""
                  id=""
                  placeholder={`Diga o que está pensando,${user.name}`}
                  onChange={(e) => setPostText(e.target.value)}
                ></textarea>
                <Button type="submit">Postar</Button>
              </Form>
              <S.CloseModal onClick={() => setIsOpen(false)}>
                <AiFillCloseCircle size={30} />
              </S.CloseModal>
            </S.PostModal>
          </S.PosterTextModal>
        </S.ModalContent>
        {loading ? (
          <Loading />
        ) : (
          <S.LoadContent>
            <p>😅 Parece que não tem mais posts 😅</p>
          </S.LoadContent>
        )}
      </Container>
    </S.Wrapper>
  );
};

export default Home;
