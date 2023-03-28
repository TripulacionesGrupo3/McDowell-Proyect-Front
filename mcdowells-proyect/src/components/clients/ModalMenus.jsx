import '../../assets/clients/modalClients.css'
import { useState } from 'react';
import '../../assets/clients/modalBruger.css'
import burger from '../../assets/images/meat_burger.png'
import vegan from '../../assets/images/vegan_burger.png'
import chicken from '../../assets/images/chicken_burger.png'
import { useNavigate } from 'react-router-dom';
import logoTop from '../../assets/images/top_single_menu.png'
import logoNavBar from '../../assets/images/logo_navbar.png'

const ModalMenus = (props) => {
    const [MsgErrors, setMsgEerrors] = useState(props.textErrors)
    const navigate = useNavigate();

    return <>
        <div className="containerModal_clients">
            <div className="containerModal_1_clients" onClick={props.back}>

                <div className='image_nav_modal'>
                    <img src={logoNavBar} alt={logoNavBar} className="image_logo_modal" />
                </div>

                <div className='container_logo_single'>
                    <img src={logoTop} alt={logoTop} className="logo_single" />
                </div>


                <div className='container_modal_b'>
                    <div className='container_divs'>
                        <img src={burger} className="image_burger" alt={burger}onClick={() => navigate(`/menus/2`)} />
                        <img src={vegan} className="image_burger" alt={vegan}/>
                        <img src={chicken} className="image_burger" alt={chicken}/>

                    </div>
                </div>

            </div>
        </div>
    </>
}

export default ModalMenus;