import React from 'react'
import "@components/Header"
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/footer';
import Container from '../components/Container';
import Projects from '../components/Projects';

function MainPage() {
  return (
    <div>
        <Header />
        <Container />
            {/* <Main /> */}
            <Projects />
        <Footer />
    </div>
  )
}

export default MainPage;
