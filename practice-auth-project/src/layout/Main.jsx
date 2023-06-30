import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';


const Main = () => {
    return (
        <div className='container'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;