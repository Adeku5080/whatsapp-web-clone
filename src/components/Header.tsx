import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <ImageContainer>
        <img
          src="/images/profile_photo.jpg"
          alt="profile_photo"
          width={30}
          height={30}
        />
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

const Container = styled.div``;
const ImageContainer = styled.div``;

const HeaderIcons = styled.div``;

export default Header;
