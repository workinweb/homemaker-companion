'use client'

import React from "react";
import {NextUIProvider} from '@nextui-org/react'
import {SnackbarProvider} from 'notistack'

export function Providers({children}: { children: React.ReactNode }) {
    return (
        <SnackbarProvider autoHideDuration={3000} anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}>
            <NextUIProvider>

                {children}
            </NextUIProvider>
        </SnackbarProvider>

    )
}

