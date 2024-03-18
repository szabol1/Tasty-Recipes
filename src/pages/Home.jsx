import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import Toolbar from "../components/Toolbar";
import Ingredients from "../components/Ingredients";
import React from 'react';

function Home(){
    return(
        <div>
            <Toolbar />
            <Veggie />
            <Popular />
            <Ingredients />
        </div>
    )
}
export default Home