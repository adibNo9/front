import React from 'react';

export const SmallUncheckIcon: React.FC<React.SVGAttributes<{}>> = props => (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i_4_9771)">
            <rect y="0.472656" width="16.4733" height="16.4733" fill="white" />
        </g>
        <defs>
            <filter id="filter0_i_4_9771" x="0" y="0.472656" width="16.4736" height="17.3888" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="0.915183" />
                <feGaussianBlur stdDeviation="0.915183" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.67451 0 0 0 0 0.67451 0 0 0 0 0.67451 0 0 0 1 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_4_9771" />
            </filter>
        </defs>
    </svg>

)