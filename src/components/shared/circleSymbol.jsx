import React from 'react'
import * as circleSymbolStyles from "./circleSymbol.module.scss";


const CircleSymbol = ({symbol}) => {
    return (
        <div 
        className={circleSymbolStyles.symbolContainer}
        >
            {symbol}
        
        </div>
    )
}

export default CircleSymbol
