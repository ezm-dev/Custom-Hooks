import React from 'react'
import useToggle from '../../hooks/useToggle'


const  MenuContext = React.createContext()
export {MenuContext} 

export default function Menu({children,onOpen}){
   // sending object with the value of open and the function to toggle it
    const [open, toggleOpen] = useToggle({initialValue:false, onToggle:onOpen})

    return(
    <MenuContext.Provider value={{ open, toggleOpen }}>
    <div className='menu'>
        {children}
        </div>
    </MenuContext.Provider>
)

 


}

