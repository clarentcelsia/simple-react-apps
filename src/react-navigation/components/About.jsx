import React from "react";
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div style={{margin:"2em"}}>
            <h2>About</h2>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </div>
    );
};

export default About;