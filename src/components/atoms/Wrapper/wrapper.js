import styled from 'styled-components';
import { variant } from 'styled-system';

export const wrapperVariants = {
    'COLUMN_DIRECTION': 'columnDirection',
}

export const Wrapper = styled('div')(
    {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px',
    },
    variant({
        variants: {
            columnDirection: {
                flexDirection: 'column',
            },
        }
    })
);
