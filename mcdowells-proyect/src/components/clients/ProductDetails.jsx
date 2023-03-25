import '../../assets/clients/productdetails.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useCartContext } from '../../context/ShoppingCartContext';
import ProductsManager from '../../services/products.Api';
import NavBarMenus from './Navbar_Menus';
import { Typography } from '@mui/material';
import ingredients from '../../libs/ingredients';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import NavBarBottom from './NavBarBotttom';

function ProductDetails() {

    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const [total, setTotal] = useState(0)
    const { id } = useParams();
    const context = useCartContext();
    const price = 0.50

    useEffect(() => {
        ProductsManager.getSingleProduct(setProduct, id)
    }, [])

    const addToTotal = () => {
        const setTotalPrice = context.totalCart.map((item) => {
            return (
                {
                    totalPrice: item.totalPrice + price,
                    totalQuantity: item.totalQuantity
                })
        })
        context.setTotalCart(setTotalPrice)
        setTotal(total + price)
    }

    const removeToTotal = async () => {
        if (total !== 0) {
            setTotal(total - price)
        }
        if (total > 0) {
            const setTotalPrice = context.totalCart.map((item) => {
                return (
                    {
                        totalPrice: item.totalPrice - price,
                        totalQuantity: item.totalQuantity
                    })
            })
            context.setTotalCart(setTotalPrice)
        }
    }


    return (
        <>
            <NavBarMenus />

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
                <div className='btn_single' onClick={() => navigate("/menus/adds-on")}>
                    <Typography variant='body1' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                        Continuar
                    </Typography>
                </div>
            </div>
            <div className='containter_custom_menu_1'>
                {ingredients.map((product) =>
                    <div className='container_ingredients' key={product.id_product} >
                        <div className='ingredients_options'>
                            <img src={product.image} />
                        </div>
                        <div className='ingredients_options'>
                            <Typography variant='h2' sx={{ fontWeight: "bold", fontSize: "24px" }}>
                                {product.title}
                            </Typography>
                            <button className='btn_ingredients' onClick={() => addToTotal()}>
                                <AddCircleOutlineIcon />
                                <Typography variant='body1' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                    Añadir
                                </Typography>
                            </button>
                            <button className='btn_ingredients' onClick={() => removeToTotal()}>
                                <RemoveCircleOutlineIcon />
                                <Typography variant='body1' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                    Quitar
                                </Typography>
                            </button>
                        </div>
                        <div className='total_ingredients_options'>
                            <Typography variant='body1' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                + 0.50 €
                            </Typography>
                        </div>
                    </div>
                )}

            </div>
            <NavBarBottom />
        </>
    )
}

export default ProductDetails;

