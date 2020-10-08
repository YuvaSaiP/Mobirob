import React from "react";
import styled from "styled-components";
import "../Products/hello.css";
export default function whyChooseUs() {
  return (
    <div>
      <Header className="test">Best Mobile & Tablet Repair Services</Header>
      <ContainerWrapper>
        <EachItem>
          <IconWrapper>
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/2621/2621317.svg"
              alt=""
              srcset=""
              width="70px"
            />
          </IconWrapper>
          <h3 style={{padding:'10px'}}>Original & Quality Parts</h3>
          <p>
            We have our own trained, professional & experienced technician.
            Which make you comfortable to hand over your gadget to our
            technician.
          </p>
        </EachItem>
        <EachItem>
          <IconWrapper>
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/2040/2040776.svg"
              alt=""
              srcset=""
              width="70px"
            />
          </IconWrapper>
          <h3 style={{padding:'10px'}}>Trusted By Many Customers</h3>
          <p>
            It provides opportunities for everyone to enjoy lowest and
            affordable price which helps save your money upto 50%. Hurry Up!
            Book Now
          </p>
        </EachItem>
        <EachItem>
          <IconWrapper>
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/3556/3556803.svg"
              alt=""
              srcset=""
              width="70px"
            />
          </IconWrapper>
          <h3 style={{padding:'10px'}}>Lowest & Affordable Pricing</h3>
          <p>
            We have our own trained, professional & experienced technician.
            Which make you comfortable to hand over your gadget to our
            technician.
          </p>
        </EachItem>
      </ContainerWrapper>
    </div>
  );
}

const ContainerWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  font-family: "Poppins", sans-serif;
  /* ali-content:center; */
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  /* align-con: center; */
`;

const EachItem = styled.div`
  background: white;
  padding: 30px 25px;
  display: flex;
  -webkit-box-shadow: 8px 12px 24px 5px rgba(204, 214, 246, 0.64);
  box-shadow: 8px 12px 24px -5px rgba(204, 214, 246, 0.64);
  border-radius: 10px;
  align-items: center;
  flex-direction: column;
`;
const Header = styled.h3`
  display: flex;
  text-align: center;
  justify-content: center;
`;

const IconWrapper = styled.div`
  padding: 10px;
`;
