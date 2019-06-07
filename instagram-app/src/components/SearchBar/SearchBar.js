import React from "react";
//import "./SearchBar.scss";
import styled from "styled-components";

const SearchBarSCSS = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
  margin: 3% 0;
`;

const LeftSearch = styled.div`
  display: flex;
  align-items: center;
`;

const LeftSearchH1 = styled.h1`
  font-size: 1.5rem;
  margin: 0 2%;
`;

const Logo = styled.div`
  font-size: 2rem;
  padding: 0 10px 0 0;
`;

const Input = styled.input`
  text-align: center;
  height: 35%;
  background-color: rgb(248, 244, 244);
  border: 1px solid lightgray;
  border-radius: 5%;
`;

const RightSearch = styled.div`
  display: flex;
`;

const RightIcon = styled.div`
  font-size: 1.5rem;
  width: 40px;
`;

class SearchBar extends React.Component {
  render() {
    return (
      <SearchBarSCSS>
        <LeftSearch>
          <Logo>
            <i className="fab fa-instagram" />
          </Logo>
          <LeftSearchH1>Instagram</LeftSearchH1>
        </LeftSearch>
        <Input
          name="search"
          onChange={this.props.searchFilter}
          placeholder="Search"
          type="text"
          value={this.props.newSearch}
        />
        <RightSearch>
          <RightIcon>
            <i className="far fa-compass" />
          </RightIcon>
          <RightIcon>
            <i className="far fa-heart" />
          </RightIcon>
          <RightIcon>
            <i className="far fa-user" />
          </RightIcon>
        </RightSearch>
      </SearchBarSCSS>
    );
  }
}
export default SearchBar;
