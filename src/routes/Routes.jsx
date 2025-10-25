import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/mainLayout/MainLayout';
import Home from '../pages/home/Home';


    
    const routes=createBrowserRouter([
        {
            path:'/',
            element:<MainLayout></MainLayout>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
            ]
        }
    ])


export default routes;