import React from 'react'
import {AppBar,Toolbar,Typography,IconButton,Button} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const NavBar = () => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <IconButton color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant='h6'>
                    LumarTecnologías
                    </Typography>
                    <Button variant="text" color="inherit">
                        Electródomesticos
                    </Button>

                    <Button variant="text" color="inherit">
                        Insumos informáticos
                    </Button>

                    <Button variant="text" color="inherit">
                        Home
                    </Button>
                </Toolbar>

            </AppBar>
        </div>
    )
}

export default NavBar 