import React from 'react';
import {connect} from "react-redux";
import Spinner from './components/Loader'
import { Route, Switch} from "react-router-dom";
import InfiniteScrollComponent from "./components/InfiniteScroll";
import PaginationComponent from "./components/Pagination"
import Index from "./components/Index";

function App(props) {
    return (
        <div className="App">
            {props.loading && <Spinner/>}
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route path="/infiniteScroll" component={InfiniteScrollComponent}/>
                <Route path="/pagination" component={PaginationComponent}/>
            </Switch>


        </div>
    );
}

const mapStateToProps = state => ({
    loading: state.photos.loading,
});

export default connect(mapStateToProps, null)(App)
