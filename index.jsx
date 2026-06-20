import React from 'react'
import ReactDOM from 'react-dom/client'
import Menu from './src/Components/Menu/index'


function App() {
    return( 
        
        <Menu onOpen={()=>console.log("Opened/Closed....")}>
            
            <Menu.Button>Menu</Menu.Button>
            <Menu.Dropdown>
                <Menu.MenuItem>Home</Menu.MenuItem>
                <Menu.MenuItem>About</Menu.MenuItem>
                <Menu.MenuItem>Contact</Menu.MenuItem>
            </Menu.Dropdown>


        </Menu>

    )
}



ReactDOM.createRoot(document.getElementById('root')).render(<App />)