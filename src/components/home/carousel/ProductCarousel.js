/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components/macro';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { Lazy } from 'swiper/js/swiper.esm';
import { Container } from '../../shared/Containers';
import { BackIcon, ForwardIcon } from '../../../assets';
import carouselPms from '../../../assets/images/pms.png';
import carouselFnb from '../../../assets/images/fnb.png';
import carouselPop from '../../../assets/images/pop.png';
import carouselEntertainment from '../../../assets/images/entertainment.png';
import { theme } from '../../../styles/theme';
import Slide from './Slide';
import Label from '../../shared/Label';
import CustomDivider from '../../shared/CustomDivider';

const ProductCarouselContainer = styled.div`
  margin: 88px 32px;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    margin: 88px 24px;
  }
`;

const TitleContainer = styled(Container)`
  height: min-content;
  flex-direction: row;
  padding: 48px 130px;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    flex-flow: column;
    padding: 32px;
  }

  & > span {
    text-align: right;
    @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
      text-align: center;
    }
  }
`;

const CarouselContainer = styled(Container)`
  background-color: ${({ theme: { colors } }) => colors.lightGreyBackground};
  .swiper-wrapper {
    margin-bottom: 36px;
  }
  .swiper-container {
    width: -webkit-fill-available;
    width: -moz-available;
    width: fill-available;
    height: min-content;
    overflow: hidden;
    margin: 0px 32px;
    padding-bottom: 48px;
    @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
      margin: 0px;
    }
  }
  .swiper-slide {
    width: -webkit-fill-available !important;
    width: -moz-available !important;
    width: fill-available !important;
    height: min-content;
  }

  .swiper-pagination {
    bottom: 10px;
  }
`;

const RedBox = styled.div`
  position: absolute;
  display: flex;
  background-color: ${({ theme: { colors } }) => colors.red};
  max-width: 300px;
  height: 100px;
  left: 0;
`;

const ProductCarousel = () => {
  const params = {
    modules: [Lazy],
    lazy: true,
    initialSlide: 0,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0,
    loop: true,
    autoplay: false,
    renderPrevButton: () => <BackIcon className="swiper-button-prev" />,
    renderNextButton: () => <ForwardIcon className="swiper-button-next" />
  };

  return (
    <ProductCarouselContainer className="w-full">
      <CarouselContainer>
        <TitleContainer className="w-full">
          <Container>
            <Label fontFamily="light" size="medium" className="uppercase w-100">
              our
            </Label>
            <Label size="huge" fontFamily="bold" className="uppercase w-100" mobileStyle={{ marginBottom: 16 }}>
              products
            </Label>
          </Container>
          <Label className="line-height">rwl-carousel-description</Label>
        </TitleContainer>
        <CustomDivider
          style={{
            width: '85%',
            backgroundColor: theme.colors.grey,
            height: 0.5
          }}
        />
        <RedBox />
        <Slide
          title="QUADRO"
          subtitle="Entertainment"
          description="entertainment-description"
          image={<img src={carouselEntertainment} alt="entertainment" />}
        />
        {/* <Swiper {...params}>
          <Slide title="QUADRO PMS" subtitle="Property Management System" description="pms-description" image={<img src={carouselPms} alt="pms" />} />
          <Slide title="QUADRO FNB" subtitle="Food and Beverage Manager" description="fnb-description" image={<img src={carouselFnb} alt="fnb" />} />
          <Slide title="QUADRO POP" subtitle="Point of Sale System" description="pos-description" image={<img src={carouselPop} alt="pop" />} />
          <Slide
            title="QUADRO"
            subtitle="Entertainment"
            description="entertainment-description"
            image={<img src={carouselEntertainment} alt="entertainment" />}
          />
        </Swiper> */}
      </CarouselContainer>
    </ProductCarouselContainer>
  );
};

export default ProductCarousel;
