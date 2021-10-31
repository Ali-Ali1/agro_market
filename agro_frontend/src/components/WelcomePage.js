import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const WelcomePage = () => {
    return (
        <div>
            <div className="welcome">
                <span>Welcome to Agromarket!</span>
                <span>In this site you can buy or sell agricultural products fresh out of the farm.</span>
                <Link to="/login"><Button text='Start' /></Link>
            </div>
        </div>
    )
}

export default WelcomePage;
