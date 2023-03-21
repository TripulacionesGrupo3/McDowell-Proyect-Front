import NavBarMenus from "./Navbar_Menus";
import { Typography } from '@mui/material';
import '../../assets/clients/productdetailsAdds.css'
import adds from '../../libs/adds'
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import { useState } from "react";

const ProductDetailsAdds = () => {

const [check, setCheck] = useState(false)

    return <>
        <NavBarMenus />
        <div className='container_top_add'>
            <div className='text_top_add'>
                <Typography variant='h2' sx={{ fontWeight: "bold", fontSize: "24px" }}>
                    ¡Tu acompañamiento!
                </Typography >
                <Typography variant='body1' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                    Incluido en tu menú, elige uno de ellos
                </Typography>
            </div>
            <div className='btn_single_add' >
                <Typography variant='body1' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                    Continuar
                </Typography>
            </div>
        </div>

        <div className='container_adds'>
            {adds.map((product) =>
                <div className='container_add_details'>
                    <img src={product.image} alt="auto" onClick={()=> setCheck(!check)}/>
                    {check && <TaskAltOutlinedIcon sx={{borderRadius: "100px", backgroundColor : "#74AF00"}}/>}
                </div>

            )}
        </div>


    </>

}


export default ProductDetailsAdds