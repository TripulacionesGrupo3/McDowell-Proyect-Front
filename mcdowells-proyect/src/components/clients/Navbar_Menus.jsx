import '../../assets/clients/navBar.css'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';


const NavBarMenus = () => {


    return <>
        <div className='container_navBar'>
            <div className='container_navBar_text'>
                <IconButton aria-label="delete">
                    <MenuIcon color='inhert' fontSize="large" />
                </IconButton>
            </div>
            <div className='container_navBar_text'>
                <Typography variant='body1'>
                    Hola
                </Typography>
            </div>
        </div>
    </>
}

export default NavBarMenus