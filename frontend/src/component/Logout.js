import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../App';

const Logout = () => {

    const navigate = useNavigate();
    const { state, dispatch } = useContext(userContext);

    useEffect(() => {
        fetch('/logout', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then((res) => {
            if (res.status !== 200) {
                throw new Error(res.error);
            }
            window.alert('Logged Out Successfully !!');
            dispatch({ type: 'USER', payload: false });
            navigate('/login');

        }).catch((err) => {
            console.log(err);
        })
    }, []);

    return (
        <>
            <h1 className=' text-center'>Logout Page</h1>
        </>
    )
}

export default Logout