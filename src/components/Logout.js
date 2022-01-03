import {Container, Row, Col, Button, Form } from 'react-bootstrap';
import React from 'react'
import {useDispatch} from 'react-redux'
import {logout} from "../Features/UserSlice"
import { Redirect, useHistory } from 'react-router-dom';




export default function Logout() {

    const dispatch = useDispatch();
    const history = useHistory();

    const handeleLogOut = (e) => {
        e.preventDefault();
        dispatch(logout());
        history.push('/login')

    }

    return (
        <div>
            <h1>Welcome</h1>
            <Button onClick={handeleLogOut}>Logout</Button>
        </div>
    )
}
