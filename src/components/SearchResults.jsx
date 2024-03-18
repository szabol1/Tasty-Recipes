import React, { useState, useEffect } from 'react';
import {Link, useLocation, useParams} from "react-router-dom";
import styled from "styled-components";
import Toolbar from "./Toolbar";
const SearchResults = () => {
    const [searchResults, setSearchResults] = useState([]);
    const location = useLocation();
    const searchQuery = location.pathname.split('/')[2];//just had to pass the query result in the url

    useEffect(()=>{
        const handleSearch = async () => {
            try {
                const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b8c87daa94564b96a149baffaaebef0c&query=${searchQuery}&number=10`)
                if (response.ok) {
                    const data = await response.json()
                    setSearchResults(data.results)
                } else {
                    console.error("fetch failed")
                }
            } catch (error) {
                console.error("error:", error)
            }
        };
        if(searchQuery){
            handleSearch()
    }
    }, [searchQuery]);

        return (
            <div>
                <Toolbar/>
                <h2>Search Results for {searchQuery}: </h2>
                <div>
                    <Grid>
                        {searchResults.map((result) => (
                            <Link style={{ textDecoration: 'none' }} to={`/recipe/${result.id}`} key={result.id} className = "no-underline">
                            <Card key={result.id}>
                                <img src={result.image} alt="food"/>
                                <h4>{result.title}</h4>
                            </Card>
                            </Link>
                        ))}
                    </Grid>
                </div>
            </div>
        )
    }

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 1rem;
  justify-content: center; /* Center the cards horizontally */
  align-items: center; /* Center the cards vertically */
  margin-left:2.7rem;
  margin-top: 3rem;
`;
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

  img {
    width: 100%;
    height: 15rem;
    object-fit:cover;
    object-position: center;
  }
  a {
    text-decoration: none;
  }

  h4{
    margin: 1rem;
    position:relative;
    text-align: left;
    font-size: 25px;
    font-weight: 500;
    font-family: frank rhul libre;
    height:3rem;
  }
  h3{
    margin-left: 5rem;
  }
  .no-underline {
    text-decoration: none;
  }
`

export default SearchResults;