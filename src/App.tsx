import { RouterProvider } from 'react-router-dom';
import React from 'react';
import { router } from './router.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';

export const App = () =>
    <React.StrictMode>
        <Provider store={ store }>
            <RouterProvider router={ router }/>
        </Provider>
    </React.StrictMode>