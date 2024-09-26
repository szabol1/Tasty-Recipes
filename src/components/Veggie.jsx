import React, {useEffect,useState} from 'react';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import styled from "styled-components";
import {Link} from "react-router-dom";
function Veggie(){
    const [veggie, setVeggie] = useState([]);


    useEffect(() => {
        getVeggie();
    },[]);

    const getVeggie = async () => {

        const check = localStorage.getItem('veggie');
        if (check) {
            setVeggie(JSON.parse(check));
        } else {
            const api = await fetch(
                'https://api.spoonacular.com/recipes/random?apiKey=b8c87daa94564b96a149baffaaebef0c&number=10&tags=vegetarian,veggie'
            );
            const data = await api.json();
            localStorage.setItem('veggie', JSON.stringify(data.recipes))
            setVeggie(data.recipes);
            console.log(data.recipes);
        }
    };
    return  <div>
        <Wrapper>
            <h3>Vegetarian Picks</h3>
            <Splide options={{
                perPage: 4,
                pagination: false,
                drag: 'free',
                gap: '1rem'

            }}>
                {veggie.map((recipe)=>{
                    return(
                        <SplideSlide key={recipe.id}>
                            <Link style={{ textDecoration: 'none' }} to={`/recipe/${recipe.id}`} key={recipe.id} className = "no-underline">
                            <Card>
                                <img src={recipe.image} alt={recipe.title}/>
                                <p>{recipe.title}</p>
                            </Card>
                            </Link>
                        </SplideSlide>
                    );
                })}
            </Splide>
        </Wrapper>
    </div>
}
const Wrapper = styled.div`
  padding: 0rem 9rem;
  justify-content: center;


`;

const Card = styled.div`
     width: 17rem;
     height: 23rem;
     position: relative;
     overflow: hidden;
     display:flex;
     flex-direction:column;
     box-shadow: 0px 2px 8px 0px grey;
     margin: 15px;
     background-color:white;
     
     img {
        width: 100%;
        height: 17rem;
        object-fit:cover;
        object-position: center;
    }
   
    p{
      margin: 1rem;
      text-align: left;
      font-size: 30px;
      font-weight: 500;
      padding:3px;
      font-family: frank rhul libre;
      height:6rem;
   
 }

 `


export default Veggie;