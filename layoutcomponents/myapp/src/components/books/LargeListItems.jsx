export const LargeBookListItem = ({book}) =>{

    const {name,pages,title,price} =  book

    return(
        <>
            <p>________________________</p>
            <p>Name = {name}</p>
            <p>pages = {pages}</p>
            <p>title = {title}</p>
            <p>Price = {price}$</p>
            <p>________________________</p>
        </>
    )
}