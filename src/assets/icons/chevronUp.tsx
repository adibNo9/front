import React from 'react';

export const ChevronUp: React.FC<React.SVGAttributes<{}>> = props => (
    <svg
        width="15"
        height="10"
        viewBox="0 0 15 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M1 8.33594L7.24668 1.99973L13.4934 8.33594"
            stroke="#F28665"
            stroke-width="1.80853"
            stroke-linecap="round"
        />
    </svg>
)