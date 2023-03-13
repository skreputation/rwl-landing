import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { CrossIcon } from '../../assets';
import CustomButton from './CustomButton';
import Loader from './Loader';

const Container = styled.div`
  background: #fff;
  transition: transform 1s linear;
  transform: ${({ open }) => (open ? 'translateX(0px)' : 'translateX(-200%)')};
  height: 100%;
  position: fixed;
  z-index: 100;
  width: 50%;
  top: 0px;
  button {
    right: 24px;
  }
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    width: 100%;
    button {
      right: 12px;
    }
  }
`;

const IFrameSider = ({ open, onClose, src }) => {
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setReady(true);
  //   }, 3000);
  // }, []);

  const onLoad = () => {
    setLoading(false);
  };

  return (
    <Container open={open}>
      <CustomButton onClick={onClose} background="transparent" buttonStyle={{ position: 'fixed', zIndex: 150 }}>
        <CrossIcon style={{ transform: 'scale(1.5)' }} />
      </CustomButton>
      {/* {!ready ? <Loader /> : null} */}
      {loading ? <Loader /> : null}
      <iframe title="contact-us" src={src} width="100%" height="100%" style={{ border: 0 }} onLoad={onLoad} />
    </Container>
  );
};

export default IFrameSider;
