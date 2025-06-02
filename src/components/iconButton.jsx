//  Button banabo.
// Jeitar diffrent size hbe
// hover property hbe
// difrent color hbe

import { cva } from "class-variance-authority"
import clsx from "clsx"
import { Component } from "react"

const buttonStyles =cva('',{
    variants: {
        size: {
            sm: 'text-sm',
            md: 'text-md',
            lg: 'text-lg',
        },
        color: {
            primary: 'bg-primary text-white',
            secondary: 'bg-secondary text-white',
        },
    },
    defaultVariants: {
        size: 'md',
        color: 'primary',
    },
})

const IconButton = ({children,size,color,className}) => {
    return (
        <Component className={clsx(buttonStyles({size, color, className}))}>
            {children}
        </Component>
    )
}


export default IconButton