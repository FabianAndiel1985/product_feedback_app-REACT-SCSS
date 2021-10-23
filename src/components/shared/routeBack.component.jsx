import React from 'react'
import {useHistory} from 'react-router-dom'
import { MdOutlineArrowBackIos } from 'react-icons/md';
import * as RouteBackStyles from './routeBack.module.scss';

const RouteBack = () => {

    let history = useHistory();

    const routeBack = ()=>{
        history.goBack();
    }

    return (
        <p 
        className={RouteBackStyles.backLink}
        onClick={routeBack}
        > 
            <MdOutlineArrowBackIos/> Go Back
        </p> 
    )
}

export default RouteBack
