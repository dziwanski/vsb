import React from "react";
import './Home.styles.scss';

const Home = () => {
    return (
        <main>
            <section className='home'>
                <h1 className='home__brand'>Volvo <span className='home__brand--model'>S40</span></h1>
                <h2>Service book</h2>
            </section>
        </main>
    );
}

export default Home;