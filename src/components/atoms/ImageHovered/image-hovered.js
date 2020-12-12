import React from 'react';

export function ImageHovered(props) {
    const {
        children,
        width,
        height,
        isHovered,
    } = props;

    return (
        <span 
            style={{
                cursor: 'pointer',
                width: `${width - 20}px`,
                height: `${height - 20}px`,
                backgroundColor: 'white',
                opacity: `${isHovered ? '0.8' : '0'}`,
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
            }}
        >
            {children}
        </span>
    );
};
