import React, { Fragment } from 'react';


export function ImageDisplay(props) {
    const {
        image,
        handlePreviousClick,
        handleNextClick,
    } = props;


    return (
        <Fragment>
            <button onClick={handlePreviousClick}>previous</button>
            <p>{image}</p>
            <button onClick={handleNextClick}>next</button>
        </Fragment>
    );
};
