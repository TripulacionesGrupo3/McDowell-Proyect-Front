import NavBarHelados from "./NavBarHelados"
import { Typography } from '@mui/material';
import '../../assets/clients/productdetailsAdds.css'
import '../../assets/clients/menuExtras.css'
import { useState } from "react";
import desserts from "../../libs/desserts";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useNavigate } from 'react-router-dom';

const Desserts = () => {

    const [idProd, setIdProd] = useState()
    const navigate = useNavigate()



    return <>
        <NavBarHelados />
        <div className='container_top_extras'>
            <div className='text_top_add'>
                <Typography variant='h2' sx={{ fontWeight: "bold", fontSize: "24px" }}>
                    ¡Tus complementos!
                </Typography >
                <Typography variant='body1' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                    Añade un complemento por 1,99€
                </Typography>
            </div>
            <div className='btn_single_add'  >
                <Typography variant='body1' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                    Continuar
                </Typography>
            </div>
        </div>

        <div className='containter_custom_menu_1'>
            {desserts.map((product) =>
                <>
                    {idProd !== product.id ?
                        <div className='container_extras' style={{ backgroundColor: "#FFFFFF" }}>
                            <div className='ingredients_options'>
                                <img src={product.image} />
                            </div>

                            <div className='extras_options'>
                                <Typography variant='h2' sx={{ fontWeight: "bold", fontSize: "20px" }}>
                                    {product.title}
                                </Typography>
                                <button className='btn_ingredients' onClick={() => setIdProd(product.id)}>
                                    <AddCircleOutlineIcon />
                                    <Typography variant='body1' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                        Añadir
                                    </Typography>
                                </button>
                                <button className='btn_ingredients' onClick={() => setIdProd(null)}>
                                    <RemoveCircleOutlineIcon />
                                    <Typography variant='body1' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                        Quitar
                                    </Typography>
                                </button>
                            </div>
                            <div className='total_extras_options'>
                                <Typography variant='body1' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                    +{product.price}€
                                </Typography>
                            </div>
                        </div>
                        :
                        <div className='container_extras' style={{ backgroundColor: "#F3FFE3" }}>
                            <div className='ingredients_options'>
                                <img src={product.image} />
                            </div>

                            <div className='extras_options'>
                                <Typography variant='h2' sx={{ fontWeight: "bold", fontSize: "20px" }}>
                                    {product.title}
                                </Typography>
                                <button className='btn_ingredients' onClick={() => setIdProd(product.id)}>
                                    <AddCircleOutlineIcon />
                                    <Typography variant='body1' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                        Añadir
                                    </Typography>
                                </button>
                                <button className='btn_ingredients' onClick={() => setIdProd(null)}>
                                    <RemoveCircleOutlineIcon />
                                    <Typography variant='body1' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                        Quitar
                                    </Typography>
                                </button>
                            </div>
                            <div className='total_extras_options'>
                                <Typography variant='body1' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                    +{product.price}€
                                </Typography>
                            </div>
                        </div>}
                </>
            )}
        </div>
    </>

}


export default Desserts