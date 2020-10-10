import styled from "styled-components";
import React from "react";
import "./hello.css";
export default function hello() {
  return (
    <div>
      <Header className="test">Available Products</Header>
    </div>
  );
}

const Header = styled.h1`
display:flex;
justify-content:center;
`;
