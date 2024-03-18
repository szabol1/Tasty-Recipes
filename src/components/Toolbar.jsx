import React, {useState} from 'react';
import styled from 'styled-components';
import logo from './SimplyRecipesLogoTransparent-07a297c54b2142ae9c079abb2f0fa639.png';
import {NavLink,useNavigate} from "react-router-dom";


const Toolbar = () => {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearchChange = (e) =>{//event object to set search query
        setSearchQuery(e.target.value);
    }
    const navigate = useNavigate();
    const handleSearch = () => {
        // Redirect to SearchResults component with the search query
        navigate(`/SearchResults/${searchQuery}`);
    };

    return (
        <Wrapper>
            <LogoWrapper>
                <img src={logo} alt="logo" />
            </LogoWrapper>
            <NavWrapper>
                <NavLinkStyled to ={'/'}>
                    <h4>Home</h4>
                </NavLinkStyled>
                <NavLinkStyled to ={'/cuisine/Italian'}>
                    <h4>Italian</h4>
                </NavLinkStyled>
                <NavLinkStyled to ={'/cuisine/American'}>
                    <h4>American</h4>
                </NavLinkStyled>
                <NavLinkStyled to ={'/cuisine/Thai'}>
                    <h4>Thai</h4>
                </NavLinkStyled>
                <NavLinkStyled to ={'/cuisine/Japanese'}>
                    <h4>Japanese</h4>
                </NavLinkStyled>
                <SearchWrapper>
                    <SearchInput
                        type="text"
                        placeholder="Search"
                        value = {searchQuery}
                        onChange = {handleSearchChange}
                    />

                    <SearchButton onClick={handleSearch}>Search</SearchButton>
                </SearchWrapper>
            </NavWrapper>
        </Wrapper>

    );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  border-bottom: 2px solid #fff000;

`;

const LogoWrapper = styled.div`
  margin-right: 2rem;
 
  

  img{
    height: 5rem;
    margin: 0;
    width: 100%;
  }
  
`;
const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color:#333;
  font-size: 15rem;
  margin-right: 5rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #fff000;
  }
`

const Card = styled.div`
  width: 18rem;
  height: 18rem;
  position: relative;
  overflow: hidden;
  display:flex;
  flex-direction:column;
  box-shadow: 0px 2px 8px 0px grey;
  margin: 10px;
  background-color:white;
`;
const CardWrapper = styled.div`
display:flex;
align_items: center;
`

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
`;

const SearchInput = styled.input`
  font-size: 1.5rem;
  padding: 0.5rem;
  border: none;
  border-bottom: 2px solid #333;
  margin-right: 1rem;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-bottom: 2px solid #fff000;
  }
`;

const SearchButton = styled.button`
  font-size: 1.5rem;
  padding: 0.5rem 1.5rem;
  background-color: #fff000;
  border: none;
  color: #fff;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #343865FF;
    border: 2px solid #343865FF;
  }
`;

export default Toolbar;
