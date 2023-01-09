import React,{useEffect, useState} from "react";
import { increment,decrement } from "./CounterAction";
import { store } from "./store"

function CounterFunction(props) {
    const [counter,setCounter] = useState(0);
useEffect(()=>{
    updateState()
    store.subscribe(updateState)
})



function updateState(){
    const state = store.getState();
    setCounter(state.counter)
}


function onIncrement(){
    store.dispatch(increment())
}
function onDecrement(){
    store.dispatch(decrement())
}

  return (
    <div>
        <div className="bg-success p-3" >CounterFunction Component</div>
        <div>{counter}</div>
        <div>
            <button onClick={onIncrement} className="m-2" >Increment</button>
            <button onClick={onDecrement} className="m-2" >Decrement</button>
        </div>
    </div>
  )
}

export default CounterFunction