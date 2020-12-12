import React from 'react';
import { Wrapper } from '../../atoms/Wrapper/wrapper';

export function SingleView(props) {
    const { children } = props;
    return (
        <Wrapper
            filling='single-view'
            style={{
                position: 'flex',
                opacity: '1',
                flexDirection: 'column',
                margin: '10px',
            }}
        >
            {children}
        </Wrapper>
    );
};
