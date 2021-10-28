import { React } from "react";
import { Navbar } from "../../components/navbar";
import styled from "styled-components";
import TopSectionBackgroundImg from "../../images/TopSectionBackground.jpeg";
import { Fade } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import slideImg1 from "../../images/slideImg1.jpeg";
import slideImg2 from "../../images/slideImg2.jpeg";
import slideImg3 from "../../images/slideImg3.jpeg";
import slideImg4 from "../../images/slideImg4.jpeg";
import slideImg5 from "../../images/slideImg5.jpeg";
import {
  PageWrapper, TopSectionContainer, BackgroundFilter, TopSectionInnerContainer, InnerPageContainer, Heading
} from "../../components/commonStyle/commonStyle";

const HeaderContainer = styled.div`
  width: 100%;
  height: 50%;
  background: url(${TopSectionBackgroundImg}) no-repeat;
  background-size: cover;
`;

const ContentContainer = styled.div`
  width: 85%;
  flex-direction: column;
  margin: 0 auto;
  padding-bottom: 30px;
`;

const InnerContentContainer = styled.div`
  width: 100%;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 15px;
  text-align:justify;
`;

const SlidesContainer = styled.div`
  width: 45%;
  height: 100%;
`;

const FadeSlides = () => {
  const style = {
    textAlign: "center",
    background: "#ffffff",
    height: "100%",
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
          <img src={slideImg1} alt="img1" />
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
          <Navbar useTransparent />
          <TopSectionInnerContainer>
            <InnerPageContainer>
              <HeaderContainer></HeaderContainer>
              <ContentContainer>
                <Heading>About Us</Heading>
                <InnerContentContainer>
                  <TextContainer>
                    <p style={{ fontSize: "0.9rem" }}>
                      Here, the place of honor is reserved for the avant-garde engineer André Citroën was. The decoration of the restaurant gives pride of place to the history of its automobile factories and brings to life the memory of the workers who frequented the establishment for a long time.
                    </p>
                    <p style={{ fontSize: "0.9rem" }}>
                      Regulars come today to taste the warm and friendly atmosphere of this true Parisian bistro. Conversations are easily linked, like friendships. There, we take the time to live and have fun, around traditional dishes and carefully selected wines.
                    </p>
                    <p style={{ fontSize: "0.9rem" }}>
                      Located in North Sydney, the Bistrot d'André welcomes you from Monday to Sunday, all year round.
                    </p>
                  </TextContainer>
                  <SlidesContainer>
                    <FadeSlides/>
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