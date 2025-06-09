import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

export default function Icon({ children, ...props }) {
    return (
        <SvgIcon  {...props}>
            {/* https://heroicons.com */}
            {children}
        </SvgIcon>
    );
}
