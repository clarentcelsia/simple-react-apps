import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppEffect from "../react-effect/components/AppEffect";
import AppReducer from "../react-effect/components/AppReducer";
import MovieList from "../react-list/containers/MovieList";
import Home from "./components/Home";
import About from "./components/About";
import Form from "../react-form/FormPage";
import {Param, SearchParam} from "./components/Param";
import { Provider } from "react-redux";
// import { legacy_createStore as createStore } from "redux";
// import { InitialValue, RootReducer } from "../react-redux/reducers/Root";
import CounterRedux from "../react-redux/containers/CounterRedux";

import { AppStore } from "../react-redux/apps/store";
import CounterReduxThunk from "../react-redux/containers/CounterReduxThunk";
import CounterZustandContainer from "../react-zustand/containers/CounterZustandContainer";

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
    /** This store will be defined in apps/store using redux toolkit. */
    // const store = createStore(RootReducer, InitialValue);

    return (
        <>
        {/* Define routes */}
        <Provider store={AppStore}>
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

                {/* Example using useParam(), and useSearchParam() */}
                <Route path="/element/:id" element={<Param/>}/>
                <Route exact path="/element" element={<SearchParam/>}/>

                {/* Redux-reducer */}
                <Route exact path="/redux" element={<CounterRedux/>}/>
                {/* Thunk */}
                <Route path="/redux-thunk" element={<CounterReduxThunk/>}/>
                {/* Zustand */}
                <Route path="/zustand" element={<CounterZustandContainer/>}/>

            </Routes>
        </Router>
        </Provider>
        </>
    )
};

export default AppRouter;