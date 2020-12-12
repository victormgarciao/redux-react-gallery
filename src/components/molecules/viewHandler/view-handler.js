import React from 'react';
import { Wrapper } from '../../atoms/Wrapper/wrapper';

export function ViewHandler(props) {
    const { children } = props;
    return (
        <Wrapper
            filling='view-handler'
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                verticalAlign: 'center',
                margin: '10px',
            }}
        >
            {children}
        </Wrapper>
    );
};
