
export const partialComponent = (Component,partialProps) =>{

    return props =>{
        return <Component {...partialProps} {...props}/>
    }
}

export const Button = ({size, color,text,...props}) =>{
    return(
        <button style={{
            fontSize:size === 'small' ? '8px' : '32px',
            backgroundColor:color
        }}>
            {text}
        </button>
    )

}

export const YellowButton = partialComponent(Button,{color:'yellow'})
export const YellowAndSmallButton = partialComponent(Button,{color:'yellow',size:'small'})