import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { color_er, color_bg2, color_bg3, size } from '../theme/index';
import { addTag, deleteTag, clearTags, setSearch } from '../action/index';

const SearchTags = ({ tags, clearTags, deleteTag, setSearch }) => {
  const [currentTags, setTags] = useState([]);

  useEffect(() => {
    setTags(tags);

    //start a new search
    if (tags.length === 0) {
      setSearch(true);
    }
  }, [tags]);

  return (
    <Container>
      {currentTags.length === 0 ? (
        <P>
          You can continue entering in the search bar to refine your search
          results.
        </P>
      ) : (
        currentTags.map((t, index) => (
          <Tags content={t} key={index} onDelete={deleteTag} />
        ))
      )}
    </Container>
  );
};

const Tags = (props) => {
  const handleClick = () => {
    props.onDelete(props.content);
  };

  return (
    <Tag>
      <Content>{props.content}</Content>
      <Button onClick={() => handleClick()}>X</Button>
    </Tag>
  );
};

const mapDispatchToProps = (dispach) => {
  return {
    clearTags: () => dispach(clearTags()),

    deleteTag: (tag) => dispach(deleteTag(tag)),
    setSearch: (isNewSearch) => dispach(setSearch(isNewSearch)),
  };
};

const mapStateToProps = (state) => {
  const tags = state.tags;

  return { tags };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchTags);

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  background-color: ${color_bg3};
  padding: 10px 0;
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
