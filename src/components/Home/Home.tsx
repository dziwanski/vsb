import React from "react";
import {Link} from 'react-router-dom';
// Styles
import './Home.styles.scss';

const Home = () => {
    return (
        <main>
            <section className='home'>
                <h1 className='home__brand'>Volvo <span className='home__brand--model'>S40</span></h1>
                <h2>Service book</h2>
                <Link className='start_btn' to='/dashboard'>START</Link>
            </section>
        </main>
    );
}

export default Home;