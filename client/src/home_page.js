import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import HomeImg from './images/ingredient-header.png';
import frame from './images/frame.png';

function Home() {
    return (
        <div>
            <div className='full'>
                <h1 className='title'>Recipedia</h1>
                <text className='intro-text'>Fulfill your quarantine baking and<br />cooking needs by discovering recipes<br />that use your ingredients</text>
                <Link to="/select" style={{ textDecoration: 'none' }} >
                    <button className='home-button'>
                        Select Ingredients
                    </button>
                </Link>
                <img class='home-img' src={HomeImg}></img>
            </div>
        </div>
    );
}

export default Home;