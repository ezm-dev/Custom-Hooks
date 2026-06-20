
import React from 'react'

export default function useEffectOnUpdate(effectFunction,deps){
const isInitialMount = React.useRef(true)

React.useEffect(()=>{
    if(isInitialMount.current){
        isInitialMount.current = false
    }else{
        effectFunction()
    }
    
},deps)

}