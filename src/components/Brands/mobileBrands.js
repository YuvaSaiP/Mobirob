import React from "react";
import styled from "styled-components";
import oneplus from "../../assets/brands/oneplus.png";
import apple from "../../assets/brands/apple-compressed.jpg";
import samsung from "../../assets/brands/samsung.png";
import vivo from "../../assets/brands/vivo.png";
import google from "../../assets/brands/google.png";
import oppo from "../../assets/brands/oppo.png";
import huawei from "../../assets/brands/huawei.png";
import moto from "../../assets/brands/moto.png";
import mi from "../../assets/brands/mi.png";
import realme from "../../assets/brands/realme.png";
import lenovo from "../../assets/brands/lenovo.png";
import asus from "../../assets/brands/asus.png";
export default function mobileBrands() {
  return (
    <div>
    <Header>Top Repaired Brands</Header>
      <BrandsWrapper>
        <EachBrand>
          <Image src={apple} alt="" srcset="" width="90px" />
        </EachBrand>
        <EachBrand>
          <Image src={oneplus} alt="" srcset="" width="100px" />
        </EachBrand>
        <EachBrand>
          <Image src={google} alt="" srcset="" width="60px" />
        </EachBrand>
        <EachBrand>
          <Image src={realme} alt="" srcset="" width="110px" />
        </EachBrand>
        <EachBrand>
          <Image src={mi} alt="" srcset="" width="55px" />
        </EachBrand>
        <EachBrand>
          <Image src={samsung} alt="" srcset="" width="90px" />
        </EachBrand>
        <EachBrand>
          <Image src={vivo} alt="" srcset="" width="90px" />
        </EachBrand>
        
        <EachBrand>
          <Image src={moto} alt="" srcset="" width="100px" />
        </EachBrand>
        <EachBrand>
          <Image src={huawei} alt="" srcset="" width="110px" />
        </EachBrand>
        <EachBrand>
          <Image src={oppo} alt="" srcset="" width="90px" />
        </EachBrand>
        <EachBrand>
          <Image src={lenovo} alt="" srcset="" width="110px" />
        </EachBrand>
        <EachBrand>
          <Image src={asus} alt="" srcset="" width="110px" />
        </EachBrand>
      </BrandsWrapper>
    </div>
  );
}
const Header = styled.h2`
  display: flex;
  font-size:1.8rem;
  text-align: center;
  font-family:"Poppins",sans-serif;
  /* padding:16px; */
  margin:25px 0px 14px 0px;
  justify-content: center;
  @media screen and (max-width: 480px) {
    font-size:1.7rem;
  }
`;
const BrandsWrapper = styled.div`
  display: grid;
  grid-gap: 8px;
  margin: 0 auto;
  max-width: 1080px;
  /* ali-content:center; */
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-template-rows: repeat(2, 150px);
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(130px, 0.5fr));
    grid-template-rows: repeat(4, 150px);
    grid-gap: 0px;
  }
`;

const EachBrand = styled.div`
  background: white;
  padding: 35px 50px;
  display: flex;

  /*  -webkit-box-shadow: 8px 12px 24px 5px rgba(204, 214, 246, 0.64);
  box-shadow: 8px 12px 24px -5px rgba(204, 214, 246, 0.64); */
  /* border-radius: 6px; */
  border: 1px solid rgba(204, 214, 246, 0.2);
  align-items: center;
  flex-direction: column;
`;

const Image = styled.img`
  /* width: 100px; */
  margin: auto 0;
  /* border-radius:50%; */
`;
