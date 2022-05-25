import React from "react";
import './index.css';
import Header from "./components/Header";
import Search from "./components/Search";
import MainPageRecipes from "./components/MainPageRecipes";
import RecipeContainer from "./components/RecipeContainer";


const App = () => {

    return (
        <div className=" min-w-screen max-w-screen min-h-screen max-h-auto bg-slate-100 flex flex-col items-center">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <link href='https://fonts.googleapis.com/css?family=Rock+Salt:400' rel='stylesheet' type='text/css' />

            <Header />
            <Search />
            <MainPageRecipes />
            <RecipeContainer />
            
        </div>
    )
}

export default App

