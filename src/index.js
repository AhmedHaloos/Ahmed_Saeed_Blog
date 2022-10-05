import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from 'react-query';
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";

import App from './App';
import LoadingComp from './components/LoadingComponent';



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <LoadingComp/>
);

