export const SmallBookListItem = ({book}) =>{

    const {name,pages,title} =  book

    return(
        <>
            <p>________________________</p>
            <p>Name = {name}</p>
            <p>pages = {pages}</p>
            <p>title = {title}</p>
            <p>________________________</p>
        </>
    )
}