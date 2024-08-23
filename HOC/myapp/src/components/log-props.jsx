export const logProps = Component =>{

    return (props) =>{ // props sunt props care vin cu component de sus la pachet 

        console.log(props);

        return <Component {...props}/>
    }
}