import React from 'react';

export const LargeUncheckIcon: React.FC<React.SVGAttributes<{}>> = props => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i_46_98470)">
            <rect x="0.832031" y="0.201172" width="19.0061" height="19.0061" fill="white" />
        </g>
        <defs>
            <filter id="filter0_i_46_98470" x="0.832031" y="0.201172" width="19.0059" height="19.9811" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="0.975222" />
                <feGaussianBlur stdDeviation="0.975222" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.67451 0 0 0 0 0.67451 0 0 0 0 0.67451 0 0 0 1 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_46_98470" />
            </filter>
        </defs>
    </svg>

)