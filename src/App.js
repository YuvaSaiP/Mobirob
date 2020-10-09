import React, { Component } from 'react'
import Navbar from "./components/navbar/Navbar";
import MobileBrands from "./components/Brands/mobileBrands"
import WhyChooseUs from "./components/WhyChooseUs/whyChooseUs"
import GlobalStyle from './styles/Global';
import ImageSlider from "./components/ImageSlider/imageSlider"

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <div>
      {/* <GlobalStyle>? fix your screen at affordable price */} 
        <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
        {/* <DemoCarousel /> */}
        <ImageSlider />
        <div className="site-wrapper">
        {/* <Hello /> */}
        <WhyChooseUs />
        <div style={{margin:"30px"}}></div>
        <MobileBrands />
        <div style={{margin:"30px"}}></div>
        </div>
        <GlobalStyle />
        </div>
    )
  }
}

export default App