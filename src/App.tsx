import { RouterProvider } from 'react-router-dom';
import React from 'react';
import { router } from './router.tsx';

export const App = () =>
    <React.StrictMode>
        <RouterProvider router={ router }/>
    </React.StrictMode>