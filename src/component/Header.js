import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import SearchBar from './SearchBar';
import SearchTags from './SeachTags';
import { enterAni } from '../theme/index';

const Header = () => {
  const [mount, setMount] = useState(false);

  //trigger annimation
  useEffect(() => {
    setMount(true);
    return () => {
      setMount(false);
    };
  }, []);

  return (
    <Container mount={mount}>
      <SearchBar />

      <SearchTags />
    </Container>
  );
};

//component styling
const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #071e3d;
  ${({ mount }) =>
    mount
      ? css`
          animation: ${enterAni} 1s linear forwards;
        `
      : null}
`;

export default Header;
