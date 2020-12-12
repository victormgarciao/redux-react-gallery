import React from 'react';
import { Wrapper } from '../../atoms/Wrapper/wrapper';

export function ImageWrapper(props) {
    const { children } = props;
    return (
        <Wrapper
            filling='image'
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '10px',
            }}
        >
            {children}
        </Wrapper>
    );
};
