import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/mainLayout/MainLayout';
import Home from '../pages/home/Home';
import GenerateImg from '../pages/generateImg/GenerateImg';


    
    const routes=createBrowserRouter([
        {
            path:'/',
            element:<MainLayout></MainLayout>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/generate-img',
                    element:<GenerateImg></GenerateImg>
                }
            ]
        }
    ])


export default routes;