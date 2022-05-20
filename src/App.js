import React from "react";
import './index.css';
import Header from "./components/Header";
import Search from "./components/Search";

const App = () => {

    return (
        <div className=" min-w-screen max-w-screen min-h-screen max-h-auto bg-slate-100 flex flex-col items-center">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <Header />
            <Search />
        </div>
    )
}

export default App

