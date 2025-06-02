//  Button banabo.
// Jeitar diffrent size hbe
// hover property hbe
// difrent color hbe

import { cva } from "class-variance-authority"
import clsx from "clsx"
import { Component } from "react"

const buttonStyles =cva(' max-w-[100px] flex items-center justify-center gap-2 px-4 py-2 rounded-full cursor-pointer',{
    variants: {
        size: {
            sm: 'text-sm',
            md: 'text-md',
            lg: 'text-lg',
        },
        color: {
            primary: 'bg-red-400 text-white',
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
        <div as='button' className={clsx(buttonStyles({size, color, className}))}>
            {children}
        </div>
    )
}


export default IconButton