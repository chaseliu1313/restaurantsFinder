import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { color_er, color_bg2, color_bg3, size, color_fr } from '../theme/index';
import {
  sortStore,
  deleteTag,
  clearTags,
  setSearch,
  applyFilter,
} from '../action/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faFunnelDollar } from '@fortawesome/free-solid-svg-icons';

const SearchTags = ({
  tags,
  stores,
  deleteTag,
  setSearch,
  applyFilter,
  sortStore,
}) => {
  const [currentTags, setTags] = useState([]);

  useEffect(() => {
    setTags(tags);

    //start a new search
    if (tags.length === 0) {
      setSearch(true);
    }
  }, [tags]);

  const handleFilter = () => {
    applyFilter(stores, tags);
  };

  const handleSorting = () => {
    sortStore(stores);
  };

  return (
    <Container role="presentation" aria-label="filter tags area">
      {currentTags.length === 0 ? (
        <P aria-label="page instructions">
          You can continue entering in the search bar to refine your search
          results.
        </P>
      ) : (
        currentTags.map((t, index) => (
          <Tags
            content={t}
            aria-label="filter tag"
            key={index}
            onDelete={deleteTag}
            tags={tags}
            setSearch={setSearch}
          />
        ))
      )}
      <div>
        <ApplyButton
          onClick={() => handleFilter()}
          aria-label="Apply Filter Button"
          aria-pressed="false"
          role="button"
        >
          <FontAwesomeIcon icon={faFilter} />
          Apply Filter
        </ApplyButton>
        <ApplyButton
          onClick={() => handleSorting()}
          aria-label="Apply Filter price from low to high button"
          aria-pressed="false"
          role="button"
        >
          <FontAwesomeIcon icon={faFunnelDollar} />
          Sort
        </ApplyButton>
      </div>
    </Container>
  );
};

const Tags = ({ content, onDelete, tags, setSearch }) => {
  const handleClick = () => {
    onDelete(content);
    if (tags.length === 0) {
      setSearch(true);
    }
  };

  return (
    <Tag>
      <Content>{content}</Content>
      <Button onClick={() => handleClick()}>X</Button>
    </Tag>
  );
};

const mapDispatchToProps = (dispach) => {
  return {
    clearTags: () => dispach(clearTags()),
    applyFilter: (stores, tags) => dispach(applyFilter(stores, tags)),
    deleteTag: (tag) => dispach(deleteTag(tag)),
    setSearch: (isNewSearch) => dispach(setSearch(isNewSearch)),
    sortStore: (stores) => dispach(sortStore(stores)),
  };
};

const mapStateToProps = (state) => {
  const tags = state.tags;
  const stores = state.stores;
  return { tags, stores };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchTags);

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${color_bg3};
  padding: 10px;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  width: 10vw;
  height: 5vh;
  background-color: ${color_bg2};
  border-radius: 20px 25px 25px 20px;
  display: flex;
  padding-left: 2em;
  justify-content: space-between;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  @media (max-width: ${size.tablet}) {
    width: 160px;
  }
  @media (max-width: ${size.laptopL}) {
    width: 200px;
  }
`;

const Content = styled.p`
  line-height: 5vh;
`;
const Button = styled.button`
  color: ${color_er};
  border-radius: 50%;
  width: 5vh;
  height: 5vh;
  background-color: ${color_bg2};
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const P = styled.p`
  font-size: 2vmin;
  color: #fff;
`;

const ApplyButton = styled.button`
  width: 10vw;
  height: 5vh;
  border: 0;
  background: none;
  background-color: ${color_fr};
  border: 5px solid ${color_fr};
  color: white;
  text-align: center;
  text-decoration: none;
  margin-left: 1vmin;
  float: right;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: ${size.laptopL}) {
    width: 15vw;
    margin-left: 2vmin;
  }

  @media (max-width: ${size.tablet}) {
    width: 40vw;
    margin: 3vmin;
  }
`;
