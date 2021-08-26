import React from 'react'
import Main from './components/main/main'
import Sidebar from './components/sidebar/sidebar';
import * as suggestionStyles from './suggestions.module.scss';
import Menubar from './components/menubar/menubar';
import Data from "../../assets/data.json";

const Suggestions = () => {
    const {productRequests} = Data;

    return (
    <>
        <Sidebar data={productRequests}/>
        <Menubar data={productRequests.length}/>
        <Main data={productRequests}/>
    </>

        
    )
}

export default Suggestions;
