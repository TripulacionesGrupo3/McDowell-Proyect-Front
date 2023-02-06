import email from '../../assets/images/email.png'
import '../../assets/clients/emailpage.css'
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/ShoppingCartContext';
import { useState } from 'react';
import axios from 'axios'



function EmailPage() {
    const navigate = useNavigate();
    const context = useCartContext();
    const image = 'https://cdn-icons-png.flaticon.com/512/1053/1053188.png?w=740&t=st=1675464717~exp=1675465317~hmac=123970fb6328e4fa8a9eb22784499c906aaddd8cf173382cf6cca075051fc494';

    const [userEmail, setUserEmail] = useState()
    const sendCart = async(e) => {
        e.preventDefault() 
        let order = await context.cart
        await order.push({ ...context.totalCart[0], email: userEmail})
       //const response = await axios.post("http://localhost:3001/api/orders/create-order", order)
       context.cart
        console.log(order)
        navigate('/seeyousoon')
    }  

    return (
        <>
            <div className="containerEmail">
                <div className='leftContainerEmail'></div>
                <div className="centerContainerEmail">
                    <div className='topEmail'>

                        <img className='emailImg' src={email} alt='NOT FOUND' />
                    </div>
                    <div className='centerEmail' >
                        <form className='centerEmail' onSubmit={sendCart} >
                            <label className='infoText' for="fname">
                                A continuación introduzca un email válido para remitirle el ticket correspondiente a su pedido.

                            </label>
                            <input className='email' type="text" id="emailOrder" name="clientemail" placeholder="Introduzca email" onChange={(e) => setUserEmail(e.target.value)}
                                required />

                            <input className='sendEmail' type="submit" value="ENVIAR" />


                        </form>
                    </div>

                    <div className='bottomEmail'>

                        <p className='totalEmail'>
                            <img className='returnBtnEmail' src={image} onClick={() => navigate('/menus')} />

                            TOTAL: {context.totalCart[0].totalPrice}€
                        </p>

                    </div>
                </div>
                <div className='rigthContainerMenu'>
                </div>
            </div>
        </>
    )
}

export default EmailPage;
