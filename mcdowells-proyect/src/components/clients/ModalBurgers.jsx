import '../../assets/clients/modalBruger.css'
import NavBar from './NavBar';
import burger from '../../assets/images/meat_burger.png'
import vegan from '../../assets/images/vegan_burger.png'
import chicken from '../../assets/images/chicken_burger.png'
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/ShoppingCartContext';

const ModalBurger = () => {

    const context = useCartContext();
    const navigate = useNavigate();

    return <>
        <NavBar />
        <div className='container_modal_b'>
            <div className='container_divs'>
                <img src={burger} className="image_burger" onClick={() => navigate(`/menus/1`)}/>
                <img src={vegan} className="image_burger" />
                <img src={chicken} className="image_burger" />

            </div>
        </div>

        <div className='container_bottom'>

            <div className='menu_bottom'>
                <HouseOutlinedIcon onClick={() => navigate("/menus")} />
            </div>
            <div className='menu_bottom'>
                <FavoriteBorderOutlinedIcon />
            </div>
            <div className='menu_bottom'>
                {context.totalCart[0].totalQuantity !== 0 ?
                    <ShoppingCartOutlinedIcon onClick={() => navigate("cart")} /> :
                    <ShoppingCartOutlinedIcon />
                }
            </div>
            <div className='menu_bottom'>
                <PersonOutlineOutlinedIcon />
            </div>
        </div>
    </>
}

export default ModalBurger;