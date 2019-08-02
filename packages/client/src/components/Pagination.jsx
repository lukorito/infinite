import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getPhotos } from '../redux/actions/actions';
import { Pagination } from 'semantic-ui-react'
import ImageContainer from "./ImagesContainer";


const PaginationComponent = props => {
    const [page, setPage] = useState(1);
    const [count] = useState(30);

    const { pagination} = props.photos;
    const { getPhotos } = props;

    useEffect(() => {
        getPhotos(page, count);
    }, [getPhotos, page, count]);

    const fetchPhotos = (event, data) => {
        setPage(data.activePage)
    };

    return (
        <div className="container">
            <h1 className="text-center">
                Pagination
            </h1>
            <ImageContainer photos={pagination}/>
            <div className="paginator text-center m-5">
                <Pagination
                    defaultActivePage={1}
                    totalPages={100}
                    onPageChange={fetchPhotos}
                />
            </div>
        </div>
    )
};
const mapStateToProps = state => ({
    photos: state.photos,
});

const mapDispatchToProps = dispatch => ({
    getPhotos: (page, count) => dispatch(getPhotos(page, count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaginationComponent);
