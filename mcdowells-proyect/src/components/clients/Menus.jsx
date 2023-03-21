import React, { useState } from 'react';
import menu from '../../assets/images/menu_grande.png'
import menuJr from '../../assets/images/menu_jr.png'
import '../../assets/clients/menus.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useCartContext } from '../../context/ShoppingCartContext';
import ProductsManager from '../../services/products.Api';
import NavBar from './NavBar';
import { Typography } from '@mui/material';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Menus() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const context = useCartContext();

    useEffect(() => {

        ProductsManager.getAllProducts(setProducts)

    }, [])


    return (
        <>
            <NavBar />

            <div className='centerMenu'>
                {products.map((product) =>

                    <div key={product.id_product} className='menuContainer'>
                        {product.id_product === 2 && <img className='mcBig' src={menu} alt='NOT FOUND'
                            onClick={() => navigate(`/menus/${product.id_product}`)}
                        />}
                        {product.id_product === 1 && <img className='mcBig' src={menuJr} alt='NOT FOUND'
                            onClick={() => navigate(`/menus/${product.id_product}`)}
                        />}
                    </div>

                )}

            </div>
            <div className='container_separator'>
                <div className='separator'></div>
            </div>
            <div className='centerMenu_1'>
                <div className='menu_options'>
                    <Typography variant='h2' sx={{ fontWeight: "bold", fontSize: "24px" }}>
                        Complementos
                    </Typography>
                    <ArrowForwardIosIcon />
                </div>
                <div className='menu_options'>
                    <Typography variant='h2' sx={{ fontWeight: "bold", fontSize: "24px" }}>
                        Bebidas
                    </Typography>
                    <ArrowForwardIosIcon />
                </div>
                <div className='menu_options'>
                    <Typography variant='h2' sx={{ fontWeight: "bold", fontSize: "24px" }}>
                        Extras
                    </Typography>
                    <ArrowForwardIosIcon />
                </div>
                <div className='menu_options'>
                    <Typography variant='h2' sx={{ fontWeight: "bold", fontSize: "24px" }}>
                        Postres
                    </Typography>
                    <ArrowForwardIosIcon />
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
                    {context.totalCart[0].totalQuantity !==0 ?
                        <ShoppingCartOutlinedIcon onClick={() => navigate("cart")} /> :
                        <ShoppingCartOutlinedIcon />
                    } 
                </div>
                <div className='menu_bottom'>
                    <PersonOutlineOutlinedIcon />
                </div>
            </div>


        </>
    )
}

export default Menus;
