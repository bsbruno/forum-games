import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ModalLoading = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(60, 60, 60, 0.8);
  overflow: auto;
`;

export const Content = styled.div`
  padding-top: 5rem;
`;

export const ProfileEdit = styled.div`
  form {
    width: 100% !important;
    input {
      width: 35rem;
    }
  }
  ${media.lessThan("medium")`
form{

  margin: 0 auto;
  width: 90% !important;
}

 `}
`;

export const AvatarInput = styled.div`
  padding: 1rem;

  margin-bottom: 1.2rem;

  img {
    width: 10rem;
    height: 10rem;
    border-radius: 5rem;
  }
  label {
    position: relative;

    width: 4.8rem;
    height: 4.8rem;
    input {
      display: none;
    }
    svg {
      color: white;
      font-size: 2.25rem;
      position: relative;
      left: -8px;
      bottom: 2px;
      cursor: pointer;
      :hover {
        opacity: 0.7;
      }
    }
  }
`;
