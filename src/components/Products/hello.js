import styled from "styled-components";
import React from "react";
import "./hello.css";
export default function hello() {
  return (
    <div>
      {/* <img src="http://mobitrone.com/images/slider/slide1.png" alt="" srcset="" width="100%"/> */}
      <Header className="test">Why Choose Us</Header>
    </div>
  );
}

const Header = styled.h1`
display:flex;
justify-content:center;
`;
