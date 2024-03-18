import React from 'react';
import Home from "./Home"
import { Route, Routes} from "react-router-dom"
import Cuisine from "./Cuisine"
import Recipes from "./Recipes"
import Toolbar from "../components/Toolbar";
import SearchResults from "../components/SearchResults";


function Pages(){
    return(

            <Routes>
                <Route path ="/recipe/:id" element ={<Recipes/>}/>
                <Route path = "/" element={<Home/>}/>
                <Route path = "/cuisine/:type" element={<Cuisine/>}/>
                <Route path ="" element = {<Toolbar/>}/>
                <Route path = "/SearchResults/:query" element={<SearchResults/>}/>
            </Routes>

    )
}
export default Pages;
