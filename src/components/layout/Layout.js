import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { TopUpIcon } from '../../assets';
import Footer from './footer/Footer';
import DesktopHeader from './header/DesktopHeader';

const LayoutContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const PageContent = styled.div`
  position: relative;
`;

const MainContent = styled.div`
  height: 100%;
  width: 100%;
`;

const GoTopButton = styled.div`
  display: ${({ isSticky }) => (isSticky ? 'block' : 'none')};
  position: fixed;
  bottom: 10px;
  right: 10px;
  line-height: 0;
  opacity: 0.8;
  cursor: pointer;
  z-index: 100;

  transition: all 0.5s ease;
  animation: smoothOut 1s;

  @keyframes smoothOut {
    0% {
      transform: translateY(142px);
    }

    100% {
      transform: translateY(0px);
    }
  }

  &:hover {
    opacity: 1;
    text-shadow: 0 0 5px #ffffff;
  }
`;

const Layout = ({ children }) => {
  const [isSticky, setIsSticky] = useState(false);

  const handleIsSticky = () => {
    const scrollTop = window.scrollY;
    if (scrollTop >= 250) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleIsSticky);
    return () => {
      window.removeEventListener('scroll', handleIsSticky);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <LayoutContainer>
      <PageContent>
        <DesktopHeader />
        <MainContent>{children}</MainContent>
      </PageContent>
      <Footer />
      <GoTopButton isSticky={isSticky} onClick={goToTop}>
        <TopUpIcon />
      </GoTopButton>
    </LayoutContainer>
  );
};

export default Layout;
