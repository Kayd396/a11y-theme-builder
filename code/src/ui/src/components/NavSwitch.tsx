﻿/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React from 'react';
import { styled, Switch, Stack, Typography } from '@mui/material';

interface Props {
    leftLabel?: string;
    rightLabel?: string;
    leftColor?: string;
    rightColor?: string;
    size?: number;
    inputProps?: any;
    checked?: boolean;
    onChange?: Function;
}

export const NavSwitch: React.FC<Props> = ({leftLabel, rightLabel, leftColor, rightColor, size, checked, onChange}) => {
    const handleOnChange = (event:any) => {
        const value = event.target.value;
        if (onChange) {
            onChange();
        }
    }

    const sz = size || 1.5;
    const MySwitch = styled(Switch)(({ theme }) => ({
        width: 28 * sz,
        height: 16 * sz,
        padding: 0,
        display: 'flex',
        '&:active': {
            '& .MuiSwitch-thumb': {
                width: 15 * sz,
            },
            '& .MuiSwitch-switchBase.Mui-checked': {
                transform: 'translateX(9px)',
            },
        },
        '& .MuiSwitch-switchBase': {
            padding: 2 * sz,
            '&.Mui-checked': {
                transform: 'translateX(' + 12 * sz + 'px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    opacity: "var(--quiet)",
                    backgroundColor: "var(--on-background)",
                },
            },
        },
        '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
            width: 12 * sz,
            height: 12 * sz,
            borderRadius: 6 * sz,
            transition: theme.transitions.create(['width'], {
                duration: 200 * sz,
            }),
        },
        '& .MuiSwitch-track': {
            borderRadius: 8 * sz,
            opacity: 1,
            backgroundColor: "var(--button)",
            boxSizing: 'border-box',
        },
    }))

    return (
        <Stack direction="row" spacing={1} alignItems="center">
            {leftLabel && <Typography>{leftLabel}</Typography>}
            <MySwitch 
                checked={checked} 
                onChange={handleOnChange} 
                inputProps={{ 'aria-label': '' }} 
            />
            {rightLabel && <Typography>{rightLabel}</Typography>}
         </Stack>                        
    )

}