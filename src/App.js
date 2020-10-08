import React, { Component } from 'react'
import Navbar from "./components/navbar/Navbar";
import Hello from "./components/Products/hello"
import WhyChooseUs from "./components/WhyChooseUs/whyChooseUs"
import GlobalStyle from './styles/Global';

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <>
      {/* <GlobalStyle> */}
        <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
        <div className="site-wrapper">
        {/* <Hello /> */}
        <WhyChooseUs />
        <GlobalStyle />
        </div>
      </>
    )
  }
}

export default App