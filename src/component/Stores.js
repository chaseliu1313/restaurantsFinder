import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchingList } from '../action';
import { connect } from 'react-redux';
import Loading from './Loading';
import Store, { StoreModal } from './Store';
import { size, enterAni2, color_bg } from '../theme/index';

//Store List
const Stores = ({ stores }) => {
  const [currentStores, setStore] = useState([]);
  //modal state
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setStore(stores);
  }, [stores]);

  return (
    <>
      <Loading />
      <Container>
        {currentStores.length === 0 ? (
          <H1 role="heading" aria-level="2" aria-label="search hint">
            Search your favorite restaurant now.
          </H1>
        ) : (
          currentStores.map((store, index) => (
            <Store
              store={store}
              key={store.id}
              delay={index * 0.1}
              setSelected={setSelected}
              setShow={setShow}
              aria-label="store card"
              role="presentation"
            />
          ))
        )}
      </Container>
      <StoreModal store={selected} showModal={show} key="key" />
    </>
  );
};

const mapStateToProps = (state) => {
  const stores = state.stores;

  return { stores };
};

const mapDispatchToProps = (dispach) => {
  return {
    fetchingList: () => dispach(fetchingList()),
  };
};
//outer container
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 10px;
  row-gap: 15px;
  justify-items: center;
  align-items: center;
  align-content: start;
  justify-content: center;
  padding: 5vh 5vw;
  @media (max-width: ${size.laptopL}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: ${size.tablet}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: ${size.mobileL}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const H1 = styled.h1`
  color: ${color_bg};
  font-size: 5vmin;
  grid-column-start: 2;
  grid-column-end: 5;

  @media (max-width: ${size.laptopL}) {
    grid-column-start: 2;
    grid-column-end: 4;
  }
  @media (max-width: ${size.tablet}) {
    grid-column-start: 1;
    grid-column-end: 4;
  }
  @media (max-width: ${size.mobileL}) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  animation: ${enterAni2} 1.5s linear forwards;
`;

export default connect(mapStateToProps, mapDispatchToProps)(Stores);
