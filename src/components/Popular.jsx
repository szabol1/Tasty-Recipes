import React, {useEffect,useState} from 'react';
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import {Link} from "react-router-dom";


function Popular(){

    const [popular, setPopular] = useState([]);


    useEffect(() => {
        getPopular();
    },[]);

    const getPopular = async () => {

        const check = localStorage.getItem('popular');
        if (check) {
            setPopular(JSON.parse(check));
        } else {
            const api = await fetch(
                'https://api.spoonacular.com/recipes/random?apiKey=b8c87daa94564b96a149baffaaebef0c&number=10'
            );
            const data = await api.json();
            localStorage.setItem('popular', JSON.stringify(data.recipes))
            setPopular(data.recipes);
            console.log(data.recipes);
        }
    };

    return (
        <div>
            <div className={"toolbar"}>

            </div>
             <Wrapper>
                 <h3>Popular Picks</h3>
                    <Splide options={{
                        perPage: 4,
                        pagination: false,
                        drag: 'free',
                        gap: "1rem "
                    }}>
                        {popular.map((recipe)=>{
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

    );
}
const Wrapper = styled.div`
  padding: 0rem 9rem 7rem;

`;

 const Card = styled.div`
     width: 17rem;
     height: 23rem;
     position: relative;
     overflow: hidden;
     display:flex;
     flex-direction:column;
     box-shadow: 0px 2px 8px 0px grey;
     margin: 10px;
     background-color: white;

 img {
    
     width: 17rem;
     height: 16rem;
     object-fit:cover;
     
     
 }
 p{
   margin: 1rem;
   text-align: left;
   font-size: 30px;
   font-weight: 400;
   padding: 3px;
   font-family: frank rhul libre;
   height:6rem;
 }
 `;

export default Popular