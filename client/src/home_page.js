import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import frame from './images/frame.png';

function Home() {
    return (
        <div className='first-container'>
            <img src={frame} alt='frame' className='frame'></img>
            <section className='main'>
                <pre>
                    <h1 className='title'><span>Recipedia</span></h1>
                    <Link to="/select" style={{ textDecoration: 'none' }} >
                        <button className='button'>
                            Enter Ingredients
                        </button>
                    </Link>
                </pre>
            </section>
        </div>
    );
}

export default Home;