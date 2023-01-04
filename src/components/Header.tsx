import React from "react";
import styled from "styled-components";

const Header = (): JSX.Element => {
  return (
    <Container>
      <ImageContainer>
        <img src="/images/profile_photo.jpg" alt="profile_photo" />
      </ImageContainer>

      <HeaderIcons>
        <img src="/svg/community.svg" alt="community_icon" />
        <img src="/svg/status.svg" alt="status_icon" />
        <img src="/svg/new-chat.svg" alt="new-chat_icon" />
        <img src="/svg/menu.svg" alt="menu_icon" />
      </HeaderIcons>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 30vw;
  justify-content: space-between;
  height: 60px;
  padding: 10px;
  background: #ededed;
`;
const ImageContainer = styled.div`
  border-radius: 50px;
  height: 40px;
  width: 40px;

  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const HeaderIcons = styled.div`
  margin-right: 13px;
  width: 12.5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 26px;
    height: 26px;
  }
`;

export default Header;
