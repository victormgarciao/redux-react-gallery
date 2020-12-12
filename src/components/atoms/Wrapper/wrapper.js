import React from 'react';

export function Wrapper(props) {
    const { children, filling, style } = props;
    return (
        <div
            className={`${filling}__wrapper`}
            style={style}
        >
            {children}
        </div>
    );
};
