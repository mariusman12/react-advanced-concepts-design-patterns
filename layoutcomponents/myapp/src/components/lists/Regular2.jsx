export const RegularList2 = ({array, type, ItemComponent} ) =>{

    return(
        <>
            {array.map( (element , i) => (
                <ItemComponent key={i} {...{[type] :element}} />
            ) )}
        </>
    )

}