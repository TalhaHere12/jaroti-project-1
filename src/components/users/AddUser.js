import { useState } from 'react';
import { addUser,getusers } from './../../services/user-api';

import HeaderTop from '../cart-sub-components/HeaderTop';
import HeaderCenter from '../cart-sub-components/HeaderCenter';
import HeaderBottom from '../cart-sub-components/HeaderBottom';
import Footer from '../cart-sub-components/Footer';
import "./styles/AddUser.css";
import { useEffect } from 'react';

const AddUser = () => {
    const [user, setUser] = useState()
    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name] : e.target.value})
    }
    const addUserHandler = async() =>{
        await addUser(user); 
    }

    useEffect(() => {

        getusers()
      
    }, [])
    
    return(
        <>
        <HeaderTop />
        <HeaderCenter />
        <HeaderBottom />
        
        <div className='adduser-form adduserform'>
            <h1>Register</h1>
            <form>
                <label htmlFor='username' className='login-fields-discription'>username*</label>
                <span className='adduser-message-username'></span>
                <input  onChange={(e) => onValueChange(e)} name='username' className='adduser-fields-username'/>
                <br/>
                <label htmlFor='email' className='login-fields-discription'>email*</label>
                <span className='adduser-message-email'></span>
                <input  onChange={(e) => onValueChange(e)} name='email' className='adduser-fields-email'/>
                <br/>
                <label htmlFor='password' className='login-fields-discription'>password*</label>
                <span className='adduser-message-password'></span>
                <input  onChange={(e) => onValueChange(e)} name='password' className='adduser-fields-password'/>
                <br/>
                <label htmlFor='confirm-password' className='login-fields-discription'>confirm password*</label>
                <span className='adduser-message-confirm-password'></span>
                <input name='confirm' className='adduser-fields-confirm-password'/>
                <br/>
                <label htmlFor='role' className='login-fields-discription'>Choose role*</label>
                <select name='role' onChange={(e) => onValueChange(e)} className='adduser-fields-role'>
                    <option value='buyer'>Buyer</option>
                    <option value='seller'>Seller</option>
                </select>
                <br/>
                <input type='button' onClick={addUserHandler} value='Register' className='adduser-button'/>
            </form>
        </div>

        <Footer />
        </>
    )

}

export default AddUser;