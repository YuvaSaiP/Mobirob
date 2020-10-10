import React from "react";
import styled from "styled-components";
import slide1 from "../../assets/Banners/slide3.png";
const imageSlider = () => {
  return (
    <SlidesWrapper>
      <EachSlide src={slide1} />
    </SlidesWrapper>
  );
};

const SlidesWrapper = styled.div`
  padding-top: 4rem;
`;

const EachSlide = styled.img`
  width: 100%;
  height: 100%;
`;

export default imageSlider;
