import { emitter } from "../App"


const Buttons = () =>{

    const onIncrementCounter = () => {
    emitter.emit("increment")
    }

    const onDecrementtCounter = () => {
        emitter.emit("decrement")

    }

    return(
        <div>
            <button onClick={onIncrementCounter}>+</button>
            <button onClick={onDecrementtCounter}>-</button>

        </div>
    )

}


export default Buttons;