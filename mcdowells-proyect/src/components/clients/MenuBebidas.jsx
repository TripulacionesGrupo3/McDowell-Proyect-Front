import NavBarMenus from "./Navbar_Menus";
import { Typography } from '@mui/material';
import '../../assets/clients/productdetailsAdds.css'
import '../../assets/clients/menuExtras.css'
import '../../assets/clients/bebidas.css'
import { useState } from "react";
import drinks from "../../libs/bebidas";
import { useNavigate } from 'react-router-dom';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
const MenuBebidas = () => {

    const [idProd, setIdProd] = useState()
    const [color, setColor] = useState("#FFFFFF")
    const navigate = useNavigate()



    return <>
        <NavBarMenus />
        <div className='container_top_bebidas'>
            <div className='text_top_bebidas'>
                <Typography variant='h2' sx={{ fontWeight: "bold", fontSize: "24px" }}>
                    ¡Tus bebida!
                </Typography >
                <Typography variant='body1' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                    Elije entre una de ellas
                </Typography>
            </div>
            <div className='btn_single_bebidas' onClick={()=>navigate("/menus/desserts")} >
                <Typography variant='body1' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                    Continuar
                </Typography>
            </div>
        </div>

        <div className='container_bebidas'>
            {drinks.map((product) =>
                <>
                    {idProd === product.id ?
                        <div className='container_bebidas_check'>
                            <img src={product.image} alt="auto" onClick={() => setIdProd(product.id)} />
                            <TaskAltOutlinedIcon sx={{ borderRadius: "100px", backgroundColor: "#74AF00" }}
                                className="check" />
                        </div>
                        :
                        <div className='container_bebidas_nocheck'>
                            <img src={product.image} alt="auto" onClick={() => setIdProd(product.id)} />
                        </div>}
                </>
            )}

        </div>


    </>

}


export default MenuBebidas