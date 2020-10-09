import React from "react";
import styled from "styled-components";
import slide1 from "../../assets/Banners/slide3.png";
const imageSlider = () => {
  return (
    <SlidesWrapper>
      {/* <img src="http://mobitrone.com/images/slider/slide3.png" alt="" srcset="" width="100%"/> */}
      <EachSlide src={slide1} />
      {/* <EachSlide /> */}
    </SlidesWrapper>
  );
};

const SlidesWrapper = styled.div`
  padding-top: 4rem;
`;

const EachSlide = styled.img`
  width: 100%;
  height:100%;
`;

export default imageSlider;

// import React, { Component } from "react";
// // import ReactDOM from "react-dom";
// import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
// import slide1 from "../../assets/Banners/slide3.png";

// class DemoCarousel extends Component {
//   render() {
//     return (
//       <Carousel autoPlay="true" stopOnHover="false" showThumbs='true'>
//         <div>
//           <img src={slide1} alt="" />
//           {/* <p className="legend">Legend 1</p> */}
//         </div>
//         <div>
//           <img src={slide1} alt="" />
//           {/* <p className="legend">Legend 2</p> */}
//         </div>
//         <div>
//           <img src={slide1} alt="" />
//           {/* <p className="legend">Legend 3</p> */}
//         </div>
//       </Carousel>
//     );
//   }
// }

// export default DemoCarousel;
// // ReactDOM.render(<DemoCarousel />, document.querySelector(".demo-carousel"));
