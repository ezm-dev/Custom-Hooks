import React from 'react'
import useToggle from '../../hooks/useToggle'



export default function Menu({children}){
    const [open, toggleOpen] = React.useToggle(false)
return(
    <div className='menu'>
        {children}
        </div>
 
)

}