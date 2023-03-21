import '../../assets/clients/productdetails.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useCartContext } from '../../context/ShoppingCartContext';
import ProductsManager from '../../services/products.Api';
import NavBarMenus from './Navbar_Menus';
import logoTop from '../../assets/images/single_menu_top.png'
import { Typography } from '@mui/material';
import ingredients from '../../libs/ingredients';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function ProductDetails() {

    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    const context = useCartContext();


    useEffect(() => {
        ProductsManager.getSingleProduct(setProduct, id)
    }, [])

    const addProduct = () => {
        const isInCart = context.cart.find(item => item.id_product === product.id_product)

        if (isInCart) {
            const setOneProd = context.cart.map(item =>
                item.id_product === isInCart.id_product ? {
                    ...item, quantity: item.quantity + 1, total: product.price * (item.quantity + 1)
                } : item
            );
            context.setCart(setOneProd);
        } else {

            context.cart.push({
                ...product,
                total: product.price,
                quantity: 1

            })
        }

        const setTotalPrice = context.totalCart.map((item) => {
            return (
                {
                    totalPrice: item.totalPrice + product.price,
                    totalQuantity: item.totalQuantity + 1
                })
        })

        context.setTotalCart(setTotalPrice)

    }


    return (
        <>
            <NavBarMenus />
            {/* <div className='containter_single_1'>
                <NavBarMenus />

                <div className='text_top'>
                    <Typography variant='h2' sx={{ fontWeight: "bold", fontSize: "24px" }}>
                        Menú Burguer
                    </Typography>
                </div>
                <div className='container_logo_single'>
                    <img src={logoTop} alt={logoTop} className="logo_single" />
                </div>
    </div> */}
            <div className='containter_custom_menu'>
                <div className='text_custom_menu'>
                    <Typography variant='h2' sx={{ fontWeight: "bold", fontSize: "24px" }}>
                        Personaliza tu Menú
                    </Typography >
                    <Typography variant='body1' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                        Añade o elimina los ingredientes como prefieras
                    </Typography>
                </div>
            </div>
            <div className='containter_custom_text'>
                <Typography variant='h2' sx={{ fontWeight: "bold", fontSize: "24px" }} >
                    ¡Como tú quieras!
                </Typography>
                <div className='btn_single' onClick={()=> navigate("/menus/adds-on")}>
                    <Typography variant='body1' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                        Continuar
                    </Typography>
                </div>
            </div>
            <div className='containter_custom_menu'>
                {ingredients.map((product) =>
                    <div className='container_ingredients' >
                        <div className='ingredients_options'>
                            <img src={product.image} />
                        </div>
                        <div className='ingredients_options'>
                            <Typography variant='h2' sx={{ fontWeight: "bold", fontSize: "24px" }}>
                                {product.title}
                            </Typography>
                            <button className='btn_ingredients'>
                                <AddCircleOutlineIcon />
                                <Typography variant='body1' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                    Añadir
                                </Typography>
                            </button>
                            <button className='btn_ingredients'>
                                <RemoveCircleOutlineIcon />
                                <Typography variant='body1' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                    Quitar
                                </Typography>
                            </button>
                        </div>
                        <div className='total_ingredients_options'>
                            <Typography variant='body1' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                + 0.00€
                            </Typography>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default ProductDetails;

