import styled from 'styled-components';
import { variant } from 'styled-system';

export const buttonVariant = {
    RED: 'red',
    GREEN: 'green'
};

export const Button = styled('button')(
    {
        padding: '15px 32px',
        fontSize: '1.5em',
        margin: '10px',
        marginBottom: '40px',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
        outline: 'none',
        boxShadow: 'none',
    },
    variant({
        variants: {
            red: { bg: '#f44336' },
            green: { bg: '#4CAF50' },
        }
    })
);
