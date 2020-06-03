import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import {
  enterAni2,
  ModalEnterAni,
  ModalExitAni,
  shadow_light,
  shadow_hover,
  shadow_transit,
  color_bg,
  color_bg2,
  color_bg3,
  color_pr,
  getRandomPic,
  size,
} from '../theme/index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDollarSign,
  faStore,
  faThumbtack,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

//Store Card
const Store = ({ store, delay, setSelected, setShow }) => {
  const { name, area, postal_code, address, price, key } = store;

  const handleClick = () => {
    setSelected(store);
    setShow(true);
  };

  return (
    <Container delay={delay} onClick={() => handleClick()} area-lable="store">
      <IMG
        src={getRandomPic()}
        alt="store front image"
        aria-label="store front image"
      />
      <H2 aria-label="store name">{name}</H2>

      <P aria-label="store address">{address + area + ' ' + postal_code}</P>
      <P bottom="0" aria-label="store price range">
        {setPrice(price)}
      </P>
    </Container>
  );
};

//set the number of price icons
const setPrice = (price) => {
  const priceArr = [];
  for (let i = 0; i < price; i++) {
    priceArr.push(<FontAwesomeIcon icon={faDollarSign} />);
  }
  return priceArr;
};

//main Container
const Container = styled.div`
  height: 30vh;
  width: 100%;
  background-color: ${color_bg2};
  opacity: 0;
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
  border-radius: 10px;
  ${shadow_light}
  ${shadow_transit}
  &: hover {
    ${shadow_hover}
  }

  ${({ delay }) =>
    css`
      animation: ${enterAni2} 0.6s linear forwards;
      animation-delay: ${delay}s;
    `}
`;

const H2 = styled.h2`
  ${({ modal }) =>
    modal
      ? css`
          color: ${color_pr};
          font-size: 5vmin;
          margin-top: 2vmin;
        `
      : css`
          color: ${color_bg};
          font-size: 2.5vmin;
          margin-top: 40%;
        `}
`;
const P = styled.p`
  ${({ modal }) =>
    modal
      ? css`
          color: #fff;
          font-size: 3vmin;
          margin-top: 0.5em;
        `
      : css`
          color: ${color_bg};
          font-size: 1.5vmin;
          margin-top: 0.5em;
        `}

  ${({ bottom }) => (bottom ? `bottom: ${bottom};position:fixed` : null)}
`;

const IMG = styled.img`
  width: 100%;
  height: 40%;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  border-radius: 10px 10px 0 0;
`;

export const StoreModal = ({ store, showModal }) => {
  const [show, setshow] = useState(false);

  //hooks for showing modal
  useEffect(() => {
    setshow(showModal);

    return () => {
      setshow(false);
    };
  }, [store]);

  const handleClick = () => {
    setshow(false);
  };

  return (
    <Modal show={show} aria-label="store detail modal">
      <ModalHeader>
        <ModalCloseBtn
          onClick={() => handleClick()}
          aria-label="close button"
          aria-pressed="false"
          role="button"
        >
          &times;
        </ModalCloseBtn>
      </ModalHeader>
      {store ? (
        <ModalContent>
          <H2 modal aria-label="store name and price range" role="heading">
            <FontAwesomeIcon icon={faStore} />
            {' ' + store.name + ' '}
            {setPrice(store.price)}
          </H2>
          <H2 modal aria-label="store address">
            <FontAwesomeIcon icon={faThumbtack} />
            {' ' + store.address + ' ' + store.city}
          </H2>
          <H2
            modal
            aria-label="store state country and postal code"
            data-testid="modal_content"
          >
            {store.state + ' ' + store.country + ' ' + store.postal_code}
          </H2>
          <H2 modal aria-label="store contact number">
            <FontAwesomeIcon icon={faPhone} />
            {' ' + store.phone}
          </H2>
          <ModalButton
            aria-label="makde reservation button"
            aria-pressed="false"
            role="button"
            href={
              window.innerWidth < 1024
                ? store.reserve_url
                : store.mobile_reserve_url
            }
          >
            Make Reservation
          </ModalButton>
        </ModalContent>
      ) : (
        ''
      )}
    </Modal>
  );
};

//modail container
const Modal = styled.div`
  width: 60vw;
  height: 60vh;
  z-index: 2000;
  background-color: ${color_bg3};
  visibility: hidden;
  margin: 0 20%;
  position: fixed;
  top: 10vh;
  overflow: auto;
  border-radius: 15px;
  ${shadow_light}

  @media (max-width: ${size.laptopL}) {
    width: 80vw;
    margin: 0 10%;
    top: 15vh;
  }

  ${({ show }) =>
    show
      ? css`
          animation: ${ModalEnterAni} 0.6s linear forwards;
          visibility: visible;
        `
      : css`
          animation: ${ModalExitAni} 0.7s linear forwards;
        `}
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justfiy-content: center;
  align-items: center;
`;
const ModalHeader = styled.div`
  width: 100%;
  height: 10%;
  padding: 0.5em 1em;
`;
const ModalButton = styled.button`
  width: 30vw;
  height: 5vh;
  border: 0;
  background: none;
  background-color: ${color_pr};
  border: 5px solid ${color_pr};
  color: white;
  text-align: center;
  text-decoration: none;
  ${shadow_light}
  margin: 2em 0;

  border-radius: 5px;
  cursor: pointer;

  @media (max-width: ${size.tablet}) {
    width: 40vw;
    margin: 5vmin 0;
  }
`;
const ModalCloseBtn = styled.span`
  float: right;
  font-size: 5vmin;
  font-weight: bold;
  color: ${color_pr};
  cursor: pointer;
`;

export default Store;
