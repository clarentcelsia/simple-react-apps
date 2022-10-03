import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppEffect from "../react-effect/components/AppEffect";
import AppReducer from "../react-effect/components/AppReducer";
import MovieList from "../react-list/containers/MovieList";
import Home from "./components/Home";
import About from "./components/About";
import Form from "../react-form/FormPage";
import Param from "./components/Param";

/*  Router components:
https://v5.reactrouter.com/web/guides/primary-components
    - BrowserRouter uses regular URL [Original URL].
        This type of router require your server configured correctly.
        Specifically, your web server needs to serve the same page at all URLs that are managed client-side.
        https://create-react-app.dev/docs/deployment/#serving-apps-with-client-side-routing

    - HashRouter 
        Stores the current location in the hash portion of the URL, 
        so the URL looks something like http://example.com/#PATH/your/page. 
        Since the hash is never sent to the server, this means that no special server configuration is needed.
 */

// https://reactrouter.com/en/v6.3.0/getting-started/tutorial
const AppRouter = () => {
    return (
        <>
        {/* Define routes */}
        <Router>
            {/* Starting from react-router-dom@v6 <Switch/> has been replaced by <Routes/>*/}
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                {/* If you enclosed your routes with <Switch/> define it with 'exact' props means to differentiate it from other paths start with /[PATH1] & /[PATH1]/[SUBPATH1] & ... */}
                <Route exact path="/about" element={<About/>}/>
                <Route path="/about/test" element={
                    <h3>TEST</h3>
                }/>
                <Route path="/reducer" element={<AppReducer/>}/>
                <Route path="/effect" element={<AppEffect/>}/>
                <Route path="/list" element={<MovieList/>}/>
                <Route path="/form" element={<Form/>}/>
                <Route path="*" element={
                    <main>
                        <h3>404 - Route not found !</h3>
                    </main>
                }/>

                {/* Example using useParam() */}
                <Route path="/element/:id" element={<Param/>}/>
                <Route path="/element?q=id" element={<Param/>}/>
            </Routes>
        </Router>
        </>
    )
};

export default AppRouter;