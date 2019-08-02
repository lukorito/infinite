import React from 'react';
import {Link} from "react-router-dom";

const Index = () => {
    return(
        <div className="container mt-5">
            <h1 className="text-center mb-5">Challange</h1>
            <div className="row align-items-center">
                <div className="col-sm-6 border border-success">
                    <h1 className="text-center">
                        <Link to="/infiniteScroll">Infinite Scroll</Link>
                    </h1>
                </div>
                <div className="col-sm-6 border border-success">
                    <h1 className="text-center">
                        <Link to="/pagination">Pagination</Link>
                    </h1>
                </div>
            </div>
        </div>
    )
};

export default Index;
