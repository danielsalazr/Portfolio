import React, { Component } from 'react'
import "@components/Header"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/footer';
import Container from '../components/Container';
import Projects from '../components/Projects';
// import Presentation from '../components/Presentation';


const App = () => {
    return (
        
        <div>
            <Header />
            <Container />
                {/* <Main /> */}
                <Projects />
            <Footer />
        </div>
    );
}

export default App;