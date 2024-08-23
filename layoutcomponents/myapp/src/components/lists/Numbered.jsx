export const NumberedList = ({ items, param, ItemComponent }) =>{


    return(
        <>
            {items.map((item, i) =>(
             <>
                <h2>{i + 1}</h2>
                <ItemComponent key={i} {...{[param] : item}}/>
             </>
            ))}
        </>
    )
}