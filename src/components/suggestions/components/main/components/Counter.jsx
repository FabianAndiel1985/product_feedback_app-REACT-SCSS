import React from 'react'

function Counter({number}) {
    const ArrowUp = <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" stroke="#4661E6" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>;

    return (
        <>
            <div style={{ textAlign:"center"}}>
                {ArrowUp}
            </div>
            <div style={{ textAlign:"center"}}>
                {number}
            </div>        
            
        </>
    )
}

export default Counter
