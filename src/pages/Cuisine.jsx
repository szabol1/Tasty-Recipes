import React, {useState, useEffect} from 'react';
import styled from "styled-components";

import {Link, useParams} from "react-router-dom";
import Toolbar from "../components/Toolbar";
function Cuisine(){

    const [cuisine, setCuisine] = useState([])
    let params = useParams();

    useEffect(() => {
    const getCuisine = async (name) => {
        const check = localStorage.getItem(params.type);
        if(check){ //if you get errors get rid of checker and just keep the try catch statement
            setCuisine(JSON.parse(check))
        } else{
            try{
                const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b8c87daa94564b96a149baffaaebef0c&cuisine=${name}&number=10`)
                const recipes = await response.json()
                console.log(recipes)
                setCuisine((recipes.results))
                localStorage.setItem(params.type, JSON.stringify(recipes.results))
            } catch(error){
                console.log(error)
            }
        }

        };

        getCuisine(params.type).then(r => console.log("testing: " + r))

    },[params.type]);

    return(
        <div>
            <Toolbar/>
            <h3>{params.type}</h3>
        <Grid>
            {cuisine.map((item) => {
                return(
                    <Link style={{ textDecoration: 'none' }} to={`/recipe/${item.id}`} key={item.id} className = "no-underline">
                    <Card key = {item.id}>
                        <img src = {item.image} alt ="food"/>
                        <h4 className={"no-underline"}>{item.title} </h4>
                    </Card>
                    </Link>
                )

            })}
        </Grid>
        </div>
    );

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






export default Cuisine