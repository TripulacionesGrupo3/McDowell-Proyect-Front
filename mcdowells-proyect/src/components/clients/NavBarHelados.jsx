import '../../assets/clients/navBar.css'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';
import logoHelado from '../../assets/images/top_helados.png'


const NavBarHelados = () => {


    return <>
        <div className='containter_single_1'>
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

            <div className='text_top'>
                <Typography variant='h2' sx={{ fontWeight: "bold", fontSize: "24px" }}>
                    Postres
                </Typography>
            </div>
            <div className='container_logo_single'>
                <img src={logoHelado} alt={logoHelado} className="logo_single" />
            </div>
        </div>
    </>
}

export default NavBarHelados