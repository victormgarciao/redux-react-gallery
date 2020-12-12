import React from 'react';

export function Button (props) {
    const {
        children,
        onClick,
        style,

        ...buttonTagProps
    } = props;

    return (
        <button
            style={style}
            onClick={onClick}
            {...buttonTagProps}
        >
            <span>{children}</span>
        </button>
    );
};
