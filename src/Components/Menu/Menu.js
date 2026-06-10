import React from 'react'


export default function Menu({children}){
    const [open, setOpen] =React.useState(false)

    function toggle(){
        setOpen(prev => !prev)
    }
return(
    <div className='menu'>
        {children}
        </div>

)

}