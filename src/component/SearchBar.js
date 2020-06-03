import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearchLocation,
  faCookieBite,
} from '@fortawesome/free-solid-svg-icons';
import { size, color_lg, color_pr } from '../theme/index';
import { connect } from 'react-redux';
import { fetchingList, addTag, setSearch, applyFilter } from '../action';

const SearchBar = ({
  stores,
  fetchingList,
  addTag,
  setSearch,
  applyFilter,
  isNewSearch,
  tags,
}) => {
  const [input, setInput] = useState('');
  const [btnText, setText] = useState('Search');
  const handleInput = (e) => {
    const userInput = e.target.value;
    setInput(userInput);
  };

  useEffect(() => {
    if (tags.length === 0) {
      setSearch(true);
      setText('Search');
    } else {
      setSearch(false);
    }
  }, [isNewSearch]);

  const handleSubmit = () => {
    if (isNewSearch) {
      if (input === '') {
        fetchingList('Toronto');
        addTag('Toronto');
      } else {
        fetchingList(input);
        addTag(input);
      }
      setInput('');
      setSearch(false);
      setText('Add Tag');
    } else if (!isNewSearch) {
      if (input === '') {
        window.alert('Tags cannot be empty');
        fetchingList(tags[0]);
      } else {
        addTag(input);
      }
      setInput('');
    }
  };

  return (
    <Container role="presentation">
      <H1 role="heading" aria-level="1" aria-label="website name">
        <FontAwesomeIcon icon={faCookieBite} />
        FoodieHunt
      </H1>
      <Input
        type="text"
        placeholder="Start your search by entering the location then keep adding filters to the search bar."
        onChange={(e) => handleInput(e)}
        value={input}
        role="input filed"
        aria-label="search or add filter tags area"
        data-testid="search-input"
      />
      <Button
        type="submit"
        onClick={() => handleSubmit()}
        aria-label="Search button"
        aria-pressed="false"
        role="button"
        data-testid="search-button"
      >
        <FontAwesomeIcon icon={faSearchLocation} />
        {btnText}
      </Button>
    </Container>
  );
};

const mapDispatchToProps = (dispach) => {
  return {
    fetchingList: (city) => dispach(fetchingList(city)),
    addTag: (tag) => dispach(addTag(tag)),
    setSearch: (isNewSearch) => dispach(setSearch(isNewSearch)),
    applyFilter: (stores, tags) => dispach(applyFilter(stores, tags)),
  };
};

const mapStateToProps = (state) => {
  const tags = state.tags;
  const isNewSearch = state.newSearch;
  const stores = state.stores;
  return { tags, isNewSearch, stores };
};

//component styling
const Container = styled.div`
  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.37);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  padding: 15px 0;
  flex-flow: row wrap;

  @media (max-width: ${size.tablet}) {
    flex-direction: column;
    width: 100vw;
  }
`;

const Input = styled.input`
  border: 2px solid ${color_pr};
  overflow: auto;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  width: 50%;
  height: 5vh;

  &:hover {
    border: 2px solid ${color_lg};
  }

  &:active {
    border: 2px solid ${color_lg};
  }
  &:focus {
    border: 2px solid ${color_lg};
  }

  @media (max-width: ${size.tablet}) {
    width: 80%;
  }
`;

const Button = styled.button`
  width: 7vw;
  height: 5vh;
  border: 0;
  background: none;
  background-color: ${color_pr};
  border: 5px solid ${color_pr};
  color: white;
  text-align: center;
  text-decoration: none;

  float: right;
  border-radius: 5px;
  cursor: pointer;
  @media (max-width: ${size.laptopL}) {
    width: 15vw;
    margin-left: 2vmin;
  }
  @media (max-width: ${size.tablet}) {
    width: 40vw;
    margin: 5vmin 0;
  }
`;

const H1 = styled.h1`
  color: #fff;
  font-size: 5vmin;
`;

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
