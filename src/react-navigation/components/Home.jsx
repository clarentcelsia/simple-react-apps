import React from "react";
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div style={{margin:"2em"}}>
            <main>
                <h2>Routing</h2>
            </main>
            <nav>
                {/* UI HOMEPAGE */}
                <Link to="/about" style={{marginRight:"1em"}}>About</Link>
                <Link to="/reducer" style={{marginRight:"1em"}}>Reducer</Link>
                <Link to="/effect" style={{marginRight:"1em"}}>Effect</Link>
                <Link to="/list" style={{marginRight:"1em"}}>List</Link>
                <Link to="/form" style={{marginRight:"1em"}}>Form</Link>
                <Link to="/redux" style={{marginRight:"1em"}}>Redux</Link>
                <Link to="/redux-thunk" style={{marginRight:"1em"}}>Redux-Thunk</Link>
                <Link to="/zustand" style={{marginRight:"1em"}}>Zustand</Link>
                <Link to="/firebase" style={{marginRight:"1em"}}>Firebase</Link>

            </nav>
        </div>
    )
};

export default Home;
