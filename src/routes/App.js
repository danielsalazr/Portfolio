import React, { Component } from 'react'

// import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import MainPage from '../containers/MainPage';

import Certificados from '../containers/Certificados';

import { BrowserRouter, HashRouter, Routes, Route, Router } from 'react-router-dom';
// import Presentation from '../components/Presentation';


const App = () => {
    return (
        <>
            {/* <HashRouter> */}
            <BrowserRouter>
                {/* <AuthProvider> */}
                    <Routes>
                        <Route path='/' element={<MainPage />} />
                        <Route path='/certificaciones' element={<Certificados />} />
                        <Route path='*' element={<h2>Not found</h2>} />
                    </Routes>
            </BrowserRouter>
                {/* </AuthProvider> */}
            {/* </HashRouter> */}
        </>

    );
}

export default App;