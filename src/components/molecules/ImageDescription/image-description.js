import React from 'react';
import { Wrapper } from '../../atoms/Wrapper/wrapper';

export function ImageDescription(props) {
    const { children } = props;
    return (
        <Wrapper
            filling='image-discreption'
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
