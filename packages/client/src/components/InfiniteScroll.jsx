import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getPhotos } from '../redux/actions/actions';
import InfiniteScroll from 'react-infinite-scroll-component';
import ImageContainer from "./ImagesContainer";


const InfiniteScrollComponent = props => {
    const [page, setPage] = useState(1);
    const [count] = useState(30);

    const { photos} = props.photos;
    const { getPhotos } = props;

    useEffect(() => {
        getPhotos(page, count);
    }, [getPhotos, page, count]);

    const fetchPhotos = () => {
        setPage(page + 1);
    };

    const refresh = () => {
        props.getPhotos(page, count);
    };

    return (
        <div className="container">
            <h1 className="text-center">
                Photo Gallery
            </h1>
                    <InfiniteScroll
                        dataLength={photos.length}
                        next={fetchPhotos}
                        hasMore={true}
                        refreshFunction={refresh}
                        pullDownToRefresh
                        pullDownToRefreshContent={
                            <p style={{textAlign: 'center'}}>&#8595; Pull down to refresh</p>
                        }
                        releaseToRefreshContent={
                            <p style={{textAlign: 'center'}}>&#8593; Release to refresh</p>
                        }
                    >
                        <ImageContainer photos={photos}/>
                    </InfiniteScroll>
        </div>
    )
};
const mapStateToProps = state => ({
    photos: state.photos,
});

const mapDispatchToProps = dispatch => ({
    getPhotos: (page, count) => dispatch(getPhotos(page, count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InfiniteScrollComponent);
