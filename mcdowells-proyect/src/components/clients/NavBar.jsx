import '../../assets/clients/navBar.css'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';
import logoNavBar from '../../assets/images/logo_navbar.png'

const NavBar = () => {

    return <>
        <div className='image_nav'>
            <img src={logoNavBar} alt={logoNavBar} className="image_logo_nav"/>
        </div>
        <div className='container_navBar'>
            <div className='container_navBar_text'>
                <IconButton aria-label="delete">
                    <MenuIcon color='inhert' fontSize="large"/>
                </IconButton>
            </div>
            <div className='container_navBar_text'>
                <Typography variant='body1'>
                    Hola
                </Typography>
            </div>
        </div>
        <div className='container_empty'>

        </div>



    </>

}

export default NavBar