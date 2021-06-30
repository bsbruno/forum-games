import styled from "styled-components";
import media from "styled-media-query";
import * as S from "../../components/CardPostShow/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileContainer = styled.div`
  display: flex;
  padding: 1rem;
  margin-left: 10rem;
  margin-top: 2rem;

  ${media.lessThan("medium")`
  margin-left: 2rem;
  margin-top: 2rem;
  a{
    display:none
  }
  `}

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 4rem;
  }
  a {
    width: 10rem;
    height: 4rem;
    color: ${(props) => props.theme.colors.primary};
    :hover {
      opacity: 0.7;
    }
  }
`;

export const PostUser = styled.div`
  width: 100%;

  justify-content: center;
  padding-top: 5rem;
  display: flex;
  max-width: 108rem;
  margin: 0 auto;
  gap: 2rem;
  flex-wrap: wrap;
  ${S.Wrapper} {
    max-width: 100%;
  }
  ${media.lessThan("medium")`
  display: block;
  `}
`;

export const Heading = styled.div`
  display: flex;
  max-width: 108rem;
  margin: 0 auto;
  justify-content: center;
  color: ${(props) => props.theme.colors.white};
  ::before {
    content: "";
    border: 3px solid ${(props) => props.theme.colors.primary};
    margin-right: 0.8rem;
  }
  ${media.lessThan("medium")`
position:relative;
bottom:-20px;
  `}
`;

export const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2.25rem;
  p {
    font-size: 3rem;
    color: ${(props) => props.theme.colors.white};
    margin-bottom: 0.25rem;
  }
  span {
    color: ${(props) => props.theme.colors.gray};
  }
`;
