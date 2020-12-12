import React from 'react';
import { Wrapper } from '../../atoms/Wrapper/wrapper';

export function PictureWrapper(props) {
    const { children } = props;
    return (
        <Wrapper
            filling='picture'
            style={{
                maxWidth: '1024px',
                width: '80%',
                margin: '0 auto',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
            }}
        >
            {children}
        </Wrapper>
    );
};
