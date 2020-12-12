import React from 'react';
import { Button } from '../../atoms/Button/button';


export const buttonKind = {
    RED: 'RED',
    GREEN: 'GREEN'
};

const buttonColor = {
    RED: { color: '#f44336' },
    GREEN: { color: '#4CAF50' },
}

export function MainButton(props) {
    const { children, onClick, kind, ...buttonTagProps } = props;
    return (
        <Button
            onClick={onClick}
            style={{
                padding: '15px 32px',
                fontSize: '1.5em',
                margin: '10px',
                marginBottom: '40px',
                background: `${buttonColor[kind].color}`,
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '5px',
                outline: 'none',
                boxShadow: 'none',
            }}
            {...buttonTagProps}
        >
            {children}
        </Button>
    );
};
