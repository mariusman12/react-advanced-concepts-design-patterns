export const RegularList = ({ items, param, ItemComponent }) =>{


    return(
        <>
            {items.map((item, i) =>(
                <ItemComponent key={i} {...{[param] : item}}/>
            ))}
        </>
    )
}