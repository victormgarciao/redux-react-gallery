import styled from 'styled-components';


export const ImageHovered = styled('span')(
    {
        cursor: 'pointer',
        width: (props) => `${props.width - 20}px`,
        height: (props) => `${props.height - 20}px`,
        backgroundColor: 'white',
        opacity: (props) => props.isHovered ? '0.8' : '0',
        color: 'black',
        textAlign: 'center',
        borderRadius: '6px',
        position: 'absolute',
        top: '10px',
        left: '10px',
        zIndex: '1',
        textTransform: 'uppercase',
        verticalAlign: 'middle',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        WebkitTransition: 'opacity 0.4s ease-in-out',
        MozTransition: 'opacity 0.4s ease-in-out',
        msTransition: 'opacity 0.4s ease-in-out',
        OTransition: 'opacity 0.4s ease-in-out',
        transition: 'opacity 0.4s ease-in-out',
    }
);
