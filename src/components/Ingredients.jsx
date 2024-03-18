import React  from 'react';
import styled from 'styled-components';
import background from './brooke-lark-08bOYnH_r_E-unsplash.jpg';


const Ingredients = () => {
  
    return (
        <Wrapper>
            <Wrapper id = "body">
                <NavWrapper>
                    <SearchWrapper>
                        <SearchInput type="text" placeholder="Search" />
                        <SearchButton>Search</SearchButton>
                    </SearchWrapper>
                </NavWrapper>
            </Wrapper>
            <text>
                Search Recipes
                <br></br>
                By Ingredients!
            </text>
        </Wrapper>
    );
};
//maybe do an image for the text instead?


const Wrapper = styled.div`
  border-top: 8px solid #fff000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 500px;
  
  text{
    justify-content: right;
    margin-right:12rem;
    font-size: 50px;
    font-family: "MS UI Gothic";
  }
  & #body{
    border-top:4px solid #fff000;
    background-image:url(${background});
    background-size:cover;
    align-content:center;
    width:50%;
  };
`;


const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  margin-left: 7.5rem;
  background-color:rgb(255,255,255,.5);
 
`;


const SearchWrapper = styled.div`

  border-radius: 5px;
  padding: 3rem;

`;

const SearchInput = styled.input`
  font-size: 1.5rem;
  padding: 0.5rem;
  border: none;
  border-bottom: 2px solid #333;
  transition: all 0.2s ease-in-out;
  border-bottom: 2px solid white;

  &:focus {
    outline: none;
    border-bottom: 2px solid white;
  }
`;

const SearchButton = styled.button`
  font-size: 1.5rem;
  padding: 0.5rem 1.5rem;
  background-color: #343865FF;
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

export default Ingredients;
