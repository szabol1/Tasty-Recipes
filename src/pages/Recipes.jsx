import {Link, useParams} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import Toolbar from "../components/Toolbar";

//issues with recipe was not imported properly into pages, and recipes intial state wasnt set to an array
function Recipes(){

    const[recipe, setRecipe] = useState([]);
    let params = useParams();//get id from url

    useEffect(()=>{
        const getRecipe = async (id) =>{
            try{
                console.log(id)
                const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=b8c87daa94564b96a149baffaaebef0c`)
                const recipe = await response.json();
                console.log(recipe)
                setRecipe(recipe)
            } catch(error){
                console.log(error)
            }

        }

        getRecipe(params.id).then(r => console.log(r))//okay so this is working but its undefined currently so fetch call?


    },[params.id]);


    return (
        <div>
            <Toolbar />
                    <div>
                        <h4>{recipe.title}</h4>
                        <img src={recipe.image} alt="food" />
                    </div>
                );
        </div>
    );

}
export default Recipes;
