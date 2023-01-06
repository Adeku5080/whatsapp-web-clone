import React from "react";
import styled from "styled-components";

const Search = (): JSX.Element => {
  return (
    <Container>
      <input name="search" placeholder="Search or start new chat" />
      <img src="/svg/search-icon.svg" alt="search-icon" />
      <FilterChat>
        {" "}
        <img src="/svg/filter-chat-icon.svg" alt="filer-chat" />
      </FilterChat>
    </Container>
  );
};

const Container = styled.div`
// border:1px solid red;
width:30vw;
height:50px;
padding:7px 10px
border:1px solid red;
background: #ededed;
 input{
  border:none;
  width:87%;
  height:90%;
  margin-left: 10px;
  border-radius:18px;
  padding-left:70px;
 }
input::placeholder{
  // border:1px solid green;
  width:70%;
  font-size:14px;
}
 img{
  position:absolute;
  left:20px;
  top:70px;
 }

`;

const FilterChat = styled.div`
position:absolute;
top:5px;
left:355px;
 
img{
  // border:1px solid red;
}
`;
export default Search;
