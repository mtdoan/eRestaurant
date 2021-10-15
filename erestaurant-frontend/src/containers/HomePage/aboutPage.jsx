import React from "react";
import { Navbar } from "../../components/navbar";
import styled from "styled-components";
import { deviceSize } from "../../components/responsive";
import TopSectionBackgroundImg from "../../images/TopSectionBackground.jpeg";
import { Fade } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import slideImg1 from "../../images/slideImg1.jpeg";
import slideImg2 from "../../images/slideImg2.jpeg";
import slideImg3 from "../../images/slideImg3.jpeg";
import slideImg4 from "../../images/slideImg4.jpeg";
import slideImg5 from "../../images/slideImg5.jpeg";

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopSectionContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${TopSectionBackgroundImg}) no-repeat;
  background-position: 0px 0px;
  background-size: cover;
  @media screen and (max-width: ${deviceSize.mobile}px) {height: 700px; background-position: 0px 0px;}
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(234, 125, 125, 0.8);
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

const InnerPageContainer = styled.div`
  // width: 70%;
  // min-height: 70vh;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const HeaderContainer = styled.div`
  // width: 70%;
  // min-height: 70vh;
  // flex-direction: column;
  width: 100%;
  height: 50%;
  background: url(${TopSectionBackgroundImg}) no-repeat;
  background-size: cover;
`;

const ContentContainer = styled.div`
  width: 85%;
  // min-height: 70vh;
  flex-direction: column;
  margin: 0 auto;
  //border: 2px solid black;
  padding-bottom: 30px;
`;

const InnerContentContainer = styled.div`
  width: 100%;
  display:flex;
  flex-direction: row;
  // align-items: center;
  justify-content:space-between;
  //border: 2px solid black;
`;

const TextContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 15px;
  text-align:justify;
  // border: 2px solid black;
`;

const SlidesContainer = styled.div`
  width: 45%;
  height: 100%;
  //border: 2px solid black;
`;

const FadeSlides = () => {
  const style = {
    textAlign: "center",
    background: "#ffffff",
    height:"100%",
    width: "100%"
  }

  const properties = {
    autoplay: true,
    indicators: true,
    duration: 3000,
  };

  return (
    <div className="slide-container">
      <Fade {...properties}>
        <div className="each-fade" style={style}>
          <img src={slideImg1} alt="img1"/>
          {/* First */}
        </div>
        <div className="each-fade" style={style}>
          <img src={slideImg2} alt="img2" />
          {/* Second */}
        </div>
        <div className="each-fade" style={style}>
          <img src={slideImg3} alt="img3" />
          {/* Third */}
        </div>
        <div className="each-fade" style={style}>
          <img src={slideImg4} alt="img4" />
          {/* Fourth */}
        </div>
        <div className="each-fade" style={style}>
          <img src={slideImg5} alt="img5" />
          {/* Fifth */}
        </div>
      </Fade>
    </div>
  );
};

export function AboutPage() {
    return (
    <PageWrapper>
      <TopSectionContainer>
        <BackgroundFilter>
            <Navbar useTransparent/>
            <TopSectionInnerContainer>
              <InnerPageContainer>
                <HeaderContainer></HeaderContainer>
                <ContentContainer>
                <h1>About Us</h1>
                <InnerContentContainer>
                    <TextContainer>
                      <p>
                      Here, the place of honor is reserved for the avant-garde engineer André Citroën was. The decoration of the restaurant gives pride of place to the history of its automobile factories and brings to life the memory of the workers who frequented the establishment for a long time.
                      </p>
                      <p>Regulars come today to taste the warm and friendly atmosphere of this true Parisian bistro. Conversations are easily linked, like friendships. There, we take the time to live and have fun, around traditional dishes and carefully selected wines.
                      </p>
                      <p>
                      Located in North Sydney, the Bistrot d'André welcomes you from Monday to Friday, all year round.
                      </p>
                    </TextContainer>

                    <SlidesContainer>
                      <FadeSlides></FadeSlides>
                    </SlidesContainer>
                  </InnerContentContainer>
                </ContentContainer>
              </InnerPageContainer>
            </TopSectionInnerContainer>
        </BackgroundFilter>
      </TopSectionContainer>
    </PageWrapper>
    );
}