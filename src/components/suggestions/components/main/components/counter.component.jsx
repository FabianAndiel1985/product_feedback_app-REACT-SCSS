
const Counter = ({number, orientation}) => {
    const ArrowUp = <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" stroke="#4661E6" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>;
    
    return (
        <>
            <div style={orientation =="horizontal" ? { display:"flex"} : { display:"block"}}>
                <div style={{ textAlign:"center"}}>
                    {ArrowUp}
                </div>
                <div style={orientation =="horizontal" ? { textAlign:"center",marginLeft:"8px"} : { textAlign:"center"}}>
                    {number}
                </div>        
            </div>
            
        </>
    )
}

export default Counter
