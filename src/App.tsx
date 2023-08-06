import { RouterProvider } from 'react-router-dom';
import React from 'react';
import { router } from './router.tsx';
import { Provider } from 'react-redux';
import { store } from './store.ts';
import { GlobalMessages } from './common/messages/components/global-messages.tsx';

export const App = () =>
    <React.StrictMode>
        <Provider store={ store }>
            <div className="fixed w-full z-9999 top-[20%] flex justify-center px-4">
                <div className="max-w-3xl w-full">
                    <GlobalMessages/>
                </div>
            </div>
            <RouterProvider router={ router }/>
        </Provider>
    </React.StrictMode>