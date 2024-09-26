import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Toolbar from "../components/Toolbar";


// Issues with recipe was not imported properly into pages, and recipes initial state wasn't set to an array
function Recipes() {
    const [instructions, setInstructions] = useState([]); // Corrected the typo here
    const [recipe, setRecipe] = useState({});
    let params = useParams(); // Get id from URL

    useEffect(() => {
        const getRecipe = async (id) => {
            try {
                console.log(id);
                const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=b8c87daa94564b96a149baffaaebef0c`);
                const instructionsResponse = await fetch(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=b8c87daa94564b96a149baffaaebef0c`);
                const recipeData = await response.json();
                const instructionsData = await instructionsResponse.json();
                console.log(recipeData);
                console.log(instructionsData);
                setRecipe(recipeData);
                setInstructions(instructionsData);
            } catch (error) {
                console.error(error);
            }
        };

        getRecipe(params.id);
    }, [params.id]);

    return (
        <div>
        <Toolbar />
        <Container>
            <Title>{recipe.title}</Title>
            {recipe.image && <Image src={recipe.image} alt={recipe.title} />}
            <SectionTitle>Ingredients</SectionTitle>
            <IngredientsList>
                {recipe.extendedIngredients && recipe.extendedIngredients.map((ingredient) => (
                    <IngredientItem key={ingredient.id}>{ingredient.original}</IngredientItem>
                ))}
            </IngredientsList>
            <SectionTitle>Directions</SectionTitle>
            <DirectionsBox>
                {instructions.length > 0 && instructions[0].steps.map((step, index) => (
                    <DirectionStep key={index}>{step.step}</DirectionStep>
                ))}
            </DirectionsBox>
        </Container>
      
        </div>
    );
}

// Styled components
const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    margin-bottom: 5em;
`;

const Title = styled.h1`
    font-size: 2.5em;
    margin-bottom: 20px;
    text-align: center;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
    font-size: 2em;
    margin-top: 40px;
    margin-bottom: 20px;
`;

const IngredientsList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

const IngredientItem = styled.li`
    background-color: white;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    font-size: 18px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const DirectionsBox = styled.ol`
    background-color: white;
    padding: 20px;
    margin: 20px 0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    line-height: 1.6;
    font-size: 18px;
    list-style-type: decimal;
`;

const DirectionStep = styled.li`
    margin-bottom: 12px;
    margin: 10px;
`;

export default Recipes;