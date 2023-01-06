import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Search from "./Search";

const Sidebar = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <Search />
    </Container>
  );
};

const Container = styled.div``;

export default Sidebar;
